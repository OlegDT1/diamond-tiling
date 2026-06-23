import Hero from '@/components/Hero';
import StatsBand from '@/components/StatsBand';
import ServicesOverview from '@/components/ServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProjectShowcase from '@/components/ProjectShowcase';
import FeaturedGallery from '@/components/FeaturedGallery';
import BeforeAfter from '@/components/BeforeAfter';
import VideoGallery from '@/components/VideoGallery';
import Testimonials from '@/components/Testimonials';
import ServiceArea from '@/components/ServiceArea';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Premium Tile Installation in Toronto & GTA',
  description:
    'Diamond Tiling is Toronto’s premium tile installer — bathroom renovations, porcelain slabs, custom showers, heated floors and waterproofing across the GTA. Request a quote today.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesOverview limit={8} />
      <ProjectShowcase />
      <FeaturedGallery limit={6} />
      <WhyChooseUs />
      <BeforeAfter />
      <VideoGallery />
      <Testimonials limit={3} />
      <ServiceArea />
      <CTASection />
    </>
  );
}
