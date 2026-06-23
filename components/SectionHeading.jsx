import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow ? (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-accent" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={`mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${
            light ? 'text-white' : ''
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-platinum-dim sm:text-lg">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
