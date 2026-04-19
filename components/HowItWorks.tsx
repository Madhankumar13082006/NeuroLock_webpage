"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings2, Pause, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const steps = [
  {
    icon: Settings2,
    number: "01",
    title: "You set the rules",
    description:
      "Choose which apps to track — Instagram, YouTube, TikTok, or any other. Set a daily time limit that feels right for you. No judgment, no defaults.",
    color: "text-indigo-400",
    glow: "bg-indigo-900/30",
    border: "border-indigo-500/20",
  },
  {
    icon: Pause,
    number: "02",
    title: "NeuroLock adds friction",
    description:
      "When you reach your limit, NeuroLock gently intervenes — a brief pause screen, a PIN, or a reflective prompt. Not a wall. Just a moment.",
    color: "text-violet-400",
    glow: "bg-violet-900/30",
    border: "border-violet-500/20",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "You pause and choose",
    description:
      "In that pause, you decide: continue with awareness, or step away. Either way, it was your choice. That moment of agency is what NeuroLock is built for.",
    color: "text-sky-400",
    glow: "bg-sky-900/20",
    border: "border-sky-500/20",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-16 sm:py-24 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="px-4 py-1.5 bg-[#0c1426] border border-[#1e3a5f] rounded-full text-slate-400 text-sm font-medium">
            The friction loop
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mt-6 mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Three simple steps that shift you from habit to intention —
            without guilt or shame.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[calc(16.6%+2px)] right-[calc(16.6%+2px)] h-px bg-gradient-to-r from-indigo-500/20 via-violet-500/30 to-sky-500/20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15, ease }}
                className={`relative bg-[#0c1426] border ${step.border} rounded-3xl p-8 flex flex-col gap-5 hover:border-opacity-50 transition-all duration-400 hover:-translate-y-1 group`}
              >
                {/* Step icon */}
                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${step.glow} border ${step.border} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${step.color}`} strokeWidth={1.5} />
                  </div>
                  <span className="text-slate-700 text-4xl font-black leading-none pt-1">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-slate-100 text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Emotional line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 text-sm italic">
            &ldquo;Awareness is not a punishment. It&apos;s a gift you give yourself.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
