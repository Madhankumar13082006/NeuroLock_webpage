"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface HeroProps {
  onDownload: () => void;
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease },
  }),
};

export default function Hero({ onDownload }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-[#030712] flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-violet-900/15 rounded-full blur-3xl" />
      </div>

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-24 pb-14 sm:pt-28 sm:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-5 sm:gap-7">
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 w-fit px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
            >
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-indigo-300 text-xs sm:text-sm font-medium">Early Access — Android</span>
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-slate-50 leading-[1.06] tracking-tight"
            >
              Reclaim your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300">
                attention.
              </span>
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-md"
            >
              NeuroLock gently introduces friction between you and addictive
              short-form content — giving you back the one thing no app has ever
              offered: a real pause to choose.
            </motion.p>

            <motion.p
              custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="text-slate-500 text-sm italic border-l-2 border-indigo-500/40 pl-4"
            >
              &ldquo;This moment is your choice.&rdquo;
            </motion.p>

            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <button
                onClick={onDownload}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500/25 active:scale-95 text-sm sm:text-base"
              >
                Get Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 text-slate-300 font-semibold rounded-full border border-[#1e3a5f] hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-200 text-sm sm:text-base"
              >
                See Screenshots
              </button>
            </motion.div>

            <motion.div
              custom={5} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-wrap gap-4 pt-1"
            >
              {["No tracking", "No personal data", "You stay in control"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-slate-500 text-xs sm:text-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-500/70 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-indigo-600/10 blur-3xl rounded-full scale-75" />

            <div className="relative w-[230px] sm:w-[264px]">
              {/* Phone frame */}
              <div className="relative bg-[#0c1426] rounded-[44px] p-3 shadow-2xl shadow-black/70 border border-[#1e3a5f]/80">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#0c1426] rounded-b-2xl z-10 border-b border-x border-[#1e3a5f]/60" />
                <div className="rounded-[36px] overflow-hidden aspect-[9/19.5] relative bg-[#111f38]">
                  <Image
                    src="/images/8.jpg"
                    alt="NeuroLock mindfulness pause screen"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-2 flex justify-center">
                  <div className="w-24 h-1 bg-[#1e3a5f] rounded-full" />
                </div>
              </div>

              {/* Floating badges — hidden on small phones, shown sm+ */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -left-12 top-1/4 bg-[#0c1426] border border-[#1e3a5f] rounded-2xl px-4 py-3 shadow-xl items-center gap-3"
              >
                <div className="w-9 h-9 bg-indigo-900/50 rounded-xl flex items-center justify-center text-lg">⏸</div>
                <div>
                  <p className="text-slate-100 text-xs font-semibold">Paused</p>
                  <p className="text-slate-500 text-xs">Take a breath</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="hidden sm:flex absolute -right-10 bottom-1/3 bg-[#0c1426] border border-[#1e3a5f] rounded-2xl px-4 py-3 shadow-xl items-center gap-3"
              >
                <div className="w-9 h-9 bg-emerald-900/40 rounded-xl flex items-center justify-center text-lg">✓</div>
                <div>
                  <p className="text-slate-100 text-xs font-semibold">30 min saved</p>
                  <p className="text-slate-500 text-xs">Today</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#1e3a5f] to-transparent"
        />
      </motion.div>
    </section>
  );
}
