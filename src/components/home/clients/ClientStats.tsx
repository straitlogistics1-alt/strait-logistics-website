import { clientsContent } from "@/data/home/clients";

export function ClientStats() {
  return (
    <div className="mt-8 rounded-[18px] border border-slate-300/80 bg-white/65 px-5 py-6 shadow-[0_15px_45px_rgba(15,45,80,0.07)] backdrop-blur-xl sm:px-8 md:py-7">
      <div className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {clientsContent.stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className={`flex items-center gap-4 px-4 lg:px-7 ${
                index !== 0
                  ? "lg:border-l lg:border-slate-300/80"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#edf3fb] text-[#245b9f]">
                <Icon
                  className="size-8"
                  strokeWidth={1.7}
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-lg font-extrabold leading-tight text-[#245b9f]">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm font-medium leading-snug text-[#263b55]">
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