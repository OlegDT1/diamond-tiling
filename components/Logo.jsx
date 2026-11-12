import Image from 'next/image';
import { siteConfig } from '@/lib/site';

// The single source of the Diamond Tiling wordmark for the whole site — the
// header and footer both render this component, and the favicons in /public
// (favicon.ico, favicon.png, apple-touch-icon.png) are generated from this same
// artwork so the tab icon matches. The white variant reads cleanly on the
// site's dark palette; the dark variant (logo-ink.png) is used for the
// Organization logo in structured data, where the surface is light.
export default function Logo({ className = 'h-12 w-auto' }) {
  return (
    <Image
      src="/assets/logo-white.png"
      alt={`${siteConfig.name} — ${siteConfig.tagline}`}
      width={847}
      height={575}
      priority
      // Renders ~120px wide at most; without this Next.js assumes full viewport
      // width and ships a 1920px file for an 80px-tall mark.
      sizes="200px"
      className={className}
    />
  );
}
