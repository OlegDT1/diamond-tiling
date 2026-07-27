import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import Icon from './Icons';

// Persistent tap-to-call bar for phones. Most tile and renovation enquiries
// arrive as calls rather than form fills, so the number stays reachable from
// any page without scrolling. Hidden from lg upward, where the header already
// shows the number. Rendered as a server component — no client JS.
export default function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/90 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-stretch gap-2.5 px-4 py-3">
        <a
          href={siteConfig.phoneHref}
          aria-label={`Call ${siteConfig.name} at ${siteConfig.phoneDisplay}`}
          className="flex flex-[1.35] items-center justify-center gap-2.5 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-ink transition-colors duration-200 active:bg-accent-soft"
        >
          <Icon.phone width={18} height={18} />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-medium uppercase tracking-widest text-ink/70">
              Call Now
            </span>
            <span className="mt-0.5 text-[15px] font-bold">{siteConfig.phoneDisplay}</span>
          </span>
        </a>

        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 active:border-accent active:text-accent"
        >
          Get a Quote
          <Icon.arrow width={16} height={16} />
        </Link>
      </div>
    </div>
  );
}
