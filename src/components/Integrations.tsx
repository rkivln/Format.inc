import { Volume2, Sparkles, Leaf, Slack, MessageSquare, LifeBuoy, Cloud, Inbox, Video, Plus, Activity } from "lucide-react";

export default function Integrations() {
  // Configured list of popular integrations with Lucide icons mapping
  const integrationButtons = [
    { name: "Gong", icon: Volume2, detail: "Call Audio" },
    { name: "Fireflies", icon: Sparkles, detail: "Meeting AI" },
    { name: "Granola", icon: Leaf, detail: "Mac client" },
    { name: "Slack", icon: Slack, detail: "Work channels" },
    { name: "Intercom", icon: MessageSquare, detail: "Chats & Sync" },
    { name: "Zendesk", icon: LifeBuoy, detail: "Tickets audio" },
    { name: "Salesforce", icon: Cloud, detail: "Customer CRM" },
    { name: "HubSpot", icon: Activity, detail: "Integrator" },
  ];

  return (
    <section id="integrations" className="relative py-28 px-6 sm:px-12 lg:px-24 bg-[#050505]">
      {/* Background radial warmth */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Cinematic profile portrait */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient orange glow frame underlay */}
            <div className="absolute inset-x-4 inset-y-4 bg-[#FF4500]/10 rounded-2xl blur-xl pointer-events-none transition-transform duration-500 group-hover:scale-105" />
            
            {/* Cinematic cropped portrait */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/images/gokulan-linkedin-profile.jpeg"
                alt="Portrait of Gokulan"
                className="w-full h-full object-cover filter brightness-[0.75] sepia-[0.1] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Heavy gradients to bind the picture into black darkness edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-[#050505]/40" />
            </div>
            
            {/* Floating absolute tag */}
            <div className="absolute bottom-6 left-6 bg-zinc-950/90 border border-white/10 px-4 py-2.5 rounded-lg text-left backdrop-blur-md select-none">
              <span className="text-[9px] uppercase tracking-wider text-[#888888] font-mono">Current Channel</span>
              <p className="text-white text-xs font-serif font-bold mt-0.5">Equais Team Meeting Digest</p>
            </div>
          </div>

          {/* RIGHT COLUMN: Header details + Square Buttons 4x2 Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-5 rounded-full bg-[#FF4500]" />
              <span className="text-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#888888]">
                Unified Data Sources
              </span>
            </div>

            <h3 className="text-serif text-4xl sm:text-5xl text-white font-light tracking-tight leading-[1.05] mb-6">
              Connect to everywhere you speak with your customers.
            </h3>
            
            <p className="text-sans text-xs md:text-sm text-[#888888] font-light leading-relaxed max-w-xl mb-12">
              Format connects with the customer touchpoints you already rely on—call recorders, live meet logs, text channels, or ticket desks. Audio signals are automatically transcribed, labeled, and prepared for your next personalized weekly episode.
            </p>

            {/* Grid layout of 4x2 small zinc-900 buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {integrationButtons.map((btn, idx) => {
                const IconComponent = btn.icon;
                return (
                  <button
                    key={idx}
                    className="flex flex-col items-center justify-center bg-zinc-900 hover:bg-zinc-800/80 border border-white/5 hover:border-white/20 rounded-xl p-5 text-center transition-all duration-300 group cursor-pointer"
                  >
                    {/* Circle icon container */}
                    <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center text-white mb-3 shadow transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#FF4500] group-hover:text-white">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    
                    {/* Caption details requested by prompt */}
                    <span className="text-sans text-[12px] font-bold text-white block">
                      {btn.name}
                    </span>
                    <span className="text-sans text-[9px] text-[#888888] font-light tracking-tight mt-0.5">
                      {btn.detail}
                    </span>
                  </button>
                );
              })}

              {/* +20 more button */}
              <button className="flex flex-col items-center justify-center bg-zinc-900/40 border border-dashed border-white/5 rounded-xl p-5 text-center hover:bg-zinc-900/80 transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-zinc-950/80 flex items-center justify-center text-[#888888] mb-3">
                  <Plus className="w-4 h-4" />
                </div>
                <span className="text-sans text-[12px] font-semibold text-gray-400 block">
                  +12 more
                </span>
                <span className="text-sans text-[9px] text-[#888888] font-light mt-0.5">
                  See instructions
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
