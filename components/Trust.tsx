"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ShieldCheck, EyeOff, UserCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const testimonials = [
  {
    name: "Priya Nair",
    handle: "@priya.nair",
    avatar: "PN",
    avatarColor: "from-violet-400 to-indigo-500",
    text: "I was spending 3 hours a day on Reels without realizing it. NeuroLock didn't shame me — it just made me see it. That was enough to change.",
    stars: 5,
  },
  {
    name: "Mihir Joshi",
    handle: "@mihirjoshi_dev",
    avatar: "MJ",
    avatarColor: "from-sky-400 to-indigo-500",
    text: "The PIN friction feature sounds small but it's genuinely powerful. That extra second of awareness before opening YouTube has saved me hours.",
    stars: 5,
  },
  {
    name: "Aanya Sharma",
    handle: "@aanya.s",
    avatar: "AS",
    avatarColor: "from-rose-400 to-violet-500",
    text: "I downloaded it skeptical but the pause screen is something else. It feels calm, not controlling. My relationship with my phone has genuinely shifted.",
    stars: 5,
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "No tracking. Period.",
    desc: "NeuroLock never tracks your activity, location, or behavior. There are no analytics servers receiving your data.",
  },
  {
    icon: EyeOff,
    title: "No personal data collected",
    desc: "No email required. No sign-up. All your settings and usage data stay on your device — only accessible by you.",
  },
  {
    icon: UserCheck,
    title: "You stay in control",
    desc: "You can override any lock, change limits, or uninstall at any time. NeuroLock is a tool, not a guardian.",
  },
];

export default function Trust() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trust" ref={ref} className="py-16 sm:py-24 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="px-4 py-1.5 bg-[#0c1426] border border-[#1e3a5f] rounded-full text-slate-400 text-sm font-medium">
            Privacy & transparency
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mt-6 mb-4 tracking-tight">
            Trust is built quietly,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              not promised loudly.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We make no money from your data. Our business model is your
            wellbeing — not your attention.
          </p>
        </motion.div>

        {/* Trust points */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease }}
                className="bg-[#0c1426] border border-[#1e3a5f] rounded-2xl p-6 flex flex-col gap-4 hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-11 h-11 bg-indigo-900/30 border border-indigo-500/20 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-100">{point.title}</p>
                  <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease }}
              className="bg-[#0c1426] border border-[#1e3a5f] rounded-2xl p-7 flex flex-col gap-4 hover:border-indigo-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#1e3a5f]/60">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-slate-100 text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          All reviews from real early-access testers. No incentivized reviews.
        </motion.p>
      </div>
    </section>
  );
}
