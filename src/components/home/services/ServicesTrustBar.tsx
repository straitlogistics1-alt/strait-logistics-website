import {
  Globe2,
  ShieldCheck,
  Headphones,
  TrendingUp,
} from "lucide-react";

const trustItems = [
  {
    icon: Globe2,
    title: "Global Network",
    description: "Worldwide Partners",
  },
  {
    icon: ShieldCheck,
    title: "Secure Handling",
    description: "Safety Guaranteed",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always Here to Help",
  },
  {
    icon: TrendingUp,
    title: "Cost Effective",
    description: "Optimized for You",
  },
];

export function ServicesTrustBar() {
  return (
    <div className="mx-auto mt-10 grid max-w-[1120px] divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
      {trustItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-center gap-4 px-7 py-6"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-action-primary/10 text-action-primary">
              <Icon
                className="size-5"
                strokeWidth={1.8}
              />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                {item.title}
              </p>

              <p className="mt-0.5 text-xs text-slate-500">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}