import { Volume2, Play, Sliders, Calendar, Mic, Sparkles, MessageCircle, FileText } from "lucide-react";

export default function AppShowcase() {
  return (
    <section id="showcase" className="relative py-20 px-6 sm:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Subtle heading description */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-[#888888] font-semibold mb-2">Visual Dashboard Preview</span>
          <h2 className="text-serif text-3xl sm:text-4xl text-white font-light tracking-tight">The ultimate listening workspace.</h2>
        </div>

        {/* Mockup Container: Web with overlapping Mobile */}
        <div className="relative w-full max-w-5xl mx-auto flex justify-center items-center">
          
          {/* Main Web Dashboard Mockup */}
          <div className="w-full bg-[#0D0D0F] rounded-2xl border border-white/10 shadow-2xl overflow-hidden shadow-amber-950/5 select-none md:mr-16">
            
            {/* Header bar matching a luxury browser/desktop client */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#141416]/95 border-b border-white/5">
              <div className="flex items-center gap-2">
                {/* Visual Window Dots */}
                <div className="flex gap-1.5 mr-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 block" />
                </div>
                {/* App name */}
                <span className="font-serif font-black text-sm tracking-tight text-white mb-0.5">Format</span>
              </div>

              {/* Center Navigation elements */}
              <div className="hidden md:flex items-center gap-6 text-[11px] font-medium text-gray-400">
                <span className="text-white border-b-2 border-[#FF4500] pb-1 cursor-pointer">Listen</span>
                <span className="hover:text-white transition-colors cursor-pointer">Insights</span>
                <span className="hover:text-white transition-colors cursor-pointer">Files</span>
                <span className="hover:text-white transition-colors cursor-pointer">Team Settings</span>
              </div>

              {/* Active channel notification indicator */}
              <div className="flex items-center gap-2 bg-amber-950/40 border border-amber-900/30 px-3 py-1 rounded text-[11px] text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>Podcast generated May 25</span>
              </div>
            </div>

            {/* Content Body of Dashboard Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px] divide-y md:divide-y-0 md:divide-x divide-white/5">
              
              {/* Sidebar filter elements */}
              <div className="md:col-span-3 p-5 flex flex-col gap-6 text-[#888888]">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-3">Sources</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-white bg-white/5 px-2.5 py-1.5 rounded font-sans text-xs">
                      <Volume2 className="w-3.5 h-3.5 text-amber-500" />
                      <span>Intercom Chats</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded hover:text-white transition-colors text-xs">
                      <Mic className="w-3.5 h-3.5" />
                      <span>Weekly Support Calls</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded hover:text-white transition-colors text-xs">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Zendesk Tickets</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-3">Episodes</span>
                  <div className="flex flex-col gap-1.5 text-xs text-sans">
                    <span className="px-2 py-1 text-white border-l-2 border-amber-500 bg-amber-500/5 block font-medium">Issue #32: Billing Complaints</span>
                    <span className="px-2 py-1 hover:text-white transition-colors block">Issue #31: UI Unresponsiveness</span>
                    <span className="px-2 py-1 hover:text-white transition-colors block">Issue #30: Customer Onboarding</span>
                  </div>
                </div>
              </div>

              {/* Main player workspace inside Dashboard mockup */}
              <div className="md:col-span-9 p-6 flex flex-col justify-between">
                
                {/* Podcast episode state */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-white/5 gap-3">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#888888] font-bold block">Active Show</span>
                    <h3 className="font-serif text-lg text-white mt-1">Issue #32: Weekly Billing & Feature Request Deep-Dive</h3>
                    <p className="text-[11px] text-gray-400 font-sans mt-0.5">Length: 12 mins • Stitched from 4 support recordings</p>
                  </div>
                  <span className="text-sans text-[10px] bg-zinc-800 text-white px-2.5 py-1 rounded-full border border-white/10 self-end md:self-auto">
                    Hosted by Abby (AI Guide)
                  </span>
                </div>

                {/* Animated Simulated Audio Grid or Waveform */}
                <div className="py-6 flex flex-col justify-center">
                  <div className="flex items-end justify-between gap-[3px] h-20 px-8 w-full">
                    {/* Simulated bars */}
                    {[12, 18, 15, 32, 45, 20, 15, 25, 42, 60, 52, 30, 18, 25, 45, 55, 62, 70, 40, 22, 18, 30, 48, 55, 35, 15, 10, 15, 35, 45, 32, 25, 12, 28, 48, 38, 24, 15, 20, 35, 52, 42, 20, 10, 18, 32, 24, 12, 8].map((h, i) => (
                      <span
                        key={i}
                        style={{ height: `${h}%` }}
                        className={`w-full rounded-sm block ${
                          i > 10 && i < 30 ? "bg-[#FF4500] animate-pulse" : "bg-neutral-700"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-3 text-[10px] text-[#888888] font-mono">
                    <span>0:11 / 12:45</span>
                    <span className="text-[#FF4500] font-sans">Highlight Segment: "Refusing subscriptions"</span>
                  </div>
                </div>

                {/* Transcript read-along preview */}
                <div className="p-4 bg-zinc-950/80 rounded border border-white/5">
                  <span className="text-[9px] font-bold text-amber-500 uppercase flex items-center gap-1 mb-2">
                    <Sparkles className="w-3 h-3" />
                    Live Transcript
                  </span>
                  <p className="text-[12px] font-light text-gray-300 leading-relaxed text-sans">
                    "The first insight is from Maya Chen from Northwind. <span className="bg-[#FF4500]/20 text-white border-b-2 border-[#FF4500] px-1 font-medium">Customer is requesting refund capability directly inside their subscription menu</span> as current setup prevents quick billing terminations..."
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Overlapping Mobile App Mockup */}
          <div className="absolute right-0 bottom-[-32px] md:right-[-16px] md:-bottom-8 w-[240px] bg-[#0A0A0C] border border-white/20 rounded-[32px] py-4 px-3 shadow-2xl flex flex-col justify-between select-none hover:scale-105 transition-transform duration-500 z-20">
            <div className="w-16 h-4 bg-[#141416] rounded-full mx-auto mb-4 border border-white/5 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-neutral-800" />
            </div>

            {/* Mobile Header */}
            <div className="flex items-center justify-between px-2 mb-3">
              <span className="text-[9px] text-[#888888] font-mono">9:41</span>
              <div className="flex items-center gap-1">
                {/* Logo mark */}
                <div className="h-3.5 w-3.5 bg-white relative flex items-center justify-center overflow-hidden rounded-sm">
                  <div className="absolute top-0 left-0 w-2 h-3.5 bg-black" />
                </div>
                <span className="font-serif font-black text-[9px]">Format</span>
              </div>
              <span className="text-[9px] text-[#888888]">100%</span>
            </div>

            {/* Album/Podcast Art */}
            <div className="w-full aspect-square bg-[#111] rounded-2xl relative overflow-hidden flex flex-col justify-between p-3 border border-white/5">
              {/* Radial gradient background style */}
              <div className="absolute inset-0 bg-radial-gradient from-blue-500/25 via-purple-600/25 to-transparent pointer-events-none" />
              
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[8px] bg-white/10 text-white rounded px-1.5 py-0.5">Live</span>
                <span className="text-[8px] font-mono text-gray-500">Vol. 32</span>
              </div>

              <div className="relative z-10">
                <h4 className="font-serif text-sm font-semibold text-white leading-none">Deal Barriers <br/>& Blockers</h4>
                <p className="text-[8px] text-gray-400 mt-1">May 2026 Digest</p>
              </div>
            </div>

            {/* Player details */}
            <div className="mt-4 px-2">
              <h5 className="text-[11px] font-bold text-white text-sans truncate">Deal Barriers and Competitors</h5>
              <p className="text-[8px] text-[#888888] text-sans">Stitched Podcast Episode</p>
              
              {/* Small audio slider */}
              <div className="relative mt-3">
                <div className="w-full h-1 bg-zinc-800 rounded-full" />
                <div className="absolute top-0 left-0 w-1/3 h-1 bg-[#FF4500] rounded-full" />
                <div className="absolute top-[-2px] left-[33%] w-2 h-2 rounded-full bg-[#FF4500]" />
              </div>

              <div className="flex justify-between items-center text-[7px] text-gray-500 font-mono mt-1">
                <span>0:11</span>
                <span>12:45</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-3 mb-2">
              <span className="text-white text-[10px] font-mono cursor-pointer">15s</span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black cursor-pointer shadow hover:scale-105 active:scale-95 transition-transform">
                <Play className="w-3.5 h-3.5 fill-black pl-0.5" />
              </div>
              <span className="text-white text-[10px] font-mono cursor-pointer">30s</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
