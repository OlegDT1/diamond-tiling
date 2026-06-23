import RatingStars from './RatingStars';
import Icon from './Icons';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function ReviewCard({ review }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal/50 p-7">
      <div className="flex items-center justify-between">
        <RatingStars rating={review.rating} />
        {/* Google "G" mark to echo a review-platform card */}
        <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Google review">
          <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2-1.9 3.3-4.7 3.3-7.8z" />
          <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.3 1.1-3.8 1.1-2.9 0-5.3-1.9-6.2-4.6H2.2v2.8A11 11 0 0 0 12 23z" />
          <path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.2a11 11 0 0 0 0 9.8z" />
          <path fill="#EA4335" d="M12 5.4c1.6 0 3 .6 4.2 1.7l3.1-3.1A11 11 0 0 0 2.2 7.1l3.6 2.8C6.7 7.3 9.1 5.4 12 5.4z" />
        </svg>
      </div>

      <Icon.quote className="mt-5 text-accent/30" />
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-platinum">{review.quote}</p>

      <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
          {initials(review.name)}
        </span>
        <div>
          <div className="text-sm font-semibold text-white">{review.name}</div>
          <div className="text-xs text-platinum-dim">
            {review.role} · {review.date}
          </div>
        </div>
      </div>
    </article>
  );
}
