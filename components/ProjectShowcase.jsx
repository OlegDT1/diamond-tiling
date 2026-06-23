import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Icon from './Icons';
import { projects, videos } from '@/lib/data';

const categoryLabels = {
  bathrooms: 'Luxury Bathroom',
  'porcelain-slabs': 'Porcelain Slab',
  showers: 'Custom Shower',
  floors: 'Tile Floor',
  'custom-homes': 'Custom Home',
};

function bySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
function videoBySlug(slug) {
  return videos.find((v) => v.slug === slug);
}

// Curated editorial mix of standout projects and finished-reveal videos.
const items = [
  { type: 'video', data: videoBySlug('marble-bath-reveal'), category: 'bathrooms' },
  { type: 'project', data: bySlug('travertine-porcelain-bathroom') },
  { type: 'project', data: bySlug('yorkville-luxury-ensuite') },
  {
    type: 'video',
    data: videoBySlug('slab-hallway-reveal'),
    category: 'bathrooms',
    title: 'Etobicoke Spa Retreat',
    blurb:
      'A spa-inspired ensuite featuring custom tilework, ambient lighting, a curbless shower, and luxury sauna details.',
  },
  { type: 'project', data: bySlug('emerald-glass-feature') },
].filter((i) => i.data);

export default function ProjectShowcase() {
  return (
    <section className="border-y border-white/10 bg-ink-soft py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Featured Projects"
          title="Signature work, in detail"
          description="A closer look at some of our favourite high-end installations — luxury bathrooms, custom showers and book-matched porcelain slabs across Toronto & the GTA."
        />

        <div className="mt-16 space-y-16 sm:space-y-24">
          {items.map((item, index) => {
            const reversed = index % 2 === 1;
            const category = item.type === 'video' ? item.category : item.data.category;
            const title = item.title ?? item.data.title;
            const blurb =
              item.blurb ??
              (item.type === 'video'
                ? 'A finished-project walkthrough captured on site — full-height tile, seamless transitions and a flawless final result.'
                : item.data.blurb);

            const gallery = item.type === 'project' ? item.data.gallery : null;

            return (
              <div key={index} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={reversed ? 'lg:order-2' : ''}>
                  {gallery && gallery.length === 2 ? (
                    // Two-shot mini-gallery: wide lead image stacked above a square detail.
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                        <Image
                          src={gallery[0]}
                          alt={`${title} — by Diamond Tiling`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                        <Image
                          src={gallery[1]}
                          alt={`${title} — custom walk-in shower by Diamond Tiling`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ) : gallery && gallery.length >= 3 ? (
                    // Mini-gallery: one tall lead image beside two stacked supporting shots.
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      <div className="relative col-span-2 aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                        <Image
                          src={gallery[0]}
                          alt={`${title} — walk-in shower by Diamond Tiling`}
                          fill
                          sizes="(max-width: 1024px) 66vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-3 sm:gap-4">
                        {gallery.slice(1, 3).map((src, gi) => (
                          <div
                            key={src}
                            className="relative aspect-square flex-1 overflow-hidden rounded-2xl border border-white/10"
                          >
                            <Image
                              src={src}
                              alt={`${title} — detail ${gi + 1} by Diamond Tiling`}
                              fill
                              sizes="(max-width: 1024px) 33vw, 17vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-2xl border border-white/10">
                      <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                        {item.type === 'video' ? (
                          <>
                            <video
                              className="absolute inset-0 h-full w-full object-cover"
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              poster={item.data.poster}
                              aria-label={`${title} video`}
                            >
                              <source src={item.data.src} type="video/mp4" />
                            </video>
                            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-ink/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Reel
                            </span>
                          </>
                        ) : (
                          <Image
                            src={item.data.image}
                            alt={`${title} — ${categoryLabels[category]} by Diamond Tiling`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                          />
                        )}
                      </div>
                    </div>
                  )}
                </Reveal>

                <Reveal delay={0.1} className={reversed ? 'lg:order-1' : ''}>
                  <div>
                    <span className="eyebrow">
                      <span className="h-px w-6 bg-accent" aria-hidden />
                      {categoryLabels[category] || 'Featured'}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
                    <p className="mt-4 leading-relaxed text-platinum-dim">{blurb}</p>
                    <Link href="/portfolio" className="btn-secondary mt-8">
                      Explore the Portfolio
                      <Icon.arrow width={16} height={16} />
                    </Link>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
