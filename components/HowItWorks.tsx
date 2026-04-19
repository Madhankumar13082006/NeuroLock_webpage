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
    description: "Pick the apps you want to limit — Instagram, YouTube, TikTok. Set a daily time that feels right for you. No lectures, no pressure.",
    color: "text-indigo-400",
    glow: "bg-indigo-900/30",
    border: "border-indigo-500/20",
  },
  {
    icon: Pause,
    number: "02",
    title: "NeuroLock adds friction",
    description: "When you hit your limit, a short pause screen appears before the app opens. It gives you 2 seconds to think. Not a hard block — just a small speed bump.",
    color: "text-violet-400",
    glow: "bg-violet-900/30",
    border: "border-violet-500/20",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "You pause and choose",
    description: "Keep scrolling or put the phone down — both are fine. What matters is that you chose it. Not your phone, not the algorithm. You.",
    color: "text-sky-400",
    glow: "bg-sky-900/20",
    border: "border-sky-500/20",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="how-it-works" ref={ref} className="py-14 sm:py-20 lg:py-24 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-8 sm:mb-14"
        >
          <span className="px-4 py-1.5 bg-[#0c1426] border border-[#1e3a5f] rounded-full text-slate-400 text-xs sm:text-sm font-medium">
            The friction loop
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mt-5 mb-3 tracking-tight">
            How it works
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Three simple steps that shift you from habit to intention — without guilt or shame.
          </p>
        </motion.div>

        {/* Stack on mobile, 3-col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease }}
                className={`bg-[#0c1426] border ${step.border} rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 ${step.glow} border ${step.border} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${step.color}`} strokeWidth={1.5} />
                  </div>
                  <span className="text-slate-700 text-3xl sm:text-4xl font-black leading-none">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-slate-100 text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trusted PIN callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-6 bg-gradient-to-br from-[#0c1426] to-indigo-950/30 border border-indigo-500/25 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 bg-indigo-400 rounded-full" />
            <p className="text-indigo-300 text-xs font-semibold uppercase tracking-widest">
              The PIN trick — why it actually works
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-slate-700 text-3xl font-black">01</span>
              <p className="text-slate-100 font-semibold">You send a link to someone you trust</p>
              <p className="text-slate-400 leading-relaxed">
                A friend, parent, or partner. You tap one button and NeuroLock sends them a
                private invite link. No account needed on their end.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-700 text-3xl font-black">02</span>
              <p className="text-slate-100 font-semibold">They set a PIN — only they know it</p>
              <p className="text-slate-400 leading-relaxed">
                Your trusted person opens the link and sets a PIN for your blocked apps.
                You never see it. It expires after 24 hours for safety.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-700 text-3xl font-black">03</span>
              <p className="text-slate-100 font-semibold">The app asks for that PIN every time</p>
              <p className="text-slate-400 leading-relaxed">
                To open Instagram or YouTube, you need to type the PIN. Most of the time,
                you won&apos;t bother texting your friend to ask — and that small hesitation
                is enough to break the habit. You&apos;ll only ask in a real emergency.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-indigo-500/15">
            <p className="text-indigo-300/70 text-sm italic text-center">
              &ldquo;The hardest part of stopping isn&apos;t willpower — it&apos;s having one reason to pause.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
