import PageHero from '@/components/PageHero';
import ReviewCard from '@/components/ReviewCard';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import Icon from '@/components/Icons';
import { testimonials } from '@/lib/data';
import { siteConfig, googleReviewsUrl } from '@/lib/site';

export const metadata = {
  title: 'Reviews | Tile Installation & Bathroom Renovations in Toronto',
  description:
    'Read verified Google reviews for Diamond Tiling — tile installation, custom showers and bathroom renovations across Toronto and the GTA.',
  alternates: { canonical: '/reviews' },
};

// Deliberately no Review/AggregateRating markup: review structured data must
// describe real, verifiable reviews collected on this site. Ours live on the
// Google Business Profile, where Google already surfaces them.

const commitments = [
  {
    icon: 'shield',
    title: 'WSIB insured & fully covered',
    description:
      'Every crew on your property is insured, so you carry none of the liability for the work we do.',
  },
  {
    icon: 'check',
    title: 'Certified waterproofing',
    description:
      'Wet areas are built to manufacturer-certified standards and leak-tested before a single tile goes on.',
  },
  {
    icon: 'star',
    title: 'Walkthrough before we invoice',
    description:
      'We walk the finished space with you and correct anything that falls short of what we promised.',
  },
];

export default function ReviewsPage() {
  const reviewsUrl = googleReviewsUrl();

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our clients say"
        description="Our reputation is everything. Read verified reviews from Toronto and GTA homeowners, builders and contractors on our Google Business Profile."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-charcoal/40 p-8 text-center sm:p-12">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Verified reviews on Google
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-platinum-dim">
                We keep our reviews where you can trust them — on our Google Business Profile,
                written by real clients and verified by Google. Read what homeowners and builders
                across the GTA have to say, or leave a review of your own project.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Read our Google reviews
                  <Icon.arrow width={18} height={18} />
                </a>
                <a href={siteConfig.phoneHref} className="btn-secondary">
                  <Icon.phone width={18} height={18} />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </Reveal>

          {testimonials.length ? (
            <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((review) => (
                <StaggerItem key={review.name}>
                  <ReviewCard review={review} />
                </StaggerItem>
              ))}
            </Stagger>
          ) : null}
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink-soft py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Why Clients Recommend Us"
            title="What you can hold us to"
            description="Reviews follow from how a job is run. These are the commitments behind every Diamond Tiling project."
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {commitments.map((item) => {
              const IconComp = Icon[item.icon] || Icon.check;
              return (
                <Reveal key={item.title}>
                  <div className="h-full rounded-2xl border border-white/10 bg-charcoal/40 p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <IconComp width={22} height={22} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-platinum-dim">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start your project?"
        description="Request a quote and we’ll be in touch within one business day with clear, transparent pricing."
      />
    </>
  );
}
