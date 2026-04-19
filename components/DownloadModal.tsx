"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Smartphone,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
}

const FIREBASE_LINK = "https://appdistribution.firebase.dev/i/aea20c54e3deea77";

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Install Firebase App Tester",
    description:
      'Search "Firebase App Tester" on the Play Store and install it. This is Google\'s own app — it\'s how early-access builds are shared safely.',
  },
  {
    icon: ExternalLink,
    number: "02",
    title: "Tap the download button below",
    description:
      "Tap \"Download NeuroLock\" at the bottom of this screen. It opens the invite inside Firebase App Tester.",
  },
  {
    icon: Download,
    number: "03",
    title: "Install NeuroLock",
    description:
      "Follow the steps to download and install. When asked for Accessibility permission, tap Allow — NeuroLock needs it to detect when a blocked app opens.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Pick one app to limit first",
    description:
      "Start small. Choose one app you use too much — Instagram, YouTube, TikTok. Set a daily time. The rest will follow naturally.",
  },
];

export default function DownloadModal({ open, onClose }: DownloadModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none"
          >
            <div className="w-full sm:max-w-xl bg-[#0c1426] border border-[#1e3a5f] sm:rounded-3xl rounded-t-3xl shadow-2xl shadow-black/60 pointer-events-auto max-h-[92vh] overflow-y-auto">
              {/* Header */}
              <div className="relative bg-gradient-to-b from-[#111f38] to-[#0c1426] rounded-t-3xl px-6 sm:px-8 pt-7 pb-5 border-b border-[#1e3a5f]/60">
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-9 h-9 bg-[#1e3a5f]/40 hover:bg-[#1e3a5f] rounded-full flex items-center justify-center text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="w-12 h-12 bg-indigo-900/40 border border-indigo-500/30 rounded-2xl flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-slate-100 text-xl sm:text-2xl font-bold mb-1">
                  Download NeuroLock
                </h2>
                <p className="text-slate-400 text-sm">
                  Free early access · Android · Takes about 2 minutes to install
                </p>
              </div>

              <div className="px-6 sm:px-8 py-6 space-y-7">
                {/* Steps */}
                <div className="space-y-5">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.12 + i * 0.07 }}
                        className="flex gap-4"
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-indigo-900/30 border border-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-indigo-400" />
                          </div>
                          {i < steps.length - 1 && (
                            <div className="w-px flex-1 bg-[#1e3a5f]/60 mt-2" />
                          )}
                        </div>
                        <div className="pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-indigo-500 text-xs font-bold">
                              {step.number}
                            </span>
                            <h4 className="text-slate-100 font-semibold text-sm">
                              {step.title}
                            </h4>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Expected warnings */}
                <div className="bg-[#030712] border border-amber-500/15 rounded-2xl p-5 space-y-3">
                  <p className="text-amber-400/80 text-xs font-semibold uppercase tracking-widest">
                    You may see these warnings — they are normal
                  </p>
                  <div className="space-y-2.5 text-xs text-slate-400">
                    <div className="flex items-start gap-2.5">
                      <span className="text-amber-400/70 mt-0.5 flex-shrink-0">⚑</span>
                      <span>
                        <span className="text-slate-200 font-medium">Play Protect warning</span>
                        {" "}— Tap &ldquo;Install anyway.&rdquo; This shows up for every app not yet on the
                        Play Store. Firebase App Distribution is Google&apos;s own service — it is completely safe.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-amber-400/70 mt-0.5 flex-shrink-0">⚑</span>
                      <span>
                        <span className="text-slate-200 font-medium">Restricted Settings (Android 13+)</span>
                        {" "}— Go to Settings → Apps → NeuroLock → ⋮ menu → Allow Restricted Settings, then
                        grant Accessibility. This lets NeuroLock detect when a blocked app is opened.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-emerald-500/70 mt-0.5 flex-shrink-0">✓</span>
                      <span>
                        <span className="text-slate-200 font-medium">Uninstall detection</span>
                        {" "}— Only notifies your trusted contact if you uninstall the app. No personal data is
                        collected or tracked.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Download button */}
                <a
                  href={FIREBASE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-3 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-[0.98]"
                >
                  <Download className="w-5 h-5" />
                  Download NeuroLock — Free
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-center text-slate-600 text-xs pb-1">
                  Android 8.0+ · Firebase App Tester required · No data collected
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
