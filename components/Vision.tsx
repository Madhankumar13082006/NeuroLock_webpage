"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Vision() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="vision" ref={ref} className="py-16 sm:py-24 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex justify-center mb-10 sm:mb-16"
        >
          <span className="px-4 py-1.5 bg-[#0c1426] border border-[#1e3a5f] rounded-full text-slate-400 text-sm font-medium">
            Why NeuroLock exists
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="bg-[#0c1426] border border-[#1e3a5f] rounded-3xl p-10 flex flex-col gap-6 hover:border-indigo-500/30 transition-colors duration-500"
          >
            <div className="w-12 h-12 bg-indigo-900/40 border border-indigo-500/20 rounded-2xl flex items-center justify-center">
              <Target className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-3">
                Mission
              </p>
              <h3 className="text-slate-100 text-2xl font-bold leading-snug mb-4">
                Give people back the pause they&apos;ve lost.
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Short-form video apps are designed to eliminate friction and
                maximize consumption. NeuroLock exists to restore what they
                removed — the moment between impulse and action. A breath. A
                pause. A choice that is genuinely yours.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="bg-gradient-to-br from-indigo-900/30 to-violet-900/20 border border-indigo-500/20 rounded-3xl p-10 flex flex-col gap-6 hover:border-indigo-400/40 transition-colors duration-500"
          >
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <p className="text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-3">
                Vision
              </p>
              <h3 className="text-slate-100 text-2xl font-bold leading-snug mb-4">
                A world where you use technology — not the other way around.
              </h3>
              <p className="text-indigo-100/70 text-base leading-relaxed">
                We believe the future of digital wellness isn&apos;t about
                blocking apps or lecturing users. It&apos;s about designing tools that
                make awareness feel natural and effortless — so that every screen
                opens with intention, not compulsion.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
        >
          <blockquote className="text-2xl sm:text-3xl text-slate-300 font-light leading-relaxed">
            &ldquo;The problem isn&apos;t that you scroll too much.
            <br />
            <span className="text-indigo-400">
              The problem is that you never had a chance to choose.&rdquo;
            </span>
          </blockquote>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e3a5f]/30 rounded-2xl overflow-hidden border border-[#1e3a5f]/30"
        >
          {[
            { value: "4.5 hrs", label: "Avg. daily screen time" },
            { value: "0", label: "Data collected from you" },
            { value: "100%", label: "On-device processing" },
            { value: "Your call", label: "Always your choice" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#030712] px-8 py-8 text-center hover:bg-[#0c1426] transition-colors"
            >
              <p className="text-2xl sm:text-3xl font-bold text-slate-100">
                {stat.value}
              </p>
              <p className="text-sm text-slate-500 mt-1.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
