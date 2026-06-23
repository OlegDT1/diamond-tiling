import Link from 'next/link';
import SectionHeading from './SectionHeading';
import ReviewCard from './ReviewCard';
import RatingStars from './RatingStars';
import { Stagger, StaggerItem } from './Reveal';
import { testimonials } from '@/lib/data';
import { siteConfig } from '@/lib/site';
import Icon from './Icons';

export default function Testimonials({ limit = 3 }) {
  const list = testimonials.slice(0, limit);
  return (
    <section className="border-y border-white/10 bg-ink-soft py-24 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Client Reviews"
            title="Trusted by homeowners & builders"
            description="Our reputation is built one flawless installation at a time. Here is what clients across Toronto and the GTA are saying."
          />
          <div className="shrink-0 rounded-2xl border border-white/10 bg-charcoal/50 px-6 py-5 text-center">
            <div className="font-display text-4xl font-semibold text-white">{siteConfig.rating.value}</div>
            <div className="mt-1.5 flex justify-center">
              <RatingStars rating={5} />
            </div>
            <div className="mt-1.5 text-xs text-platinum-dim">{siteConfig.rating.count} Google reviews</div>
          </div>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((review) => (
            <StaggerItem key={review.name}>
              <ReviewCard review={review} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Link href="/reviews" className="btn-ghost">
            Read all reviews
            <Icon.arrow width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
