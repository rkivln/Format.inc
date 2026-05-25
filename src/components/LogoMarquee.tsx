import { CUSTOMER_LOGOS } from "../data";

export default function LogoMarquee() {
  // Duplicate logos list to enable seamless infinite scroll animation on screen
  const marqueeItems = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

  return (
    <section id="marquee" className="py-16 bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        
        {/* SMALL LABEL */}
        <div className="flex justify-center items-center gap-1.5 mb-8">
          <span className="w-1 h-1 rounded-full bg-neutral-600" />
          <span className="text-[10px] text-[#888888] font-bold uppercase tracking-widest text-sans">
            Trusted by modern product teams
          </span>
          <span className="w-1 h-1 rounded-full bg-neutral-600" />
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="relative w-full overflow-hidden">
          {/* Edge fades to blend logos naturally */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          {/* Scrolling row */}
          <div className="flex whitespace-nowrap items-center gap-12 md:gap-20 py-2 animate-[marquee_25s_linear_infinite_normal] select-none">
            {marqueeItems.map((brand, index) => (
              <div 
                key={index}
                className="inline-flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                {/* Custom typography for each logo as requested */}
                <span className={`${brand.fontClass} text-[#FFFFFF]`}>
                  {brand.name}
                </span>
                
                {/* Decorative separation dot between logos */}
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 mx-1 md:mx-3" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Embedded inline CSS for the pure-CSS keyframe marquee scroll to avoid tailwind plugin dependency issues */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33333%);
          }
        }
      `}</style>
    </section>
  );
}
