import React from "react";
import HeroSection from "./components/HeroSection";
import MainContentSection from "./components/MainContentSection";
import VideoGallerySection from "./components/VideoGallerySection";
import CallToActionSection from "./components/CallToActionSection";
import { FooterSection } from "./components/FooterSection";
import './styles/tailwind.css';
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <MainContentSection />
      <VideoGallerySection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}
