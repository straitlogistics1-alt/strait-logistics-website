import { clientsContent } from "@/data/home/clients";

export function ClientStats() {
  return (
    <div className="mt-[clamp(2rem,3vw,2.5rem)] rounded-[18px] border border-slate-300/80 bg-white/65 px-[clamp(1rem,2vw,2rem)] py-[clamp(1.5rem,2.5vw,1.75rem)] shadow-[0_15px_45px_rgba(15,45,80,0.07)] backdrop-blur-xl">
      <div className="grid gap-y-[clamp(1.5rem,3vw,2rem)] sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {clientsContent.stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className={`flex items-center gap-[clamp(0.75rem,1vw,1rem)] px-[clamp(0.75rem,1.5vw,1.75rem)] ${
                index !== 0
                  ? "lg:border-l lg:border-slate-300/80"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#edf3fb] text-[#245b9f] sm:size-14 lg:size-16">
                <Icon
                  className="size-6 sm:size-7 lg:size-8"
                  strokeWidth={1.7}
                />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p className="text-[clamp(1rem,1.3vw,1.125rem)] font-extrabold leading-tight text-[#245b9f]">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs font-medium leading-snug text-[#263b55] sm:text-sm">
                  {stat.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}