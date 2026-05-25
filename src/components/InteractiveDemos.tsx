import { useState, useRef, useEffect } from "react";
import { Play, Pause, VolumeX, Volume2, Sparkles, AlertCircle } from "lucide-react";
import { INTERACTIVE_DEMOS } from "../data";
import { DemoCard } from "../types";

export default function InteractiveDemos() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [waveScale, setWaveScale] = useState<number>(1);

  // Web Audio refs
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const pulseIntervalRef = useRef<number | null>(null);

  // Handle pulse interval for visualizer feedback
  useEffect(() => {
    if (isPlaying && activeCardId) {
      pulseIntervalRef.current = window.setInterval(() => {
        setWaveScale(prev => (prev === 1 ? 1.12 : 1));
      }, 750);
    } else {
      if (pulseIntervalRef.current) {
        clearInterval(pulseIntervalRef.current);
      }
      setWaveScale(1);
    }

    return () => {
      if (pulseIntervalRef.current) {
        clearInterval(pulseIntervalRef.current);
      }
    };
  }, [isPlaying, activeCardId]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopSynthesizer();
    };
  }, []);

  const stopSynthesizer = () => {
    try {
      oscillatorsRef.current.forEach(osc => {
        try {
          osc.stop();
        } catch (e) {}
      });
      oscillatorsRef.current = [];
    } catch (e) {
      console.error(e);
    }
  };

  const handlePlayToggle = (card: DemoCard) => {
    setAudioError(null);

    // If clicking same card while playing, pause it
    if (activeCardId === card.id && isPlaying) {
      setIsPlaying(false);
      if (gainNodeRef.current) {
        // Fade out smoothly
        try {
          gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioContextRef.current?.currentTime || 0);
          gainNodeRef.current.gain.exponentialRampToValueAtTime(0.001, (audioContextRef.current?.currentTime || 0) + 0.3);
          setTimeout(() => {
            if (!isPlaying) stopSynthesizer();
          }, 350);
        } catch (e) {
          stopSynthesizer();
        }
      } else {
        stopSynthesizer();
      }
      return;
    }

    // Stop existing audio pattern
    stopSynthesizer();
    setActiveCardId(card.id);
    setIsPlaying(true);

    try {
      // Initialize AudioContext if not already created
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) {
          throw new Error("Web Audio API is not supported in this browser.");
        }
        audioContextRef.current = new AudioContextClass();
      }

      const ctx = audioContextRef.current;
      
      // Resume if suspended (browser security policy)
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Create main gain controller for volume and smooth fade-in
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Base frequency of the specific card
      const baseFreq = card.audioFrequency;

      // Create harmonious sound waves (Chords or multi-harmonics for rich ambient texture)
      // E.g., Root, Perfect Fifth, and Octave
      const intervals = [1, 1.5, 2]; 
      
      const oscillators = intervals.map((multiplier, idx) => {
        const osc = ctx.createOscillator();
        osc.type = card.audioWaveType; // sine or triangle for smooth lush sound
        osc.frequency.setValueAtTime(baseFreq * multiplier, ctx.currentTime);
        
        // Add subtle vibrato (LFO)
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.5 + idx; // Low frequency speed
        lfoGain.gain.value = 1.5; // Vibrato depth
        
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();
        
        // Connect osc to master gain
        osc.connect(masterGain);
        return osc;
      });

      // Start all oscillators
      oscillators.forEach(osc => osc.start());
      oscillatorsRef.current = oscillators;

      // Smooth volume fade-in as required for luxury apps (0.3 seconds)
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.3);

    } catch (e: any) {
      console.warn("Web Audio init blocked or failed: ", e.message);
      setAudioError("Audio playback initialized silently (interaction required)");
    }
  };

  return (
    <section id="demos" className="relative py-28 px-6 sm:px-12 lg:px-24 bg-[#050505]">
      {/* Visual background lights */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* UPPER HEADLINE LABELS */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#888888]">
              Interactive Demos
            </span>
          </div>
          
          <h2 className="text-serif text-5xl sm:text-6xl md:text-7xl font-light leading-none text-neutral-400 tracking-tight">
            Hearing is <span className="text-white italic">believing.</span>
          </h2>
          <p className="text-sans text-xs md:text-sm text-[#888888] font-light max-w-xl mt-4 leading-relaxed">
            Click play on any card below to synthesize real, color-matched ambient wavelengths directly inside your browser. Experience how format maps visual insights into rich audible streams.
          </p>
        </div>

        {/* Audio feedback notifier if blocked by user settings */}
        {audioError && (
          <div className="mb-6 flex items-center gap-2 bg-amber-950/20 border border-amber-900/30 text-amber-400 py-2.5 px-4 rounded text-xs max-w-lg">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{audioError}</span>
          </div>
        )}

        {/* THREE COLUMNS GRID OF CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INTERACTIVE_DEMOS.map((card) => {
            const isCurrentActive = activeCardId === card.id && isPlaying;
            
            return (
              <div
                key={card.id}
                id={card.id}
                className={`group flex flex-col justify-between bg-zinc-900/40 hover:bg-zinc-900/80 rounded-2xl p-6 border transition-all duration-500 overflow-hidden min-h-[460px] ${
                  isCurrentActive ? "border-[#FF4500]/60 shadow-xl shadow-[#FF4500]/10" : "border-white/5"
                }`}
              >
                {/* Header detail inside the card */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-sans text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                      {card.podcastDate}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-white tracking-wide mt-1">
                      {card.title}
                    </h3>
                  </div>
                  
                  {/* Dynamic Play/Stop Trigger button */}
                  <button
                    onClick={() => handlePlayToggle(card)}
                    className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCurrentActive 
                        ? "bg-[#FF4500] text-white hover:scale-110" 
                        : "bg-white hover:bg-[#FF4500] hover:text-white text-black hover:scale-105"
                    }`}
                    aria-label={isCurrentActive ? "Pause Synth" : "Play Synth"}
                  >
                    {isCurrentActive ? (
                      <Pause className="w-4.5 h-4.5" />
                    ) : (
                      <Play className="w-4.5 h-4.5 fill-current pl-0.5" />
                    )}
                  </button>
                </div>

                {/* Concentric Circle art taking up bottom 80% */}
                <div className="grow flex items-center justify-center relative my-4 min-h-[220px]">
                  
                  {/* Glowing dynamic background lights matching colors of the cards */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[40px]"
                    style={{
                      background: `radial-gradient(circle, ${card.colors.from} 0%, ${card.colors.to} 70%)`
                    }}
                  />

                  {/* Concentric Radial Target Graphic */}
                  <div 
                    className="relative w-48 h-48 flex items-center justify-center transition-transform duration-500"
                    style={{
                      transform: isCurrentActive ? `scale(${waveScale})` : "scale(1)"
                    }}
                  >
                    {/* Ring 1 - Outer circle */}
                    <div 
                      className="absolute inset-x-0 inset-y-0 rounded-full border-2 opacity-15"
                      style={{ borderColor: card.colors.from }}
                    />
                    
                    {/* Ring 2 - Concentric */}
                    <div 
                      className="absolute inset-4 rounded-full border border-dashed opacity-25"
                      style={{ borderColor: card.colors.to }}
                    />

                    {/* Ring 3 - Solid glowing */}
                    <div 
                      className="absolute inset-8 rounded-full border-2 opacity-45"
                      style={{ 
                        borderColor: card.colors.from,
                        boxShadow: isCurrentActive ? `0 0 15px ${card.colors.from}` : 'none'
                      }}
                    />

                    {/* Ring 4 - Accent */}
                    <div 
                      className="absolute inset-12 rounded-full border opacity-60"
                      style={{ borderColor: card.colors.accent }}
                    />

                    {/* Ring 5 - Inner ring */}
                    <div 
                      className="absolute inset-16 rounded-full border opacity-80"
                      style={{ borderColor: card.colors.to }}
                    />

                    {/* Core Hub */}
                    <div 
                      className="absolute inset-20 rounded-full flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${card.colors.from}, ${card.colors.to})`
                      }}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-white block" />
                    </div>
                  </div>

                  {/* Floating active sound analyzer display */}
                  {isCurrentActive && (
                    <div className="absolute bottom-[-10px] flex items-center gap-[3px] h-6">
                      {[6, 12, 18, 12, 6, 15, 21, 15, 6, 10, 18, 14, 8, 4].map((h, index) => (
                        <span
                          key={index}
                          className="w-1 bg-[#FF4500] rounded-sm block animate-[soundwave_1.2s_ease-in-out_infinite]"
                          style={{
                            height: `${h}px`,
                            animationDelay: `${index * 0.1}s`,
                            backgroundColor: index % 2 === 0 ? card.colors.from : card.colors.to
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom interactive card tag */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#888888] font-sans">
                  <span className="flex items-center gap-1">
                    <Volume2 className="w-3.5 h-3.5 text-white" />
                    {isCurrentActive ? "Active Synthesis" : "Unmute and Demo"}
                  </span>
                  <span className="text-[10px] font-mono text-[#888888]">
                    {card.audioFrequency} Hz • {card.audioWaveType.toUpperCase()}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @keyframes soundwave {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1.3); }
        }
      `}</style>
    </section>
  );
}
