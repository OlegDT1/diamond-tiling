'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import Icon from './Icons';

const projectTypes = [
  'Bathroom Renovation',
  'Tile Installation',
  'Porcelain Slab Installation',
  'Custom Shower',
  'Heated Floors',
  'Waterproofing',
  'Backsplash',
  'Large Format Tile',
  'Other / Multiple',
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  message: '',
};

// Web3Forms access key — get a free one at https://web3forms.com (tied to oleg@diamond-tiling.com).
// Set NEXT_PUBLIC_WEB3FORMS_KEY in your environment / Vercel project settings.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    if (!form.projectType) next.projectType = 'Select a project type.';
    if (!form.message.trim()) next.message = 'Tell us a little about your project.';
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New quote request — ${form.projectType || 'Website'}`,
          from_name: 'Diamond Tiling Website',
          name: form.name,
          email: form.email,
          phone: form.phone,
          project_type: form.projectType,
          location: form.location,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm(initialState);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-charcoal/50 p-12 text-center"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Icon.check width={28} height={28} />
        </span>
        <h3 className="mt-6 text-2xl font-semibold text-white">Thank you — request received</h3>
        <p className="mt-3 max-w-md text-platinum-dim">
          We have received your quote request and will get back to you within one business day. For
          anything urgent, please call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-ghost mt-8"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-ink/60 px-4 py-3 text-sm text-white placeholder-platinum-dim/60 outline-none transition-colors focus:border-accent ${
      errors[field] ? 'border-red-400/60' : 'border-white/12'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-white/10 bg-charcoal/40 p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-platinum">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            className={fieldClass('name')}
            placeholder="Jane Doe"
          />
          {errors.name ? <p className="mt-1.5 text-xs text-red-400">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-platinum">
            Phone <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update('phone')}
            className={fieldClass('phone')}
            placeholder="(416) 555-0142"
          />
          {errors.phone ? <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-platinum">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
            className={fieldClass('email')}
            placeholder="jane@email.com"
          />
          {errors.email ? <p className="mt-1.5 text-xs text-red-400">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="location" className="mb-2 block text-sm font-medium text-platinum">
            Project Location
          </label>
          <input
            id="location"
            type="text"
            value={form.location}
            onChange={update('location')}
            className={fieldClass('location')}
            placeholder="Toronto, North York, Oakville…"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-platinum">
            Project Type <span className="text-accent">*</span>
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={update('projectType')}
            className={`${fieldClass('projectType')} appearance-none`}
          >
            <option value="" disabled>
              Select a project type…
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-charcoal text-white">
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p className="mt-1.5 text-xs text-red-400">{errors.projectType}</p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-platinum">
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={update('message')}
            className={`${fieldClass('message')} resize-none`}
            placeholder="Tell us about your space, timeline and the look you're after…"
          />
          {errors.message ? <p className="mt-1.5 text-xs text-red-400">{errors.message}</p> : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary mt-7 w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending…' : 'Request My Quote'}
        {status === 'submitting' ? null : <Icon.arrow width={18} height={18} />}
      </button>

      {status === 'error' ? (
        <p className="mt-4 text-center text-sm text-red-400">
          Something went wrong sending your request. Please try again, or call us directly.
        </p>
      ) : null}

      <p className="mt-4 text-center text-xs text-platinum-dim">
        We respect your privacy. Your details are only used to respond to your request.
      </p>
    </form>
  );
}
