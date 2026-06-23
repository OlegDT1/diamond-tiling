import PageHero from '@/components/PageHero';
import PortfolioGallery from '@/components/PortfolioGallery';
import VideoGallery from '@/components/VideoGallery';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Portfolio | Tile & Bathroom Projects in Toronto',
  description:
    'Browse Diamond Tiling’s portfolio of bathrooms, custom homes, porcelain slabs, floors and custom showers across Toronto and the GTA. See the craftsmanship for yourself.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Craftsmanship you can see"
        description="A selection of recent tile installations and renovations across Toronto and the GTA. Filter by category to explore bathrooms, custom homes, porcelain slabs, floors and showers."
      />
      <PortfolioGallery />
      <BeforeAfter />
      <VideoGallery />
      <Testimonials limit={3} />
      <CTASection
        title="See a project you love?"
        description="We can create something just as striking for your home. Request a quote and let’s start the conversation."
      />
    </>
  );
}
