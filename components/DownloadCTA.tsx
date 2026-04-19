"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck, EyeOff, UserCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface DownloadCTAProps {
  onDownload: () => void;
}

export default function DownloadCTA({ onDownload }: DownloadCTAProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-[#030712]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="relative bg-gradient-to-b from-[#0c1426] to-[#0a1020] border border-[#1e3a5f] rounded-3xl overflow-hidden px-6 py-12 sm:px-16 sm:py-16"
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-600/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-violet-600/8 blur-3xl rounded-full" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15, ease }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-indigo-300 text-sm font-medium">
                Free early access · Android
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6, ease }}
              className="text-4xl sm:text-5xl font-bold text-slate-100 mb-5 leading-tight tracking-tight"
            >
              Your time.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                Take it back.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Download NeuroLock for free. Start spending less time on apps
              that don&apos;t really make you happy — and more time on things that do.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42 }}
            >
              <button
                onClick={onDownload}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-8"
            >
              {[
                { icon: ShieldCheck, text: "No tracking" },
                { icon: EyeOff, text: "No personal data" },
                { icon: UserCheck, text: "You stay in control" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500 text-sm">
                  <Icon className="w-4 h-4 text-indigo-500/60" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
