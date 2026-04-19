"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  ShieldAlert,
  Trash2,
  Database,
  BadgeCheck,
  Lock,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const faqs = [
  {
    icon: ShieldAlert,
    color: "text-amber-400",
    bg: "bg-amber-900/20",
    border: "border-amber-500/20",
    question: `Why does Android show "Restricted Settings" for Accessibility?`,
    answer: (
      <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
        <p>
          Android 13 and above introduced a deliberate security feature: any app
          installed <em>outside</em> the Play Store (called a sideloaded APK) is
          blocked from requesting Accessibility permissions directly. This is
          Google&apos;s way of protecting users from malicious apps that might abuse
          accessibility — and it applies to <strong className="text-slate-200">every</strong>{" "}
          early-access Android app, including NeuroLock.
        </p>
        <p>
          NeuroLock needs Accessibility permission specifically to detect when a
          blocked app is opened, so it can show the pause/PIN screen. Without it,
          the core feature cannot work.
        </p>
        <div className="bg-[#030712] border border-[#1e3a5f] rounded-xl p-4 mt-3">
          <p className="text-slate-300 font-semibold text-xs uppercase tracking-widest mb-3">
            How to allow it (one-time setup)
          </p>
          <ol className="space-y-2 text-slate-400 text-sm">
            {[
              "Open your Android Settings → Apps",
              "Find and tap NeuroLock",
              "Tap the ⋮ (three-dot) menu in the top right",
              'Tap "Allow Restricted Settings"',
              "Return to NeuroLock → grant Accessibility permission",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 bg-indigo-900/50 border border-indigo-500/30 rounded-full flex items-center justify-center text-indigo-400 text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <p className="text-slate-500 text-xs italic">
          This setting only allows NeuroLock to request the permission — it
          does not grant any additional system access beyond what you explicitly
          approve.
        </p>
      </div>
    ),
  },
  {
    icon: Trash2,
    color: "text-rose-400",
    bg: "bg-rose-900/20",
    border: "border-rose-500/20",
    question: "Why can NeuroLock detect if I try to uninstall it?",
    answer: (
      <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
        <p>
          This is a <strong className="text-slate-200">voluntary accountability feature</strong> —
          not surveillance. Here is the full picture:
        </p>
        <div className="bg-[#030712] border border-[#1e3a5f] rounded-xl p-4 space-y-3">
          <div>
            <p className="text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-1">
              What it does
            </p>
            <p>
              When you invite a trusted person to set your PIN, you are forming
              an accountability agreement. If someone then uninstalls NeuroLock
              to bypass the lock, that trusted person receives a notification.
              That&apos;s it.
            </p>
          </div>
          <div>
            <p className="text-rose-400 font-semibold text-xs uppercase tracking-widest mb-1">
              What it does NOT do
            </p>
            <ul className="space-y-1">
              {[
                "Cannot prevent you from uninstalling — Android does not allow that",
                "Does not track your screen time, browsing, or behavior",
                "Does not send any personal usage data anywhere",
                "Does not report to us — only to your chosen trusted contact",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-500/60 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p>
          You chose who your trusted contact is. You can remove the accountability
          link at any time from within the app. The feature only works because
          you set it up yourself — there is no hidden monitoring.
        </p>
      </div>
    ),
  },
  {
    icon: Database,
    color: "text-indigo-400",
    bg: "bg-indigo-900/20",
    border: "border-indigo-500/20",
    question: "How do I know NeuroLock isn't stealing my data?",
    answer: (
      <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
        <p>
          A fair question — especially for an app that touches Accessibility
          and can see which apps you open. Here is exactly what NeuroLock does
          and does not do with that access:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-[#030712] border border-emerald-500/15 rounded-xl p-4">
            <p className="text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2">
              What happens on your device
            </p>
            <ul className="space-y-1.5 text-xs">
              {[
                "App open/close events are checked locally",
                "Block rules are stored locally",
                "Usage stats stay on your phone",
                "PIN is set by your trusted contact, never by us",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#030712] border border-rose-500/15 rounded-xl p-4">
            <p className="text-rose-400 font-semibold text-xs uppercase tracking-widest mb-2">
              What never leaves your device
            </p>
            <ul className="space-y-1.5 text-xs">
              {[
                "Which apps you use or block",
                "How long you spend on each app",
                "Any screen content or keystrokes",
                "Your location, contacts, or files",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-500/70 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p>
          The only external network request NeuroLock makes is the
          accountability notification to your trusted contact when/if you
          uninstall the app — and only if you set that up yourself.
        </p>
        <p className="text-slate-500 text-xs italic">
          We do not run ad networks, analytics SDKs, or third-party trackers.
          You can verify this using a network inspection tool like NetGuard or
          PCAPdroid if you wish.
        </p>
      </div>
    ),
  },
  {
    icon: BadgeCheck,
    color: "text-sky-400",
    bg: "bg-sky-900/20",
    border: "border-sky-500/20",
    question: "Why does Google Play Protect show a warning?",
    answer: (
      <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
        <p>
          Google Play Protect is Android&apos;s built-in security scanner. It
          automatically warns users about <strong className="text-slate-200">any</strong> APK
          that did not come from the official Play Store — regardless of how safe
          that app actually is. This is expected behaviour.
        </p>
        <div className="bg-[#030712] border border-sky-500/15 rounded-xl p-4">
          <p className="text-sky-400 font-semibold text-xs uppercase tracking-widest mb-2">
            Why NeuroLock triggers this warning
          </p>
          <p>
            NeuroLock is currently in early access and distributed via{" "}
            <strong className="text-slate-200">Firebase App Distribution</strong> — a
            trusted Google service used by thousands of developers to share
            pre-release builds with testers. Play Store submission requires a
            full review process that takes weeks. The Play Protect warning
            appears because the app has not yet completed that review, not
            because anything is wrong with the app itself.
          </p>
        </div>
        <div className="bg-[#030712] border border-[#1e3a5f] rounded-xl p-4">
          <p className="text-slate-300 font-semibold text-xs uppercase tracking-widest mb-3">
            What to do when you see the warning
          </p>
          <ol className="space-y-2 text-sm">
            {[
              'Tap "More details" on the Play Protect screen',
              'Tap "Install anyway" — this is safe for Firebase-distributed apps',
              "Play Protect will continue to monitor the app after install",
              "Once NeuroLock launches on Play Store, the warning disappears permanently",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 bg-sky-900/50 border border-sky-500/30 rounded-full flex items-center justify-center text-sky-400 text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <p className="text-slate-500 text-xs italic">
          Firebase App Distribution is a first-party Google product — the same
          infrastructure Google uses internally. The warning is a blanket policy
          for all non-Play-Store APKs, not a flag against NeuroLock specifically.
        </p>
      </div>
    ),
  },
];

function AccordionItem({
  faq,
  index,
  inView,
}: {
  faq: (typeof faqs)[0];
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);
  const Icon = faq.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease }}
      className={`bg-[#0c1426] border rounded-2xl overflow-hidden transition-colors duration-300 ${
        open ? "border-indigo-500/30" : "border-[#1e3a5f]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-[#0f1a30] transition-colors"
      >
        <div
          className={`w-10 h-10 ${faq.bg} border ${faq.border} rounded-xl flex items-center justify-center flex-shrink-0`}
        >
          <Icon className={`w-5 h-5 ${faq.color}`} strokeWidth={1.5} />
        </div>
        <span className="text-slate-100 font-semibold text-sm sm:text-base flex-1 pr-2">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <div className="px-6 pb-6 border-t border-[#1e3a5f]/60 pt-5">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Transparency() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="transparency" ref={ref} className="py-28 bg-[#030712]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-14"
        >
          <span className="px-4 py-1.5 bg-[#0c1426] border border-[#1e3a5f] rounded-full text-slate-400 text-sm font-medium">
            Full transparency
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mt-6 mb-4 tracking-tight">
            Why these permissions?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Honest answers.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            NeuroLock needs a few unusual permissions to work. We explain every
            single one — what it does, why it&apos;s needed, and what it
            absolutely does not do.
          </p>
        </motion.div>

        {/* Permission badge strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { icon: Lock, label: "Accessibility Service", note: "to detect app opens" },
            { icon: Trash2, label: "Uninstall Detection", note: "accountability only" },
            { icon: BadgeCheck, label: "Play Protect warning", note: "pre-Play-Store build" },
            { icon: Database, label: "Zero data collected", note: "all stays on device" },
          ].map(({ icon: Icon, label, note }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-[#0c1426] border border-[#1e3a5f] rounded-full text-xs"
            >
              <Icon className="w-3.5 h-3.5 text-indigo-400" strokeWidth={2} />
              <span className="text-slate-300 font-medium">{label}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-500">{note}</span>
            </div>
          ))}
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} faq={faq} index={i} inView={inView} />
          ))}
        </div>

        {/* Real data proof section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-10 bg-[#0c1426] border border-emerald-500/20 rounded-3xl overflow-hidden"
        >
          {/* Header */}
          <div className="px-7 pt-7 pb-5 border-b border-[#1e3a5f]/60">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-emerald-900/30 border border-emerald-500/25 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
              </div>
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">
                Real proof — not a promise
              </p>
            </div>
            <h3 className="text-slate-100 text-xl font-bold mb-1">
              This is everything NeuroLock stores on our server.
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The screenshot below is our actual Firebase database. One record — for the
              trusted-PIN invite link feature. No usage history. No personal content. No behaviour data.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Screenshot */}
            <div className="relative border-b lg:border-b-0 lg:border-r border-[#1e3a5f]/60">
              <div className="relative w-full aspect-[4/3] bg-[#030712]">
                <Image
                  src="/images/firebase.jpeg"
                  alt="Firebase Firestore — approval_links collection showing what NeuroLock actually stores"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full border border-[#1e3a5f]/60">
                <p className="text-slate-400 text-xs">Firebase Console — live data</p>
              </div>
            </div>

            {/* Field-by-field annotations */}
            <div className="p-6 space-y-3">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
                Field breakdown
              </p>
              {[
                {
                  field: "blockedFeatures",
                  value: "YouTube Shorts, Instagram Reels…",
                  note: "The features you chose to block. Stored so your trusted contact knows what they&apos;re locking.",
                  safe: true,
                },
                {
                  field: "trustedName",
                  value: '"4hegrv" (optional name)',
                  note: "The name your trusted contact typed when setting the PIN. Optional and chosen by them.",
                  safe: true,
                },
                {
                  field: "uid",
                  value: "Firebase Auth ID",
                  note: "An anonymous identifier — not your name, email, or phone number.",
                  safe: true,
                },
                {
                  field: "pin",
                  value: "null",
                  note: "The PIN is set by your trusted contact directly. We never store it.",
                  safe: true,
                },
                {
                  field: "status / expiresAt",
                  value: '"used" · 24h expiry',
                  note: "Link state and expiry time. Record is deleted after use.",
                  safe: true,
                },
                {
                  field: "createdAt / approvedAt",
                  value: "Timestamps only",
                  note: "When the link was created and when the PIN was set. No activity data.",
                  safe: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-2.5 border-b border-[#1e3a5f]/40 last:border-0"
                >
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0 text-sm">✓</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <code className="text-indigo-300 text-xs bg-indigo-900/20 px-1.5 py-0.5 rounded font-mono">
                        {item.field}
                      </code>
                      <span className="text-slate-500 text-xs">{item.value}</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-2 bg-[#030712] rounded-xl p-4 border border-[#1e3a5f]/40">
                <p className="text-slate-400 text-xs leading-relaxed">
                  <span className="text-emerald-400 font-semibold">Nothing else.</span>{" "}
                  No screen time. No browsing. No app usage logs. No location.
                  No messages. Everything else stays on your device only.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 text-sm">
            Still have questions?{" "}
            <a
              href="mailto:neurolock.app@gmail.com"
              className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2"
            >
              neurolock.app@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
