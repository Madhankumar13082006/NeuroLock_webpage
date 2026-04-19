"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Trust from "@/components/Trust";
import Transparency from "@/components/Transparency";
import DownloadCTA from "@/components/DownloadCTA";
import DownloadModal from "@/components/DownloadModal";
import Footer from "@/components/Footer";
import { ArrowDown } from "lucide-react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar onDownload={openModal} />
      <main className="pb-20 md:pb-0">
        <Hero onDownload={openModal} />
        <Vision />
        <HowItWorks />
        <Gallery />
        <Features />
        <Trust />
        <Transparency />
        <DownloadCTA onDownload={openModal} />
      </main>
      <Footer />
      <DownloadModal open={modalOpen} onClose={closeModal} />

      {/* Sticky bottom CTA — mobile only */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-[#030712]/95 backdrop-blur-md border-t border-[#1e3a5f]/60 px-4 py-3 flex items-center gap-3">
          <button
            onClick={openModal}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-base rounded-2xl transition-colors active:scale-95"
          >
            <ArrowDown className="w-4 h-4" />
            Download Free — Android
          </button>
        </div>
      </div>
    </>
  );
}
