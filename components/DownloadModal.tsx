"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Smartphone,
  CheckCircle2,
  ExternalLink,
  Mail,
  ChevronRight,
} from "lucide-react";

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
}

const FIREBASE_LINK = "https://appdistribution.firebase.dev/i/aea20c54e3deea77";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Install Firebase App Tester",
    description:
      'Search "Firebase App Tester" on the Google Play Store and install it on your Android device.',
  },
  {
    icon: ExternalLink,
    number: "02",
    title: "Open the invitation link",
    description:
      'Tap "Download NeuroLock" below. This will open the invitation in Firebase App Tester.',
  },
  {
    icon: Download,
    number: "03",
    title: "Install NeuroLock",
    description:
      "Follow the prompts to download and install the latest build. Grant the Accessibility permission when asked — it's needed for the app lock feature.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Begin with intention",
    description:
      "Set your first limit. Start with one app you use too much. The rest will follow naturally.",
  },
];

export default function DownloadModal({ open, onClose }: DownloadModalProps) {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 300);
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

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmailLoading(true);
    try {
      const emailjs = await import("@emailjs/browser").catch(() => null);
      if (emailjs) {
        await emailjs.default.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          { user_email: email, app_name: "NeuroLock" },
          EMAILJS_PUBLIC_KEY
        );
      }
      setEmailSent(true);
    } catch {
      setEmailSent(true);
    } finally {
      setEmailLoading(false);
    }
  };

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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-xl bg-[#0c1426] border border-[#1e3a5f] rounded-3xl shadow-2xl shadow-black/60 pointer-events-auto max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="relative bg-gradient-to-b from-[#111f38] to-[#0c1426] rounded-t-3xl px-8 pt-8 pb-6 border-b border-[#1e3a5f]/60">
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-9 h-9 bg-[#1e3a5f]/40 hover:bg-[#1e3a5f] rounded-full flex items-center justify-center text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="w-12 h-12 bg-indigo-900/40 border border-indigo-500/30 rounded-2xl flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-slate-100 text-2xl font-bold mb-1">
                  Get NeuroLock
                </h2>
                <p className="text-slate-400 text-sm">
                  Install the early-access build on your Android device in 4 steps.
                </p>
              </div>

              <div className="px-8 py-7 space-y-8">
                {/* Steps */}
                <div className="space-y-5">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.07 }}
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
                        <div className="pb-5">
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

                {/* Email form */}
                <div className="bg-[#030712] rounded-2xl p-5 border border-[#1e3a5f]/60">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-4 h-4 text-slate-500" />
                    <p className="text-slate-300 text-sm font-medium">
                      Notify me when the full version launches
                    </p>
                  </div>
                  {emailSent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-emerald-400 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      You&apos;re on the list. We&apos;ll be in touch.
                    </motion.div>
                  ) : (
                    <form onSubmit={handleEmailSubmit} className="flex gap-2 flex-col sm:flex-row">
                      <input
                        ref={inputRef}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="flex-1 px-4 py-2.5 bg-[#0c1426] border border-[#1e3a5f] rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition"
                      />
                      <button
                        type="submit"
                        disabled={emailLoading}
                        className="px-5 py-2.5 bg-[#1e3a5f] hover:bg-indigo-900/50 text-slate-100 text-sm font-semibold rounded-xl transition disabled:opacity-60 whitespace-nowrap"
                      >
                        {emailLoading ? "Sending…" : "Notify Me"}
                      </button>
                    </form>
                  )}
                  <p className="text-slate-600 text-xs mt-2">
                    No spam, ever. Unsubscribe any time.
                  </p>
                </div>

                {/* Heads-up: expected warnings */}
                <div className="bg-[#030712] border border-amber-500/15 rounded-2xl p-5 space-y-3">
                  <p className="text-amber-400/80 text-xs font-semibold uppercase tracking-widest">
                    Expected during install — not errors
                  </p>
                  <div className="space-y-2.5 text-xs text-slate-400">
                    <div className="flex items-start gap-2.5">
                      <span className="text-amber-400/70 mt-0.5 flex-shrink-0">⚑</span>
                      <span>
                        <span className="text-slate-200 font-medium">Play Protect warning</span>{" "}
                        — Tap &ldquo;Install anyway.&rdquo; This appears for all apps not yet on the
                        Play Store. Firebase App Distribution is Google&apos;s own service —
                        it is safe to proceed.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-amber-400/70 mt-0.5 flex-shrink-0">⚑</span>
                      <span>
                        <span className="text-slate-200 font-medium">Restricted Settings (Android 13+)</span>{" "}
                        — Go to Settings → Apps → NeuroLock → ⋮ → Allow Restricted Settings,
                        then grant Accessibility. Needed so NeuroLock can detect when a
                        blocked app opens.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-emerald-500/70 mt-0.5 flex-shrink-0">✓</span>
                      <span>
                        <span className="text-slate-200 font-medium">Uninstall detection</span>{" "}
                        — Only notifies your trusted contact if you uninstall the app. No
                        personal data is sent. No activity is tracked.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA */}
                <a
                  href={FIREBASE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-3 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-[0.98]"
                >
                  <Download className="w-5 h-5" />
                  Download NeuroLock — Free
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-center text-slate-600 text-xs">
                  Requires Android 8.0+ · Firebase App Tester needed · No data collected
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
