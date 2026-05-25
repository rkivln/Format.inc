import { motion } from "motion/react";
import { Play, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden py-12 px-6 sm:px-12 lg:px-24">
      {/* Background with cinematic cozy-desk image with a rich warm tone */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=85"
          alt="Cozy cinematic desk setup with warm ambient lighting & green plants"
          className="w-full h-full object-cover object-center scale-105 filter brightness-95 opacity-70"
          referrerPolicy="no-referrer"
        />
        {/* Dark warm vignette background overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/30" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/40 to-[#050505]" />
        
        {/* Warm amber custom spotlight glow */}
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -left-[5%] bottom-[10%] w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Top Header Row within Hero */}
      <div className="relative z-10 w-full flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          {/* Custom Format Logo mark */}
          <div className="h-7 w-7 bg-white relative flex items-center justify-center overflow-hidden rounded">
            <div className="absolute top-0 left-0 w-3.5 h-7 bg-black" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF4500] z-10" />
          </div>
          <span className="font-serif font-extrabold text-xl tracking-tight text-white">Format</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="tracking-widest uppercase">Live Platform Preview</span>
        </div>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto w-full flex flex-col justify-center items-start text-left pt-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#888888]">
            Personalized Customer Insights in Weekly Podcasts
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-serif text-5xl sm:text-6xl md:text-7xl font-light text-white leading-[0.95] tracking-tight mb-6"
        >
          Personalized customer <br/>
          <span className="italic font-normal text-amber-100">insights</span> in weekly <br/>
          podcasts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sans text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-xl mb-8 leading-relaxed"
        >
          Format turns scattered transcripts, calls, and email threads into engaging briefing episodes. Stop scrolling through endless slack logs, start listening to actual user truth.
        </motion.p>

        {/* Action Buttons with high contrast, complying with rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
        >
          <button className="bg-white hover:bg-neutral-100 text-black font-sans font-medium text-xs md:text-sm px-8 py-3.5 rounded transition-all duration-300 flex items-center justify-center gap-2 tracking-wide font-semibold shadow-lg hover:shadow-white/10">
            Start for free
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="glassmorphism hover:bg-white/10 text-white font-sans font-medium text-xs md:text-sm px-8 py-3.5 rounded transition-all duration-300 flex items-center justify-center gap-2 tracking-wide font-semibold">
            <Play className="w-3.5 h-3.5 fill-white text-white" />
            Book a demo
          </button>
        </motion.div>
      </div>

      {/* Bottom Row within Hero featuring tag line or minimalist summary */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between mt-12 pt-6 border-t border-white/5 gap-6">
        <p className="text-sans text-xs md:text-sm text-[#888888] font-light max-w-md leading-relaxed">
          Format turns insights from customer call recordings, support tickets, and emails into personalized podcasts so you can hear your customers in full color anytime, anywhere.
        </p>

        {/* Small "Format" Logo block matching Bottom Right instruction */}
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/5 py-2 px-4 rounded-lg self-end md:self-auto">
          <div className="h-6 w-6 bg-white relative flex items-center justify-center overflow-hidden rounded">
            <div className="absolute top-0 left-0 w-3 h-6 bg-black" />
            <div className="w-1 h-1 rounded-full bg-[#FF4500] z-10" />
          </div>
          <div className="text-left leading-none">
            <span className="font-serif block text-sm font-bold tracking-tight text-white">Format</span>
            <span className="text-[8px] tracking-widest text-[#888888] uppercase">Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
