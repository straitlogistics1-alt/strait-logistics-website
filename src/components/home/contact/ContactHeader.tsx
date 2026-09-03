import { contactContent } from "@/data/home/contact";

export function ContactHeader() {
  return (
    <div className="relative max-w-[720px]">
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-action-primary">
        {contactContent.eyebrow}
      </p>

      <h2 className="mt-2 text-[clamp(2.5rem,4vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-text-primary">
        {contactContent.title.map((line, index) => (
          <span
            key={line}
            className={index === 1 ? "block text-text-accent" : "block"}
          >
            {line}
          </span>
        ))}
      </h2>

      <div className="mt-6 h-[2px] w-20 bg-action-primary" />

      <p className="mt-5 max-w-[620px] text-base leading-8 text-text-secondary md:text-lg">
        {contactContent.description}
      </p>
    </div>
  );
}