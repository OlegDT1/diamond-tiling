import Image from 'next/image';
import { siteConfig } from '@/lib/site';

// Brand wordmark. The white logo reads cleanly on the site's dark palette.
export default function Logo({ className = 'h-12 w-auto' }) {
  return (
    <Image
      src="/assets/logo-white.png"
      alt={`${siteConfig.name} — ${siteConfig.tagline}`}
      width={847}
      height={575}
      priority
      className={className}
    />
  );
}
