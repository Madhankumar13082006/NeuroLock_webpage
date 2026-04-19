"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Ordered by actual app user journey
const screenshots = [
  { src: "/images/2.jpg",  alt: "Create Account",             step: "01" },
  { src: "/images/1.jpg",  alt: "Sign In",                    step: "02" },
  { src: "/images/3.jpg",  alt: "Dashboard — Block Apps",     step: "03" },
  { src: "/images/4.jpg",  alt: "Invite Trusted Friend",      step: "04" },
  { src: "/images/7.jpg",  alt: "Friend Sets Your PIN",       step: "05" },
  { src: "/images/6.jpg",  alt: "App Blocked — Pause Moment", step: "06" },
  { src: "/images/8.jpg",  alt: "Mindfulness Screen",         step: "07" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef  = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-80px" });

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-28 bg-[#030712] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="px-4 py-1.5 bg-[#0c1426] border border-[#1e3a5f] rounded-full text-slate-400 text-sm font-medium">
            Inside the app
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mt-6 mb-4 tracking-tight">
            Calm by design.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Intentional by nature.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every screen is built to feel quiet and purposeful — from first
            sign-in to the moment you choose to pause.
          </p>
        </motion.div>
      </div>

      {/* Full-width horizontal scroll */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-5 overflow-x-auto px-4 sm:px-20 pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {screenshots.map((shot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease }}
              className="flex-shrink-0 group"
            >
              {/* Phone frame */}
              <div className="w-[190px] sm:w-[210px] bg-[#0c1426] rounded-[36px] p-2.5 border border-[#1e3a5f] shadow-2xl shadow-black/40 group-hover:-translate-y-3 group-hover:border-indigo-500/30 group-hover:shadow-indigo-500/10 transition-all duration-500">
                {/* Notch */}
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-5 bg-[#0c1426] rounded-b-xl z-10 border-b border-x border-[#1e3a5f]/60" />
                </div>
                {/* Screen */}
                <div className="rounded-[28px] overflow-hidden aspect-[9/19.5] relative bg-[#111f38]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes="210px"
                  />
                </div>
                {/* Home bar */}
                <div className="mt-2 flex justify-center">
                  <div className="w-14 h-0.5 bg-[#1e3a5f] rounded-full" />
                </div>
              </div>

              {/* Label */}
              <div className="text-center mt-4">
                <span className="text-indigo-500/60 text-xs font-bold">{shot.step}</span>
                <p className="text-slate-500 text-xs mt-0.5 font-medium">{shot.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll controls */}
        <div className="flex justify-center gap-3 mt-8 px-6">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full bg-[#0c1426] border border-[#1e3a5f] hover:border-indigo-500/40 hover:bg-[#111f38] flex items-center justify-center transition-all duration-200 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full bg-[#0c1426] border border-[#1e3a5f] hover:border-indigo-500/40 hover:bg-[#111f38] flex items-center justify-center transition-all duration-200 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
