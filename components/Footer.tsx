import { Brain, Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#030712] border-t border-[#1e3a5f]/40">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600/20 border border-indigo-500/30 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-indigo-400" strokeWidth={2} />
              </div>
              <span className="text-slate-100 font-semibold text-lg">NeuroLock</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              A calm, privacy-first digital wellbeing app for Android. Built to
              give your attention back to you — gently, without judgment.
            </p>
            <p className="text-slate-600 text-xs mt-4 italic">
              &ldquo;This moment is your choice.&rdquo;
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <a
                href="mailto:neurolock.app@gmail.com"
                className="flex items-center gap-2 text-slate-500 hover:text-indigo-300 text-sm transition-colors"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                neurolock.app@gmail.com
              </a>
              <a
                href="tel:+916380894864"
                className="flex items-center gap-2 text-slate-500 hover:text-indigo-300 text-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                +91 63808 94864
              </a>
              <a
                href="https://www.linkedin.com/in/madhankumar-thangaraj-60a394290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-indigo-300 text-sm transition-colors"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-slate-400 font-semibold text-sm mb-4">Product</p>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Features", href: "#features" },
                { label: "Screenshots", href: "#gallery" },
                { label: "Permissions FAQ", href: "#transparency" },
                { label: "Why Trust Us", href: "#trust" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-200 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <p className="text-slate-400 font-semibold text-sm mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:neurolock.app@gmail.com"
                  className="text-slate-500 hover:text-slate-200 text-sm transition-colors"
                >
                  App Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:madhankumarthangaraj13@gmail.com"
                  className="text-slate-500 hover:text-slate-200 text-sm transition-colors"
                >
                  Developer
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/madhankumar-thangaraj-60a394290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-200 text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="tel:+916380894864"
                  className="text-slate-500 hover:text-slate-200 text-sm transition-colors"
                >
                  +91 63808 94864
                </a>
              </li>
              <li className="pt-1 border-t border-[#1e3a5f]/40">
                <a href="#" className="text-slate-500 hover:text-slate-200 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-200 text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e3a5f]/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {year} NeuroLock. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-slate-600 text-sm">Early Access · Android 8.0+</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
