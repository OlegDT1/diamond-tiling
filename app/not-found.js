import Link from 'next/link';
import Icon from '@/components/Icons';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink pt-20 lg:pt-28">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden />
      <div className="container-px relative text-center">
        <span className="font-display text-7xl font-semibold text-accent/30 sm:text-8xl">404</span>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">This tile is missing</h1>
        <p className="mx-auto mt-4 max-w-md text-platinum-dim">
          The page you’re looking for can’t be found. Let’s get you back to solid ground.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to Home
            <Icon.arrow width={18} height={18} />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
