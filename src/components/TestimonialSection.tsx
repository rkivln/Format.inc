import { Quote } from "lucide-react";
import { TESTIMONIAL } from "../data";

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="relative py-28 px-6 sm:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      {/* Background large blockquote quote graphic accent */}
      <div className="absolute top-10 left-10 text-zinc-900 select-none opacity-20 pointer-events-none">
        <Quote className="w-48 h-48 stroke-[0.5]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Core quote display spanning nearly full desktop width */}
        <div className="w-full text-left md:text-center max-w-5xl mx-auto mb-16">
          <p className="text-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight">
            "I'm not usually a podcast person, <span className="italic block sm:inline text-amber-100/90 underline decoration-amber-500/80 decoration-wavy underline-offset-8">but this was absolutely worth tuning into.</span> It's engaging, thoughtful, and gave me a much clearer sense of what our customers care about."
          </p>
        </div>

        {/* Right aligned author photo connected physically to orange banner block */}
        <div className="flex justify-end w-full">
          <div className="flex flex-col sm:flex-row items-stretch rounded-lg overflow-hidden border border-white/5 shadow-2xl max-w-md bg-zinc-950">
            
            {/* Black and White Portrait */}
            <div className="w-full sm:w-28 h-32 float-left relative shrink-0">
              <img
                src={TESTIMONIAL.avatarUrl}
                alt="Portrait of Abby Minondo"
                className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </div>

            {/* Solid bright orange rectangle block joined physically */}
            <div className="bg-[#FF4500] p-6 flex flex-col justify-center text-left grow">
              {/* White Author name */}
              <h5 className="text-sans text-lg font-bold text-white tracking-wide">
                {TESTIMONIAL.author}
              </h5>
              
              {/* Author Title */}
              <p className="text-sans text-xs text-white/90 font-medium tracking-wide uppercase mt-1">
                {TESTIMONIAL.title}
              </p>
              
              {/* Small verified caption */}
              <div className="flex items-center gap-1.5 mt-3 text-[10px] text-white/80 font-mono">
                <span className="h-1 w-3 rounded-full bg-white animate-pulse" />
                <span>Format Power Listener</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
