import Link from 'next/link';
import SectionHeading from './SectionHeading';
import ReviewCard from './ReviewCard';
import { Stagger, StaggerItem } from './Reveal';
import { testimonials } from '@/lib/data';
import Icon from './Icons';

export default function Testimonials({ limit = 3 }) {
  const list = testimonials.slice(0, limit);
  // Nothing to show until real client quotes are added — render nothing rather
  // than an empty section or placeholder praise.
  if (!list.length) return null;

  return (
    <section className="border-y border-white/10 bg-ink-soft py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Client Reviews"
          title="Trusted by homeowners & builders"
          description="Our reputation is built one flawless installation at a time. Here is what clients across Toronto and the GTA are saying."
        />

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
