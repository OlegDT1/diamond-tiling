import Icon from './Icons';

export default function RatingStars({ rating = 5, size = 16 }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-accent" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon.star
          key={i}
          width={size}
          height={size}
          className={i < rating ? 'text-accent' : 'text-white/15'}
        />
      ))}
    </span>
  );
}
