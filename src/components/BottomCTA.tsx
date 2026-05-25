import React, { useState } from "react";
import { CheckCircle2, Send, ShieldAlert, Sparkles, MoveRight } from "lucide-react";

export default function BottomCTA() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage("Please enter a valid business email address.");
      return;
    }
    
    // Simulate premium signup response
    setFormSubmitted(true);
    setErrorMessage("");
  };

  return (
    <footer id="contact" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#050505] text-white">
      
      {/* Background with same cinematic cozy desk image from Hero section */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=85"
          alt="Cozy workspace background with plants and amber glowing light reflection"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 opacity-50"
          referrerPolicy="no-referrer"
        />
        {/* Rich dark vignette cover on top and sides */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/50 to-[#050505]" />
        
        {/* Amber spot lighting glow */}
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Spacer or upper content separator of the footer components */}
      <div className="relative z-10 w-full pt-16" />

      {/* Centered Heading and Frosted Glass Box */}
      <div className="relative z-10 max-w-xl mx-auto w-full px-6 flex flex-col items-center justify-center text-center my-auto">
        
        {/* Centered H2 Title */}
        <h2 className="text-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight mb-8 leading-[1.05]">
          Hear your customers, <br/>
          <span className="italic text-amber-100">in their own voice.</span>
        </h2>

        {/* Semi-transparent Dark Frosted-Glass Container */}
        <div className="w-full dark-glassmorphism rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
          
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[9px] font-bold tracking-widest uppercase py-1 px-3 rounded-full flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            Early Invite Access
          </div>

          <h3 className="text-sans text-sm font-semibold text-gray-300 mt-2 mb-4">
            Ready to try out Format? Sign up and get early access below.
          </h3>

          {!formSubmitted ? (
            <form onSubmit={handleSignupSubmit} className="flex flex-col gap-4 text-left">
              
              {/* Optional alert message if error occurs */}
              {errorMessage && (
                <div className="flex items-center gap-2 bg-red-950/20 border border-red-900/30 text-red-400 py-2 px-3 rounded text-xs mb-1">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Email Address Field */}
              <div>
                <label className="text-sans text-[10px] text-[#888888] font-bold uppercase tracking-wider block mb-1.5 ms-1">
                  Work Email Address *
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-white/10 rounded-lg px-4 py-3 text-sans text-sm text-white focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-colors"
                />
              </div>

              {/* Company Name Field (High-fidelity addition) */}
              <div>
                <label className="text-sans text-[10px] text-[#888888] font-bold uppercase tracking-wider block mb-1.5 ms-1">
                  Company / Team Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Tech"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-white/10 rounded-lg px-4 py-3 text-sans text-sm text-white focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-colors"
                />
              </div>

              {/* Full width Solid White Button */}
              <button
                type="submit"
                className="w-full bg-white hover:bg-neutral-100 text-black font-sans font-bold text-sm py-4 rounded-lg mt-2 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                Submit Request
                <Send className="w-4 h-4 text-black" />
              </button>

              <span className="text-sans text-[9px] text-[#888888] text-center block mt-1">
                By submitting. you request premium weekly synthesis options from the original Format team.
              </span>

            </form>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-sans text-base font-bold text-white mb-2">You are on the priority shortlist!</h4>
              <p className="text-sans text-xs text-gray-400 max-w-sm">
                We've reserved {email ? <strong>{email}</strong> : "your slot"} under <strong>{company || "Format Guest"}</strong>. Watch your inbox shortly for setup guides.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="mt-6 text-sans text-xs text-[#888888] hover:text-white flex items-center gap-1.5 hover:underline"
              >
                Enter a different email <MoveRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Footer Navigation Bar bottom of the page */}
      <div className="relative z-10 w-full mt-20 pt-8 pb-12 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Brand wordmark logo */}
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-white relative flex items-center justify-center overflow-hidden rounded-sm">
              <div className="absolute top-0 left-0 w-2.5 h-5 bg-black" />
              <div className="w-1 h-1 rounded-full bg-[#FF4500] z-10" />
            </div>
            <span className="font-serif font-black tracking-tight text-md text-white">Format</span>
          </div>

          {/* Right Side: Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-[11px] font-medium text-gray-400">
            <a href="#hero" className="hover:text-white transition-colors">Twitter</a>
            <a href="#hero" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

        </div>

        {/* Copyright Text at very bottom right */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-6 flex justify-center md:justify-end">
          <p className="text-sans text-[10px] text-[#888888] tracking-widest uppercase">
            © Format 2026. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
