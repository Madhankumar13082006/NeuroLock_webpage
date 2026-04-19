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
      "Set how many minutes per day you want to spend on Instagram, YouTube, or TikTok. When time is up, NeuroLock steps in with a gentle reminder.",
  },
  {
    icon: Lock,
    title: "PIN Friction Lock",
    description:
      "Ask a friend to set a PIN for your apps. You have to enter it before opening them. That 5-second pause is often all it takes to stop mindless scrolling.",
  },
  {
    icon: BellOff,
    title: "Distraction-Free Mode",
    description:
      "One tap and your distracting apps go silent. Use it when you need to study, work, or just be present without your phone pulling you away.",
  },
  {
    icon: BarChart2,
    title: "Awareness Dashboard",
    description:
      "See exactly how many hours you spend on each app, every day. No blame, no shame — just honest numbers so you can decide what to change.",
  },
  {
    icon: Fingerprint,
    title: "On-Device Only",
    description:
      "Everything stays on your phone. We never collect it, share it, or sell it. Your habits are yours and nobody else will ever see them.",
  },
  {
    icon: HeartHandshake,
    title: "Built With Compassion",
    description:
      "No streaks to maintain. No shame when you slip up. NeuroLock is just a helpful tool — not a strict parent, not a judge.",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
