import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import { siteConfig } from '@/lib/site';
import { faqs } from '@/lib/data';

export const metadata = {
  title: 'Contact | Request a Tile Installation Quote in Toronto',
  description:
    'Request a quote from Diamond Tiling. Call or submit our form for tile installation, bathroom renovations and porcelain slab projects across Toronto & the GTA.',
  alternates: { canonical: '/contact' },
};

const contactCards = [
  {
    icon: 'phone',
    label: 'Call Us',
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    note: 'Tap to call — fastest response',
  },
  {
    icon: 'mail',
    label: 'Email Us',
    value: siteConfig.email,
    href: siteConfig.emailHref,
    note: 'We reply within one business day',
  },
  {
    icon: 'clock',
    label: 'Hours',
    value: siteConfig.hours,
    note: 'Closed Sundays & holidays',
  },
];

function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export default function ContactPage() {
  return (
    <>
      <FaqSchema />
      <PageHero
        eyebrow="Contact"
        title="Request your free quote"
        description="Tell us about your project and we’ll provide a clear, transparent estimate. Prefer to talk it through? Give us a call — we’re happy to help."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: contact details + map */}
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Let’s start your project"
              description="Reach out any way you like. We serve homeowners, builders and contractors across Toronto and the entire GTA."
            />

            <div className="mt-10 space-y-4">
              {contactCards.map((card) => {
                const IconComp = Icon[card.icon] || Icon.phone;
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-charcoal/40 p-5 transition-colors duration-300 hover:border-accent/40">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <IconComp width={22} height={22} />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-platinum-dim">
                        {card.label}
                      </div>
                      <div className="mt-1 text-base font-medium text-white">{card.value}</div>
                      <div className="mt-0.5 text-xs text-platinum-dim">{card.note}</div>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={card.label}>
                    {card.href ? (
                      <a href={card.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.1}>
              <a href={siteConfig.phoneHref} className="btn-primary mt-6 w-full text-base">
                <Icon.phone width={18} height={18} />
                Click to Call {siteConfig.phone}
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title={`${siteConfig.name} location — Toronto, Ontario`}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-79.85%2C43.45%2C-79.10%2C43.95&layer=mapnik&marker=43.6489%2C-79.3835"
                  className="h-[320px] w-full grayscale-[0.3]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: quote form */}
          <div>
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-ink-soft py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Questions, answered"
            description="A few things clients often ask before getting started. Don’t see your question? Just reach out."
          />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10">
            {faqs.map((faq) => (
              <Reveal key={faq.question}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-white">
                    {faq.question}
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-accent transition-transform duration-300 group-open:rotate-45">
                      <Icon.arrow width={14} height={14} className="rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-platinum-dim">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
