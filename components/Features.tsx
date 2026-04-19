"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Timer, Lock, BellOff, BarChart2, Fingerprint, HeartHandshake } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const features = [
  {
    icon: Timer,
    title: "App Time Limits",
    description:
      "Set daily caps on specific apps. When the limit is reached, NeuroLock steps in with a gentle, intentional pause.",
  },
  {
    icon: Lock,
    title: "PIN Friction Lock",
    description:
      "Unlock addictive apps only after entering a PIN — a small act of intention that breaks the automatic scroll reflex.",
  },
  {
    icon: BellOff,
    title: "Distraction-Free Mode",
    description:
      "One tap to enter deep focus. Selected apps go quiet so your attention can go somewhere that matters.",
  },
  {
    icon: BarChart2,
    title: "Awareness Dashboard",
    description:
      "See where your attention has been — without judgment. Patterns become visible only when you can see them.",
  },
  {
    icon: Fingerprint,
    title: "On-Device Only",
    description:
      "All data stays on your phone. No servers. No profiles. No selling your habits. Your mind is not a product.",
  },
  {
    icon: HeartHandshake,
    title: "Built With Compassion",
    description:
      "No shame. No streaks. No badges. NeuroLock is not here to judge your habits — it&apos;s here to help you see them.",
  },
];

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="py-16 sm:py-24 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto"
        >
          <span className="px-4 py-1.5 bg-[#0c1426] border border-[#1e3a5f] rounded-full text-slate-400 text-sm font-medium">
            Built for awareness
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mt-6 mb-4 tracking-tight">
            Tools that respect
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              your intelligence.
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every feature in NeuroLock is designed to add awareness — not
            control. You are always the one in charge.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="group bg-[#0c1426] border border-[#1e3a5f] rounded-2xl p-7 hover:border-indigo-500/30 hover:-translate-y-1 hover:bg-[#0f1a30] transition-all duration-300 cursor-default"
              >
                <div className="w-11 h-11 bg-indigo-900/30 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:border-indigo-400/40 transition-colors">
                  <Icon className="w-5 h-5 text-indigo-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-slate-100 font-semibold text-lg mb-2">
                  {feat.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
