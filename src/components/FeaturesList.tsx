import { Sparkles, Milestone, MessageCircleDashed } from "lucide-react";
import { FEATURES } from "../data";

export default function FeaturesList() {
  // Let's pair each feature card with a beautiful illustrative icon
  const featureIcons = [Sparkles, Milestone, MessageCircleDashed];

  return (
    <section id="features-list" className="relative py-28 px-6 sm:px-12 lg:px-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* UPPER TITLE HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#888888]">
              FEATURES
            </span>
          </div>
          <h2 className="text-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-tight max-w-xl">
            A premium listening experience for hyper-growth teams.
          </h2>
        </div>

        {/* 3-COLUMN EQUAL HEIGHT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {FEATURES.map((feat, idx) => {
            const Icon = featureIcons[idx];
            return (
              <div
                key={feat.id}
                className="flex flex-col justify-between bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:bg-zinc-900/80 transition-all duration-300"
              >
                <div>
                  {/* Card head layout */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sans text-[10px] text-orange-500 font-mono tracking-widest uppercase">
                      [ #0{idx + 1} CAPABILITY ]
                    </span>
                    <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center text-gray-400">
                      <Icon className="w-4 h-4 text-[#FF4500]" />
                    </div>
                  </div>

                  {/* Title of the Feature card */}
                  <h4 className="text-sans text-xl font-bold text-white tracking-wide mb-4">
                    {feat.title}
                  </h4>

                  {/* Smaller gray body text */}
                  <p className="text-sans text-xs md:text-sm text-[#888888] font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Card visual footer detail */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#888888]">
                  <span>Active & Synced</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
