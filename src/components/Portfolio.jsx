import React, { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  const navClass = (tabName) => 
    `cursor-pointer transition-all duration-300 font-medium text-sm ${
      activeTab === tabName ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-gray-200'
    }`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center py-5 px-8 md:px-16 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md fixed w-full top-0 z-50 gap-4 md:gap-0">
        <div 
          onClick={() => setActiveTab('about')}
          className="font-bold text-xl tracking-wider text-white cursor-pointer uppercase"
        >
          MOHAMED<span className="text-[#D4AF37]">.ENG</span>
        </div>
        
        <div className="flex gap-6 md:gap-8 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 justify-center whitespace-nowrap">
          <span onClick={() => setActiveTab('about')} className={navClass('about')}>About</span>
          <span onClick={() => setActiveTab('skills')} className={navClass('skills')}>Skills</span>
          <span onClick={() => setActiveTab('projects')} className={navClass('projects')}>Projects</span>
          <span onClick={() => setActiveTab('education')} className={navClass('education')}>Education & Training</span>
          <span onClick={() => setActiveTab('contact')} className={navClass('contact')}>Contact</span>
        </div>

        <button 
          onClick={() => setActiveTab('contact')}
          className="hidden md:block bg-[#D4AF37] hover:bg-[#b5952f] text-black px-5 py-2 rounded-lg text-sm font-bold transition-all"
        >
          Hire Me
        </button>
      </nav>

      {/* Main Content */}
      <main className="px-8 md:px-16 pt-32 pb-20 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        
        {/* ================= PAGE 1: ABOUT (HERO SECTION EXACTLY LIKE THE IMAGE) ================= */}
        {activeTab === 'about' && (
          <div className="animate-fade-in max-w-4xl mt-10">
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight">
              Hi, I'm <span className="text-[#D4AF37]">MOHAMED AYMAN</span>
            </h1>
            
            {/* Job Title */}
            <h2 className="text-xl md:text-2xl text-gray-400 mb-6 font-medium">
              Senior Civil Engineer (Technical Office / BIM)
            </h2>
            
            {/* Small Description */}
            <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-8">
              Civil Engineer specializing in Technical Office Engineering, Structural BIM, and precise Site Execution. 
              Focused on delivering high-quality projects, precise 3D modeling, and seamless interdisciplinary coordination. 
              Skilled in modern engineering software and strict code compliance.
            </p>

            {/* Badges (Place, Gmail, Tel) - Clickable */}
            <div className="flex flex-wrap gap-4 mb-10">
              {/* Place */}
              <div className="flex items-center gap-2 bg-[#131313] border border-gray-800 rounded-lg px-4 py-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Riyadh, Saudi Arabia
              </div>
              {/* Gmail */}
              <a href="mailto:mohamaedaymann1516@gmail.com" className="flex items-center gap-2 bg-[#131313] border border-gray-800 rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-[#D4AF37]/50 transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                mohamaedaymann1516@gmail.com
              </a>
              {/* Tel */}
              <a href="tel:+966566853823" className="flex items-center gap-2 bg-[#131313] border border-gray-800 rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-[#D4AF37]/50 transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +966 566853823
              </a>
            </div>

            {/* Buttons (View Projects + LinkedIn) */}
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveTab('projects')}
                className="bg-[#D4AF37] hover:bg-[#b5952f] text-black px-6 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              
              {/* LinkedIn Square Button */}
              <a 
                href="https://www.linkedin.com/in/mohamed-ayman-27966724a/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#131313] hover:bg-[#1a1a1a] text-[#D4AF37] w-11 h-11 rounded-lg flex items-center justify-center border border-gray-800 hover:border-[#D4AF37]/50 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* ================= PAGE 2: SKILLS ================= */}
        {activeTab === 'skills' && (
          <div className="animate-fade-in max-w-4xl">
            <h2 className="text-3xl text-white font-bold mb-10 border-b border-white/10 pb-4">Software & Skills</h2>
            
            <div className="mb-10">
              <h3 className="text-lg text-[#D4AF37] mb-4">Engineering Software</h3>
              <div className="flex flex-wrap gap-3">
                {['Revit Structural', 'AutoCAD', 'AutoCAD Structural Detailing', 'SAP 2000', 'Etabs', 'SAFE', 'Power BI', 'Cut Optimization'].map(skill => (
                  <span key={skill} className="px-4 py-2 border border-gray-800 rounded-lg text-gray-300 text-sm bg-[#131313]">{skill}</span>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-lg text-[#D4AF37] mb-4">Professional Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Leadership', 'Analytical Skills', 'Decision Making', 'Attention to Detail', 'Team Player', 'Adaptability'].map(skill => (
                  <span key={skill} className="px-4 py-2 border border-gray-800 rounded-lg text-gray-300 text-sm bg-[#131313]">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg text-[#D4AF37] mb-4">Languages</h3>
              <div className="space-y-3">
                <div className="flex justify-between bg-[#131313] border border-gray-800 rounded-lg p-4 text-sm text-gray-300"><span>Arabic</span> <span className="text-gray-400">Native</span></div>
                <div className="flex justify-between bg-[#131313] border border-gray-800 rounded-lg p-4 text-sm text-gray-300"><span>English</span> <span className="text-gray-400">C1 Conversational</span></div>
                <div className="flex justify-between bg-[#131313] border border-gray-800 rounded-lg p-4 text-sm text-gray-300"><span>Spanish</span> <span className="text-gray-400">B2 Conversational</span></div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAGE 3: PROJECTS ================= */}
        {activeTab === 'projects' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl text-white font-bold mb-10 border-b border-white/10 pb-4">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="bg-[#131313] border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-white font-bold">NewGiza (NH-08 & NH-04)</h3>
                  <span className="text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded">ECG / Degla CFM</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">Preparation and coordination of complex structural shop drawings for a major residential and commercial development.</p>
                <ul className="text-gray-400 font-light text-sm space-y-2 list-disc ml-4">
                  <li>Approved Shop Drawings (Code B) for Foundations.</li>
                  <li>Reinforcement Details for Swimming Pools & Mechanical Rooms.</li>
                  <li>Underground Masonry 3D Modeling and exact BOQ/QS.</li>
                  <li>Punching Layouts, Drop Panel Sections, and Shear Links.</li>
                </ul>
              </div>
              
              {/* Project 2 */}
              <div className="bg-[#131313] border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-white font-bold">BIM & 3D Coordination</h3>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Advanced</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">End-to-end structural modeling and interdisciplinary clash detection for various large-scale projects.</p>
                <ul className="text-gray-400 font-light text-sm space-y-2 list-disc ml-4">
                  <li>Strict adherence to BIM protocols and Level of Development.</li>
                  <li>MEP sleeves location with actual dimensions to resolve interference.</li>
                  <li>Navisworks (NWC, NWF) coordination and clash reports.</li>
                  <li>Automated schedules and PDF Sheets generation from Revit.</li>
                </ul>
              </div>
              
              {/* Experience acting as Projects */}
              <div className="bg-[#131313] border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-white font-bold">EL-HASSOUN HOTEL</h3>
                  <span className="text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded">Makkah, KSA</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">30.5 Floors hospitality project executed under a Design-Build contract by Taysar Trading Company.</p>
                <ul className="text-gray-400 font-light text-sm space-y-2 list-disc ml-4">
                  <li>Coordination between Plumbing, Electrical, and Post Tension.</li>
                  <li>Preparation of RFIs and solving site technical problems.</li>
                  <li>As-built drawings preparation for final handover.</li>
                </ul>
              </div>

              <div className="bg-[#131313] border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-white font-bold">PALM HILLS - PALM PLAY</h3>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">IND For Construction</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">Design-Build project in October, Egypt. Managed technical office and site coordination.</p>
                <ul className="text-gray-400 font-light text-sm space-y-2 list-disc ml-4">
                  <li>IFC drawings study and Concrete dimension Shop drawings.</li>
                  <li>Quantity Survey (QS) works for Civil & Architectural items.</li>
                  <li>On-site technical assistance to resolve engineering issues.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAGE 4: EDUCATION & TRAINING ================= */}
        {activeTab === 'education' && (
          <div className="animate-fade-in max-w-4xl">
            <h2 className="text-3xl text-white font-bold mb-10 border-b border-white/10 pb-4">Education & Training</h2>
            
            <div className="bg-[#131313] border border-gray-800 rounded-xl p-6 mb-8 border-l-4 border-l-[#D4AF37]">
              <h3 className="text-xl text-white font-bold mb-1">Bachelor of Civil Engineering</h3>
              <p className="text-[#D4AF37] text-sm mb-4">Fayoum University | Graduated May 2020</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                <p className="text-gray-300 text-sm"><strong>Overall Grade:</strong> Good</p>
                <p className="text-gray-300 text-sm"><strong>Graduation Project:</strong> Foundation (Grade: Good)</p>
              </div>
            </div>

            <h3 className="text-xl text-white font-bold mb-6">Certificates & Courses</h3>
            <div className="space-y-4">
              <div className="bg-[#131313] border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg text-white mb-2">Technical Office Engineer Diploma</h4>
                <p className="text-gray-400 text-sm">Shop drawing, Quantity Survey, AutoCAD & Revit 3D Coordination, Planning, Document Control, and Quotations.</p>
              </div>
              <div className="bg-[#131313] border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg text-white mb-2">Diploma in Concrete Design</h4>
                <p className="text-gray-400 text-sm">Advanced structural design methodologies certified by ECG.</p>
              </div>
              <div className="bg-[#131313] border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg text-white">ICDL</h4>
                <p className="text-gray-400 text-sm">International Computer Driving License.</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAGE 5: CONTACT ================= */}
        {activeTab === 'contact' && (
          <div className="animate-fade-in max-w-3xl mx-auto text-center mt-10">
            <h2 className="text-4xl text-white font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-400 text-lg mb-12">
              Available for Technical Office, BIM Coordination, and Structural Engineering opportunities. Let's build something exceptional.
            </p>

            <div className="flex flex-col gap-4">
              <a href="tel:+966566853823" className="group flex items-center justify-center gap-4 bg-[#131313] border border-gray-800 hover:border-[#D4AF37] rounded-xl p-6 transition-all duration-300">
                <span className="text-xl">📞</span>
                <span className="text-lg text-gray-200 group-hover:text-[#D4AF37] transition-colors">+966 566853823</span>
              </a>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:mohamaedaymann1516@gmail.com" className="group flex flex-col items-center justify-center gap-2 bg-[#131313] border border-gray-800 hover:border-[#D4AF37] rounded-xl p-6 transition-all duration-300">
                  <span className="text-2xl">✉️</span>
                  <span className="text-sm text-gray-200 group-hover:text-[#D4AF37] transition-colors break-all">mohamaedaymann1516@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/mohamed-ayman-27966724a/" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-2 bg-[#131313] border border-gray-800 hover:border-[#D4AF37] rounded-xl p-6 transition-all duration-300">
                  <span className="text-2xl">💼</span>
                  <span className="text-sm text-gray-200 group-hover:text-[#D4AF37] transition-colors">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}