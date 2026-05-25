import { Headphones, Sparkles, Play, Clock, ArrowUpRight } from "lucide-react";

export default function FeatureGrid() {
  return (
    <section id="features-grid" className="relative py-24 px-6 sm:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetrical 3-Column Bento Grid on Desktop | 1 Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Left - Hugh's Weekly Product Report (4 Columns) */}
          <div className="md:col-span-4 flex flex-col justify-between h-full group">
            <div className="w-full bg-[#0D0D0F] border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[350px] relative overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/10">
              
              {/* Soft warm pulse background decoration */}
              <div className="absolute inset-0 bg-radial-gradient from-amber-600/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-[10px] text-gray-500 font-mono">INSIGHT CARD</span>
                <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-mono">Vol. #15</span>
              </div>

              {/* Dynamic warm kaleidoscope / radial concentric design */}
              <div className="w-32 h-32 mx-auto relative flex items-center justify-center rounded-full overflow-hidden border border-amber-500/20 shadow-lg shadow-amber-950/20 mb-6">
                {/* Visual circular target target radial patterns mimicking sound / colors */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4500] via-[#EAB308] to-[#EF4444] animate-spin" style={{ animationDuration: '40s' }} />
                <div className="absolute w-[80%] h-[80%] bg-black rounded-full" />
                <div className="absolute w-[70%] h-[70%] bg-gradient-to-bl from-amber-400 to-[#FF4500] rounded-full opacity-90 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute w-[50%] h-[50%] bg-black rounded-full" />
                <div className="absolute w-[40%] h-[40%] bg-gradient-to-t from-yellow-300 to-amber-600 rounded-full animate-pulse" />
                <div className="absolute w-[20%] h-[20%] bg-black rounded-full" />
                <Headphones className="w-5 h-5 text-white relative z-10" />
              </div>

              {/* Episode Label Details */}
              <div className="text-left relative z-10">
                <p className="text-[10px] text-[#888888] font-mono tracking-widest uppercase">Weekly Report</p>
                <h4 className="font-serif text-lg text-white font-semibold mt-1">Hugh's Weekly Product Report</h4>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#FF4500]" /> 5m 25s</span>
                  <span>•</span>
                  <span>Created for Hugh Miller</span>
                </div>
              </div>

              {/* Interactive Player trigger design */}
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center relative z-10">
                <span className="text-[10px] text-gray-400 font-sans">Ready to broadcast</span>
                <button className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-black pl-0.5" />
                </button>
              </div>
            </div>

            {/* Required visual layout divider & label below mockup */}
            <div className="mt-4 pt-3 border-t border-neutral-700/80">
              <h5 className="text-sans text-xs font-semibold text-white tracking-wide">Personalized podcasts</h5>
              <p className="text-sans text-xs text-[#888888] mt-1 leading-relaxed">
                Format analyzes every customer conversation just for you, so you hear the full color of your customers' actual feedback.
              </p>
            </div>
          </div>

          {/* Card 2: Center - Mobile Overviews (Hugh's Weekly on Phone - 4 Columns) */}
          <div className="md:col-span-4 flex flex-col justify-between h-full group">
            <div className="w-full bg-[#0D0D0F] border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[350px] relative overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/10">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] text-gray-500 font-mono">PLAYER INTERFACE</span>
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              </div>

              {/* Simulated iPhone-like frame with music waveforms */}
              <div className="w-48 bg-[#050505] rounded-3xl mx-auto p-4 border border-white/10 shadow-xl flex flex-col justify-between min-h-[220px]">
                <div className="flex justify-between items-center text-[8px] text-gray-400 mb-2">
                  <span>9:41</span>
                  <span className="text-[7px] text-amber-500">FORMAT PLAY</span>
                </div>
                
                {/* Small wave */}
                <div className="flex items-center gap-1 h-12 px-2 bg-zinc-950 rounded-lg">
                  {[4, 8, 3, 7, 9, 2, 8, 4, 10, 6, 2, 7, 5, 8, 3, 5, 8, 6].map((v, i) => (
                    <span 
                      key={i} 
                      className={`h-[${v * 10}%] w-full block rounded-full ${
                        i < 8 ? 'bg-pink-500' : 'bg-zinc-800'
                      }`}
                      style={{ height: `${v * 10}%` }}
                    />
                  ))}
                </div>

                <div className="text-left mt-3">
                  <p className="text-[9px] text-pink-400 font-mono uppercase">EPISODE #32</p>
                  <p className="text-[11px] font-bold text-white truncate leading-tight">Billing Friction and Refunds Option</p>
                  <p className="text-[8px] text-[#888888] mt-0.5">Segment 1 • 1.2M listens</p>
                </div>

                <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/5">
                  <span className="text-[8px] text-gray-400">1.5x Speed active</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                </div>
              </div>

              {/* Footer info inside frame */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-gray-400">Audio Stitcher Engine</span>
                <span className="text-[10px] text-white flex items-center gap-1 hover:underline cursor-pointer">
                  Setup commute sync <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Required visual layout divider & label below mockup */}
            <div className="mt-4 pt-3 border-t border-neutral-700/80">
              <h5 className="text-sans text-xs font-semibold text-white tracking-wide">Listen on the move</h5>
              <p className="text-sans text-xs text-[#888888] mt-1 leading-relaxed">
                Format Podcasts are designed to fit into your life - on your commute, at the gym, or between rapid meetings - hands free.
              </p>
            </div>
          </div>

          {/* Card 3: Right - Desktop List View Detail (4 Columns) */}
          <div className="md:col-span-4 flex flex-col justify-between h-full group">
            <div className="w-full bg-[#0D0D0F] border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[350px] relative overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/10">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] text-gray-500 font-mono">DESKTOP METRICS</span>
                <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-2.5 py-0.5 rounded font-mono">Vol. #15</span>
              </div>

              {/* Interface layout representing list of events */}
              <div className="flex flex-col gap-2 mb-4">
                <div className="p-3 bg-zinc-950 rounded border border-white/5 text-left text-xs">
                  <div className="flex justify-between items-center text-[9px] text-[#888888] mb-1">
                    <span className="text-indigo-400">Slack Stream • Feature request</span>
                    <span>10 mins ago</span>
                  </div>
                  <p className="text-white font-medium">"Allow custom team dashboard exports"</p>
                </div>

                <div className="p-3 bg-[#FF4500]/5 rounded border border-[#FF4500]/20 text-left text-xs relative">
                  <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FF4500]" />
                  <div className="flex justify-between items-center text-[9px] text-amber-400/90 mb-1">
                    <span>Zendesk Call • Critical UX bug</span>
                    <span>30 mins ago</span>
                  </div>
                  <p className="text-white font-medium">"Billing tab fails to load for enterprise users"</p>
                </div>

                <div className="p-3 bg-zinc-950 rounded border border-white/5 text-left text-xs opacity-50">
                  <div className="flex justify-between items-center text-[9px] text-[#888888] mb-1">
                    <span>Intercom Hub</span>
                    <span>2 hours ago</span>
                  </div>
                  <p className="text-white">"Request for pricing clarity"</p>
                </div>
              </div>

              {/* Summary line */}
              <div className="pt-4 border-t border-white/5 text-[10px] text-[#888888] text-sans flex justify-between items-center">
                <span>Real-time sentiment analyzer</span>
                <span className="text-zinc-400 font-medium font-mono">98% Accuracy</span>
              </div>
            </div>

            {/* Required visual layout divider & label below mockup */}
            <div className="mt-4 pt-3 border-t border-neutral-700/80">
              <h5 className="text-sans text-xs font-semibold text-white tracking-wide">Go deeper when it matters</h5>
              <p className="text-sans text-xs text-[#888888] mt-1 leading-relaxed">
                Follow along with a live, highlighted transcript. Pause, skip, or jump directly straight to the original conversation stream instantly.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
