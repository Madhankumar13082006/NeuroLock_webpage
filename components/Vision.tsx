"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Vision() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="vision" ref={ref} className="py-14 sm:py-20 lg:py-24 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <span className="px-4 py-1.5 bg-[#0c1426] border border-[#1e3a5f] rounded-full text-slate-400 text-xs sm:text-sm font-medium">
            Why NeuroLock exists
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="bg-[#0c1426] border border-[#1e3a5f] rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col gap-4 hover:border-indigo-500/30 transition-colors duration-500"
          >
            <div className="w-10 h-10 bg-indigo-900/40 border border-indigo-500/20 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-2">Mission</p>
              <h3 className="text-slate-100 text-xl sm:text-2xl font-bold leading-snug mb-3">
                Give people back the pause they&apos;ve lost.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Short-form video apps are designed to eliminate friction and maximize consumption.
                NeuroLock exists to restore what they removed — the moment between impulse and action.
                A breath. A pause. A choice that is genuinely yours.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="bg-gradient-to-br from-indigo-900/30 to-violet-900/20 border border-indigo-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col gap-4 hover:border-indigo-400/40 transition-colors duration-500"
          >
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
              <Eye className="w-5 h-5 text-indigo-300" />
            </div>
            <div>
              <p className="text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-2">Vision</p>
              <h3 className="text-slate-100 text-xl sm:text-2xl font-bold leading-snug mb-3">
                A world where you use technology — not the other way around.
              </h3>
              <p className="text-indigo-100/70 text-sm leading-relaxed">
                We believe the future of digital wellness isn&apos;t about blocking apps or lecturing users.
                It&apos;s about designing tools that make awareness feel natural and effortless — so that
                every screen opens with intention, not compulsion.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2"
        >
          <blockquote className="text-lg sm:text-2xl lg:text-3xl text-slate-300 font-light leading-relaxed">
            &ldquo;The problem isn&apos;t that you scroll too much.
            <br />
            <span className="text-indigo-400">
              The problem is that you never had a chance to choose.&rdquo;
            </span>
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e3a5f]/30 rounded-2xl overflow-hidden border border-[#1e3a5f]/30"
        >
          {[
            { value: "4.5 hrs", label: "Avg. screen time" },
            { value: "0", label: "Data collected" },
            { value: "100%", label: "On-device" },
            { value: "Your call", label: "Your choice" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#030712] px-3 sm:px-8 py-5 sm:py-8 text-center hover:bg-[#0c1426] transition-colors">
              <p className="text-lg sm:text-3xl font-bold text-slate-100">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
