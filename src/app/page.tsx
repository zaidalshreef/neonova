"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

// Navigation component that appears when scrolling down
const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation when scrolled past the hero section
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY > viewportHeight * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isVisible
      ? "bg-gradient-to-r from-blue-950 to-purple-950 shadow-lg transform translate-y-0"
      : "transform -translate-y-full"
      }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-8 w-8 mr-2 relative">
            <Image
              src="/images/logo.png"
              alt="NEONOVA Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold text-white">NEONOVA</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-gray-200 transition">Home</a>
          <a href="#about" className="text-white hover:text-gray-200 transition">About</a>
          <a href="#services" className="text-white hover:text-gray-200 transition">Services</a>
          <a href="#portfolio" className="text-white hover:text-gray-200 transition">Portfolio</a>
          <a href="#contact" className="text-white hover:text-gray-200 transition">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Components
const Navbar = () => {
  return (
    <header id="home" className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Decorative left-side images, tiled vertically */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between z-10 pointer-events-none" style={{ width: '90px', paddingTop: '24px', paddingBottom: '24px' }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <img
            key={i}
            src="/images/image.png"
            alt="decorative left"
            className="w-16 h-auto mb-2 object-contain object-left"
            style={{ opacity: 0.7 }}
          />
        ))}
      </div>
      {/* Decorative right-side images, tiled vertically, quarter width of left */}
      <div className="absolute right-0 top-0 h-full flex flex-col justify-between z-10 pointer-events-none" style={{ width: '22px', paddingTop: '24px', paddingBottom: '24px' }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <img
            key={i}
            src="/images/image.png"
            alt="decorative right"
            className="w-4 h-auto mb-2 object-contain object-right"
            style={{ opacity: 0.5 }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 py-16 text-center z-20">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="w-36 h-36 mb-10 relative">
            <Image
              src="/images/logo.png"
              alt="NEONOVA Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Text */}
          <h1 className="text-7xl font-bold mb-4 tracking-wide">NEONOVA</h1>
          <h2 className="text-2xl font-light mb-8">NeoNova Securing Digital Futures in Saudi Arabia</h2>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg">
              NeoNova leads cybersecurity excellence in Saudi Arabia.
              We align with Vision 2030 to protect the Kingdom's digital landscape.
              As trusted partners to government and private sectors, we deliver specialized
              security solutions for digital transformation.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="w-full relative overflow-hidden" style={{
        background: `
          radial-gradient(ellipse 45% 70% at 12% 50%, rgba(26,35,126,0.45) 55%, transparent 100%),
          radial-gradient(ellipse 45% 70% at 88% 60%, rgba(26,35,126,0.45) 55%, transparent 100%),
          radial-gradient(ellipse 70% 80% at 50% 60%, #010101 95%, #181a2a 100%)
        `
      }}>
        <Navbar />

        {/* Vision Section */}
        <section id="vision" className="pb-20 pt-0 mt-0 text-white w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 px-4 max-w-7xl mx-auto z-20 relative">
            {/* Left: Text */}
            <div className="w-full md:w-1/2 text-white">
              <div className="mb-8">
                <span className="block text-5xl md:text-6xl font-extrabold mb-4">OUR</span>
                <span className="block text-5xl md:text-6xl font-extrabold mb-8">VISION</span>
              </div>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl">
                To be Saudi Arabia's foremost partner in securing the digital future, empowering smart cities, critical infrastructure, and emerging technologies with cutting-edge cybersecurity solutions that drive national growth and resilience
              </p>
            </div>

            {/* Vertical Line Divider */}
            <div className="hidden md:block w-px h-80 bg-white/30 mx-8"></div>

            {/* Right: Mission */}
            <div className="w-full md:w-1/2 text-white mt-12 md:mt-0">
              <div className="mb-8">
                <span className="block text-5xl md:text-6xl font-extrabold mb-4">OUR</span>
                <span className="block text-5xl md:text-6xl font-extrabold mb-8">MISSION</span>
              </div>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl">
                To provide innovative cybersecurity solutions that protect Saudi Arabia's digital landscape, empowering smart cities and critical infrastructure. We strive to enhance national security and resilience through collaboration and advanced technologies, driving sustainable growth for the future.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section id="values" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white">NEONOVA Core Values</h2>
              <div className="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Integrity */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">Integrity</h3>
                <p className="text-gray-200">
                  Upholding the highest ethical standards, we build trust with our clients and partners
                </p>
              </div>

              {/* Innovation and Excellence */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">Innovation and Excellence</h3>
                <p className="text-gray-200">
                  Embracing advanced technologies to deliver transformative solutions at the highest quality
                </p>
              </div>

              {/* Collaboration and Partnership */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">Collaboration and Partnership</h3>
                <p className="text-gray-200">
                  Promoting best in class expertise driven by the power of collaboration and partnership, both Globally and Locally
                </p>
              </div>

              {/* National commitment */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">National Commitment</h3>
                <p className="text-gray-200">
                  Supporting Saudi Arabia's strategic vision 2030 by nurturing local talent, advancing national capabilities, and safeguarding critical infrastructure
                </p>
              </div>

              {/* Customer Centricity */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">Customer Centricity</h3>
                <p className="text-gray-200">
                  Tailored solutions to address the client's specific needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products and Services Section */}
        <section id="products" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 text-left">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Products and Services</h2>
                <div className="w-24 h-1 bg-white mt-4 mb-8"></div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img
                  src="/images/saudi.png"
                  alt="Digital Saudi Arabia"
                  className="rounded-2xl shadow-2xl w-full max-w-xl h-auto object-contain border border-white/10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cybersecurity Services Section */}
        <section id="cybersecurity" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Cybersecurity – Managed SOC Services</h2>
              <p className="text-xl text-gray-300">Govern. Defend. Comply. Your Security, Fully Managed.</p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Center Logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-10">
                <img
                  src="/images/logo.png"
                  alt="NeoNova Logo"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>

              {/* Services */}
              <div className="grid grid-cols-2 gap-8 md:gap-16">
                {/* Left Column */}
                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-full border border-white/20 text-center">
                    <p className="font-semibold">Threat Detection and Response</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-full border border-white/20 text-center">
                    <p className="font-semibold">Cyber Threat Intelligence</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-full border border-white/20 text-center">
                    <p className="font-semibold">Threat Hunting</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-full border border-white/20 text-center">
                    <p className="font-semibold">Compromise Assessment</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8 pt-16">
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-full border border-white/20 text-center">
                    <p className="font-semibold">Attack and Penetration Testing</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-full border border-white/20 text-center">
                    <p className="font-semibold">Vulnerability Management</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-full border border-white/20 text-center">
                    <p className="font-semibold">Insider Threat Management</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-2xl font-bold uppercase">CYBER SECURITY SERVICES</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Detection Section */}
        <section id="threat-detection" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl font-semibold mb-8">Threat detection and response</h3>

                <div className="space-y-6 text-lg">
                  <p>
                    A next-gen IT/OT/IoT SOC of NeoNova, effectively works and significantly reduces the response time to threats by applying Artificial Intelligence technologies, Machine Learning and Big-Data to automate business processes and improve investigation capabilities.
                  </p>
                  <p>
                    NeoNova connects/collects all resources through agents/ log forwarders, setting up passive information collection points (SPAN/ TAP/Network broker, etc.), and using connectors/APIs for non-standard data types.
                  </p>
                  <p>
                    NeoNova uses Big-Data platform and various AI/ML applied engines with advanced algorithms and models for centralization and automation. NeoNova also provides continuous and comprehensive Cyber Security scenarios to help your organization respond timely to incidents. This is an important element of Adaptive Security Architecture.
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <p className="font-semibold text-xl">PROACTIVE, CONTINUOUS, AUTOMATIC AND COMPREHENSIVE MONITORING</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <p className="font-semibold text-xl">TIME ANALYZING, ALERTING AND RESPONDING TO THREATS</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/5 relative">
                <img
                  src="/images/threat.png"
                  alt="NeoNova Threat Detection Solution"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-black flex items-center justify-center rounded-md shadow-lg">
                  <img
                    src="/images/logo.png"
                    alt="NeoNova Logo"
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cyber Threat Intelligence Section */}
        <section id="threat-intelligence" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-2/5">
                <img
                  src="/images/cyper.png"
                  alt="NeoNova Cyber Threat Intelligence"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="w-full md:w-3/5">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">NeoNova</h2>
                <h3 className="text-2xl font-semibold mb-8">Cyber threat intelligence</h3>

                <div className="space-y-6 text-lg">
                  <p>
                    By collecting and analyzing information about cyber threats, NeoNova - Threat Intelligence is an active protection method which aims to provide your organization a deeper understanding of threats.
                  </p>
                  <p>
                    Using data collected in real-time from a variety of sources, NeoNova's - Threat Intelligence offers comprehensive and up-to-date scenarios of potential threats to your organization.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="font-semibold text-2xl">DEEP UNDERSTANDING OF THREATS</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer with copyright only */}
        <footer className="text-white py-12 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-300">
              <p>© {new Date().getFullYear()} NeoNova. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
