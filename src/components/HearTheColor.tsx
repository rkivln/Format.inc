import { BLOG_COLUMNS } from "../data";

export default function HearTheColor() {
  return (
    <section id="hear-the-color" className="relative py-28 px-6 sm:px-12 lg:px-24 bg-[#050505]">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-neutral-900/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Subtitle center-aligned label */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#888888]">
            ON THE BLOG • How it works
          </span>
        </div>

        {/* H2 Center-aligned Serif */}
        <h2 className="text-serif text-5xl sm:text-6xl md:text-7xl text-white font-light tracking-tight mb-16 leading-none">
          Hear the color.
        </h2>

        {/* Three Column Desktop Grid / 1 Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left max-w-5xl mx-auto">
          {BLOG_COLUMNS.map((col, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Minimalist index indicator */}
              <div className="text-sans text-[10px] text-[#888888] font-mono tracking-widest">
                // 0{index + 1} DIRECTIVE
              </div>
              <p className="text-sans text-[14px] md:text-[15px] text-[#888888] font-light leading-relaxed">
                {col.text}
              </p>
            </div>
          ))}
        </div>

        {/* Subtitle / Footer of this section */}
        <div className="mt-16 text-[12px] md:text-xs text-gray-500 font-mono">
          <span>Read articles</span> • <span className="text-white hover:underline cursor-pointer">Listen to podcasts</span>
        </div>

      </div>
    </section>
  );
}
