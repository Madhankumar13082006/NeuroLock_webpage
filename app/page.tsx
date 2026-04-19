"use client";

import { useState } from "react";
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

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar onDownload={openModal} />
      <main>
        <Hero onDownload={openModal} />
        <Vision />
        <HowItWorks />
        <Features />
        <Gallery />
        <Trust />
        <Transparency />
        <DownloadCTA onDownload={openModal} />
      </main>
      <Footer />
      <DownloadModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
