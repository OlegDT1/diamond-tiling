import PageHero from '@/components/PageHero';
import ReviewCard from '@/components/ReviewCard';
import RatingStars from '@/components/RatingStars';
import CTASection from '@/components/CTASection';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import { testimonials } from '@/lib/data';
import { siteConfig } from '@/lib/site';

export const metadata = {
  title: 'Reviews | What Toronto Clients Say About Diamond Tiling',
  description:
    'Read real reviews from Toronto and GTA homeowners, builders and contractors. Diamond Tiling holds a 4.9-star rating across 127+ reviews for premium tile installation.',
  alternates: { canonical: '/reviews' },
};

// Review schema for rich results.
function ReviewSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${siteConfig.name} — Tile Installation Services`,
    description: siteConfig.description,
    brand: { '@type': 'Brand', name: siteConfig.name },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      datePublished: t.date,
      reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
      reviewBody: t.quote,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export default function ReviewsPage() {
  const distribution = [
    { stars: 5, pct: 94 },
    { stars: 4, pct: 5 },
    { stars: 3, pct: 1 },
    { stars: 2, pct: 0 },
    { stars: 1, pct: 0 },
  ];

  return (
    <>
      <ReviewSchema />
      <PageHero
        eyebrow="Reviews"
        title="Loved by homeowners & builders"
        description="Our reputation is everything. Here is what clients across Toronto and the GTA have to say about working with Diamond Tiling."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <Reveal>
            <div className="grid gap-8 rounded-3xl border border-white/10 bg-charcoal/40 p-8 sm:p-10 lg:grid-cols-[280px_1fr] lg:items-center">
              <div className="text-center lg:border-r lg:border-white/10 lg:pr-8">
                <div className="font-display text-6xl font-semibold text-white">
                  {siteConfig.rating.value}
                </div>
                <div className="mt-3 flex justify-center">
                  <RatingStars rating={5} size={20} />
                </div>
                <p className="mt-3 text-sm text-platinum-dim">
                  Based on {siteConfig.rating.count}+ Google reviews
                </p>
              </div>

              <div className="space-y-2.5">
                {distribution.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-sm">
                    <span className="w-12 shrink-0 text-platinum-dim">{row.stars} star</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                      <span
                        className="block h-full rounded-full bg-accent"
                        style={{ width: `${row.pct}%` }}
                      />
                    </span>
                    <span className="w-10 shrink-0 text-right text-platinum-dim">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((review) => (
              <StaggerItem key={review.name}>
                <ReviewCard review={review} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        title="Join our list of happy clients"
        description="Experience the Diamond Tiling difference on your next project. Request a quote and we’ll be in touch within one business day."
      />
    </>
  );
}
