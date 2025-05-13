"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Navigation component that appears from the beginning
const Navigation = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-950 to-purple-950 shadow-lg">
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-white hover:text-gray-200 transition">Home</a>
          <a href="#vision" className="text-white hover:text-gray-200 transition">Vision & Mission</a>
          <a href="#values" className="text-white hover:text-gray-200 transition">Core Values</a>
          <a href="#products" className="text-white hover:text-gray-200 transition">Products</a>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-white hover:text-gray-200 transition"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gradient-to-r from-blue-900 to-purple-900 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
              <div className="py-1" role="menu" aria-orientation="vertical">
                <a href="#cybersecurity" className="block px-4 py-2 text-sm text-white hover:bg-white/10" role="menuitem">Cybersecurity</a>
                <a href="#threat-detection" className="block px-4 py-2 text-sm text-white hover:bg-white/10" role="menuitem">Threat Detection</a>
                <a href="#threat-intelligence" className="block px-4 py-2 text-sm text-white hover:bg-white/10" role="menuitem">Threat Intelligence</a>
                <a href="#digital-francis" className="block px-4 py-2 text-sm text-white hover:bg-white/10" role="menuitem">Digital Francis</a>
                <a href="#infrastructure" className="block px-4 py-2 text-sm text-white hover:bg-white/10" role="menuitem">Infrastructure</a>
                <a href="#iot" className="block px-4 py-2 text-sm text-white hover:bg-white/10" role="menuitem">IoT Solutions</a>
              </div>
            </div>
          </div>

          <a href="#academy" className="text-white hover:text-gray-200 transition">Academy</a>
          <a href="#technology" className="text-white hover:text-gray-200 transition">Technology</a>
          <a href="#success-stories" className="text-white hover:text-gray-200 transition">Success Stories</a>
          <a href="#contact" className="text-white hover:text-gray-200 transition">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-blue-950 to-purple-950">
          <a href="#home" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md">Home</a>
          <a href="#vision" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md">Vision & Mission</a>
          <a href="#values" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md">Core Values</a>
          <a href="#products" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md">Products</a>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              className="flex items-center w-full px-3 py-2 text-white hover:bg-white/10 rounded-md"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`transition-all duration-200 ease-in-out overflow-hidden ${mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <a href="#cybersecurity" className="block pl-8 pr-3 py-2 text-sm text-white hover:bg-white/10 rounded-md">Cybersecurity</a>
              <a href="#threat-detection" className="block pl-8 pr-3 py-2 text-sm text-white hover:bg-white/10 rounded-md">Threat Detection</a>
              <a href="#threat-intelligence" className="block pl-8 pr-3 py-2 text-sm text-white hover:bg-white/10 rounded-md">Threat Intelligence</a>
              <a href="#digital-francis" className="block pl-8 pr-3 py-2 text-sm text-white hover:bg-white/10 rounded-md">Digital Francis</a>
              <a href="#infrastructure" className="block pl-8 pr-3 py-2 text-sm text-white hover:bg-white/10 rounded-md">Infrastructure</a>
              <a href="#iot" className="block pl-8 pr-3 py-2 text-sm text-white hover:bg-white/10 rounded-md">IoT Solutions</a>
            </div>
          </div>

          <a href="#academy" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md">Academy</a>
          <a href="#technology" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md">Technology</a>
          <a href="#success-stories" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md">Success Stories</a>
          <a href="#contact" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md">Contact Us</a>
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
          <Image
            key={i}
            src="/images/image.png"
            alt="decorative left"
            width={64}
            height={64}
            className="w-16 h-auto mb-2 object-contain object-left"
            style={{ opacity: 0.7 }}
          />
        ))}
      </div>
      {/* Decorative right-side images, tiled vertically, quarter width of left */}
      <div className="absolute right-0 top-0 h-full flex flex-col justify-between z-10 pointer-events-none" style={{ width: '22px', paddingTop: '24px', paddingBottom: '24px' }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Image
            key={i}
            src="/images/image.png"
            alt="decorative right"
            width={16}
            height={64}
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
              We align with Vision 2030 to protect the Kingdom&#39;s digital landscape.
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
      <div className="w-full relative overflow-hidden pt-16" style={{
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
              <div className="mb-8 relative">
                <span className="block text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">OUR</span>
                <span className="block text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">VISION</span>
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-400"></div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl backdrop-blur-sm bg-white/5 p-6 rounded-lg border-l-4 border-blue-400 shadow-lg">
                To be Saudi Arabia&#39;s foremost partner in securing the digital future, empowering smart cities, critical infrastructure, and emerging technologies with cutting-edge cybersecurity solutions that drive national growth and resilience
              </p>
            </div>

            {/* Vertical Line Divider */}
            <div className="hidden md:block w-px h-80 bg-gradient-to-b from-white/10 via-white/40 to-white/10 mx-8"></div>

            {/* Right: Mission */}
            <div className="w-full md:w-1/2 text-white mt-12 md:mt-0">
              <div className="mb-8 relative">
                <span className="block text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">OUR</span>
                <span className="block text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">MISSION</span>
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-400"></div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl backdrop-blur-sm bg-white/5 p-6 rounded-lg border-l-4 border-blue-400 shadow-lg">
                To provide innovative cybersecurity solutions that protect Saudi Arabia&#39;s digital landscape, empowering smart cities and critical infrastructure. We strive to enhance national security and resilience through collaboration and advanced technologies, driving sustainable growth for the future.
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
                  Supporting Saudi Arabia&#39;s strategic vision 2030 by nurturing local talent, advancing national capabilities, and safeguarding critical infrastructure
                </p>
              </div>

              {/* Customer Centricity */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">Customer Centricity</h3>
                <p className="text-gray-200">
                  Tailored solutions to address the client&#39;s specific needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products and Services Section */}
        <section id="products" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Products and Services</h2>
                <div className="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
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
        <section id="threat-detection" className="py-20 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl font-semibold mb-8 border-b border-white/20 pb-2 inline-block">Threat detection and response</h3>

                <div className="space-y-6 text-lg backdrop-blur-sm bg-black/10 p-6 rounded-lg border border-white/10">
                  <p className="leading-relaxed">
                    A next-gen IT/OT/IoT SOC of NeoNova, effectively works and significantly reduces the response time to threats by applying Artificial Intelligence technologies, Machine Learning and Big-Data to automate business processes and improve investigation capabilities.
                  </p>
                  <p className="leading-relaxed">
                    NeoNova connects/collects all resources through agents/ log forwarders, setting up passive information collection points (SPAN/ TAP/Network broker, etc.), and using connectors/APIs for non-standard data types.
                  </p>
                  <p className="leading-relaxed">
                    NeoNova uses Big-Data platform and various AI/ML applied engines with advanced algorithms and models for centralization and automation. NeoNova also provides continuous and comprehensive Cyber Security scenarios to help your organization respond timely to incidents. This is an important element of Adaptive Security Architecture.
                  </p>
                </div>

                <div className="mt-10 space-y-4 bg-gradient-to-r from-blue-900/30 to-transparent p-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                    <p className="font-semibold text-xl">PROACTIVE, CONTINUOUS, AUTOMATIC AND COMPREHENSIVE MONITORING</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                    <p className="font-semibold text-xl">TIME ANALYZING, ALERTING AND RESPONDING TO THREATS</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <Image
                  src="/images/threat.png"
                  alt="NeoNova Threat Detection Solution"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain relative z-10"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-black/50 flex items-center justify-center rounded-md shadow-xl backdrop-blur-md border border-white/20 z-20 hover:bg-black/30 transition-all duration-300" style={{ boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)' }}>
                  <Image
                    src="/images/logo.png"
                    alt="NeoNova Logo"
                    width={140}
                    height={140}
                    className="w-full h-full object-contain drop-shadow-lg"
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
                <Image
                  src="/images/cyper.png"
                  alt="NeoNova Cyber Threat Intelligence"
                  width={600}
                  height={400}
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
                    Using data collected in real-time from a variety of sources, NeoNova&#39;s - Threat Intelligence offers comprehensive and up-to-date scenarios of potential threats to your organization.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="font-semibold text-2xl">DEEP UNDERSTANDING OF THREATS</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Digital Francis Services Section */}
        <section id="digital-francis" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white">Digital Francis Services</h2>
              <div className="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
              <p className="max-w-3xl mx-auto text-lg">
                Revolutionizing Infrastructure with Digital Francis Expertise
              </p>
            </div>

            <div className="relative flex justify-center items-center mt-16 mb-20">
              {/* Center Logo */}
              <div className="absolute z-20 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="NeoNova Logo"
                  width={150}
                  height={150}
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Services arranged in a circle */}
              <div className="relative w-[700px] h-[700px]">
                {/* Digital Forensics Lab - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-72 bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 shadow-xl">
                  <h2 className="text-xl font-semibold mb-4">Digital Forensics Lab</h2>
                  <p>Designed Saudi Arabia&#39;s first public Digital Forensics Lab for organizations, adhering to ISO 17025 standards.</p>
                </div>

                {/* Incident readiness - Right */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 w-72 bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 shadow-xl">
                  <h3 className="text-xl font-semibold mb-4">Incident readiness and response services</h3>
                  <p>Proactive Defense. Rapid Response. Resilient Recovery.</p>
                </div>

                {/* Log & Artifact Analysis - Bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-72 bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 shadow-xl">
                  <h3 className="text-xl font-semibold mb-4">Log & Artifact Analysis</h3>
                  <p>Investigate system, network, and application logs to trace attacker activity.</p>
                </div>

                {/* Malware Analysis - Left */}
                <div className="absolute top-1/2 left-0 transform -translate-x-1/3 -translate-y-1/2 w-72 bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 shadow-xl">
                  <h3 className="text-xl font-semibold mb-4">Malware Analysis</h3>
                  <p>Examine malicious code to understand behavior, origin, and potential impact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure and Data Centers Section */}
        <section id="infrastructure" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white">Infrastructure and Data Centers</h2>
              <div className="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {/* Data Center Design and Build */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4">Data Center Design and Build</h3>
                <div className="w-16 h-1 bg-white/50 mb-4"></div>
                <p>Customized design and construction of state-of-the-art data center facilities tailored to specific business requirements.</p>
              </div>

              {/* Managed Data Center Services */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4">Managed Data Center Services</h3>
                <div className="w-16 h-1 bg-white/50 mb-4"></div>
                <p>Comprehensive management of data center operations including monitoring, maintenance, and support to ensure high performance and reliability.</p>
              </div>

              {/* Cloud Infrastructure Services */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure Services</h3>
                <div className="w-16 h-1 bg-white/50 mb-4"></div>
                <p>Deployment and management of cloud-based solutions, including public, private, and hybrid cloud environments to enhance scalability and flexibility.</p>
              </div>

              {/* Disaster Recovery Solutions */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4">Disaster Recovery Solutions</h3>
                <div className="w-16 h-1 bg-white/50 mb-4"></div>
                <p>Implementation of robust disaster recovery plans and data backup solutions to ensure business continuity and rapid recovery from disruptions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* IoT and Emerging Technologies Section */}
        <section id="iot" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white">Integration of IoT devices for real-time data collection.</h2>
              <div className="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Empowering smart cities with innovative IoT solutions.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4">Data analytics for improved city planning and resource management.</h3>
                <div className="w-16 h-1 bg-white/50 mb-4"></div>
                <p>Proactive Defense. Rapid Response. Resilient Recovery.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4">Enhanced cybersecurity measures for protecting connected systems.</h3>
                <div className="w-16 h-1 bg-white/50 mb-4"></div>
                <p>Investigate system, network, and application logs to trace attacker activity.</p>
              </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4">Enhanced cybersecurity</h3>
                <div className="w-16 h-1 bg-white/50 mb-4"></div>
                <p>Investigate system, network, and application logs to trace attacker activity.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-4">Smart infrastructure solutions to enhance urban living.</h3>
                <div className="w-16 h-1 bg-white/50 mb-4"></div>
                <p>Examine malicious code to understand behavior, origin, and potential impact.</p>
              </div>
            </div>

          </div>
        </section>
        {/* NEONOVA Academy Section */}
        <section id="academy" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white">NEONOVA Academy</h2>
              <div className="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Building National Cyber Talent through NEONOVA Academy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center h-full">
                <div className="mb-6">
                  <Image
                    src="/images/logo.png"
                    alt="Cybersecurity Training"
                    width={48}
                    height={48}
                    className="w-12 h-12 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Cybersecurity Training & Certification Programs

                </h3>
                <div className="w-16 h-1 bg-white/50 mb-6 mx-auto"></div>
                <p className="text-sm text-gray-300">
                  Structured courses aligned with global standards (e.g., CISSP, CEH, CompTIA) to develop skilled cyber professionals.
                  .
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center h-full">
                <div className="mb-6">
                  <Image
                    src="/images/logo.png"
                    alt="Cybersecurity Awareness"
                    width={48}
                    height={48}
                    className="w-12 h-12 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Cybersecurity Awareness & Capacity Building Programs

                </h3>
                <div className="w-16 h-1 bg-white/50 mb-6 mx-auto"></div>
                <p className="text-sm text-gray-300">
                  Practical, scenario-based training environments that allow participants to test skills in simulated cyberattack situations.
                  .
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 flex flex-col items-center text-center h-full">
                <div className="mb-6">
                  <Image
                    src="/images/logo.png"
                    alt="Hands-on Labs"
                    width={48}
                    height={48}
                    className="w-12 h-12 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Hands-on Labs & Real-World Simulation Exercises
                </h3>
                <div className="w-16 h-1 bg-white/50 mb-6 mx-auto"></div>
                <p className="text-sm text-gray-300">
                  Programs designed to elevate cyber hygiene and awareness across organizations, from executives to end-users.
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Innovation Section */}
        <section id="technology" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology & Innovation</h2>
              <div className="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/60 p-8 rounded-lg border border-purple-800/50 hover:bg-black/70 transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 mr-4 flex items-center justify-center rounded-full">
                    <Image
                      src="/images/AI.png"
                      alt="AI Integration"
                      width={80}
                      height={80}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">AI Integration</h3>
                </div>
                <p className="text-gray-300 text-sm">Machine learning algorithms detect emerging threats.</p>
              </div>

              <div className="bg-black/60 p-8 rounded-lg border border-purple-800/50 hover:bg-black/70 transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 mr-4 flex items-center justify-center rounded-full">
                    <Image
                      src="/images/cloud.png"
                      alt="Hybrid Cloud"
                      width={80}
                      height={80}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Hybrid Cloud</h3>
                </div>
                <p className="text-gray-300 text-sm">Flexible solutions reducing costs by 35%.</p>
              </div>
              <div className="bg-black/60 p-8 rounded-lg border border-purple-800/50 hover:bg-black/70 transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 mr-4 flex items-center justify-center rounded-full">
                    <Image
                      src="/images/Monitoring.png"
                      alt="24/7 Monitoring"
                      width={80}
                      height={80}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">24/7 Monitoring</h3>
                </div>
                <p className="text-gray-300 text-sm">Continuous vigilance against global threats.</p>
              </div>
              <div className="bg-black/60 p-8 rounded-lg border border-purple-800/50 hover:bg-black/70 transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 mr-4 flex items-center justify-center rounded-full">
                    <Image
                      src="/images/Network.png"
                      alt="Network Security"
                      width={80}
                      height={80}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Network Security</h3>
                </div>
                <p className="text-gray-300 text-sm">Specialized expertise in connectivity protection.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Client Success Stories Section */}
        <section id="success-stories" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white">Client Success Stories</h2>
              <div className="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>

              {/* Government Infrastructure */}
              <div className="flex flex-col md:flex-row items-center mb-16 relative">
                <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 mb-8 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4">Government Infrastructure</h3>
                    <p className="text-gray-300 text-sm">
                      Deployed hybrid infrastructure for semi-government organization. Reduced operational costs by 35%.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-black z-10"></div>
                <div className="w-full md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>

              {/* Research Protection */}
              <div className="flex flex-col md:flex-row items-center mb-16 relative">
                <div className="w-full md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500 border-4 border-black z-10"></div>
                <div className="w-full md:w-1/2 md:pl-12">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300">
                    <h3 className="text-xl font-semibold mb-4">Research Protection</h3>
                    <p className="text-gray-300 text-sm">
                      Implemented secure data management for genomic research facility. Enhanced processing efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Critical Security */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300 mb-8 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4">Critical Security</h3>
                    <p className="text-gray-300 text-sm">
                      Delivered comprehensive frameworks for national infrastructure. Prevented multiple advanced threats.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-black z-10"></div>
                <div className="w-full md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose NeoNova Section */}
        <section id="why-choose" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose NeoNova</h2>
              <div className="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Reason 1 - Left */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="w-full md:w-1/2 md:pr-8">
                  <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-500/30 shadow-lg">
                    <h3 className="text-xl font-semibold mb-3">Vision 2030 Alignment</h3>
                    <p className="text-gray-300">Deep commitment to Saudi Arabia's digital transformation goals.</p>
                  </div>
                </div>
                <div className="hidden md:block w-full md:w-1/2"></div>
              </div>

              {/* Reason 2 - Right */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="hidden md:block w-full md:w-1/2"></div>
                <div className="w-full md:w-1/2 md:pl-8">
                  <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 shadow-lg">
                    <h3 className="text-xl font-semibold mb-3">Certified Expertise</h3>
                    <p className="text-gray-300">Team holds industry-recognized qualifications and specialized training.</p>
                  </div>
                </div>
              </div>

              {/* Reason 3 - Left */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="w-full md:w-1/2 md:pr-8">
                  <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-500/30 shadow-lg">
                    <h3 className="text-xl font-semibold mb-3">Capability Building</h3>
                    <p className="text-gray-300">Comprehensive cybersecurity training programs for Saudi talents.</p>
                  </div>
                </div>
                <div className="hidden md:block w-full md:w-1/2"></div>
              </div>

              {/* Reason 4 - Right */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="hidden md:block w-full md:w-1/2"></div>
                <div className="w-full md:w-1/2 md:pl-8">
                  <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 shadow-lg">
                    <h3 className="text-xl font-semibold mb-3">Trusted Partnership</h3>
                    <p className="text-gray-300">Proven track record securing Saudi Arabia's digital assets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="text-white py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-blue-950/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              {/* Left: Content */}
              <div className="w-full md:w-1/2">

                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">Our Trusted Partners</h2>
                <div className="space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300">
                  <p className="text-white text-lg">Collaborating with EY to enhance cybersecurity strategies.</p>
                  <p className="text-white text-lg">CIMTRAK provides innovative data protection solutions.</p>
                  <p className="text-white text-lg">Cloudflare helps us ensure robust on-line security.</p>
                </div>
              </div>

              {/* Right: Partner Logos */}
              <div className="w-full md:w-1/2 flex flex-col items-center gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                  <div className="flex justify-center items-center bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30 hover:bg-black/60 transition duration-300 shadow-lg">
                    <Image
                      src="/images/ey.png"
                      alt="EY"
                      width={250}
                      height={250}
                      className="h-45 w-auto object-contain filter brightness-150 drop-shadow-lg"
                    />
                  </div>
                  <div className="flex justify-center items-center bg-black/50 backdrop-blur-sm rounded-lg border border-blue-500/30 hover:bg-black/60 transition duration-300 shadow-lg">
                    <Image
                      src="/images/cimtrack.png"
                      alt="CIMTRAK"
                      width={450}
                      height={450}
                      className="h-auto w-full max-w-[450px] object-contain filter brightness-150 drop-shadow-lg"
                    />
                  </div>
                  <div className="flex justify-center items-center md:col-span-2 bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30 hover:bg-black/60 transition duration-300 shadow-lg">
                    <Image
                      src="/images/cloudflare.png"
                      alt="Cloudflare"
                      width={170}
                      height={170}
                      className="h-28 w-auto object-contain filter brightness-150 drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer with contact information */}
        <footer id="contact" className="text-white py-12 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-300">Al-Garage, Prince Turki Bin Abdulaziz Al-Awal Road, Al-Raed, Riyadh 12354</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@neonova.sa" className="text-gray-300 hover:text-white transition">info@neonova.sa</a>
                  </div>

                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
                  <a href="#vision" className="text-gray-300 hover:text-white transition">Vision & Mission</a>
                  <a href="#values" className="text-gray-300 hover:text-white transition">Core Values</a>
                  <a href="#products" className="text-gray-300 hover:text-white transition">Products</a>
                  <a href="#cybersecurity" className="text-gray-300 hover:text-white transition">Cybersecurity</a>
                  <a href="#digital-francis" className="text-gray-300 hover:text-white transition">Digital Francis</a>
                </div>
              </div>

              {/* Logo and Social */}
              <div className="flex flex-col items-center md:items-end">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 mr-2 relative">
                    <Image
                      src="/images/logo.png"
                      alt="NEONOVA Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold text-white">NEONOVA</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 text-center md:text-right">
                  Securing Digital Futures in Saudi Arabia
                </p>

              </div>
            </div>

            <div className="text-center text-gray-400 pt-8 border-t border-white/10">
              <p>© {new Date().getFullYear()} NeoNova. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
