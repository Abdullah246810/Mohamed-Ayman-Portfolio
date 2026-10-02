import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md fixed w-full top-0 z-50">
        <div className="font-serif font-bold text-2xl tracking-widest text-white">
          M<span className="text-[#D4AF37]">A</span>
        </div>
        <div className="hidden lg:flex gap-8 text-xs text-gray-400 tracking-[0.2em] uppercase">
          <a href="#about" className="hover:text-[#D4AF37] transition-all duration-300">About</a>
          <a href="#experience" className="hover:text-[#D4AF37] transition-all duration-300">Experience</a>
          <a href="#portfolio" className="hover:text-[#D4AF37] transition-all duration-300">Portfolio</a>
          <a href="#skills" className="hover:text-[#D4AF37] transition-all duration-300">Skills</a>
        </div>
        <a href="https://www.linkedin.com/in/mohamed-ayman-27966724a/" target="_blank" rel="noreferrer" className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-6 py-2.5 text-xs font-bold transition-all duration-500 uppercase tracking-widest">
          LinkedIn
        </a>
      </nav>

      {/* Hero Section */}
      <main className="relative px-8 md:px-16 pt-40 pb-20 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 opacity-50 pointer-events-none hidden md:block"></div>
        
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-light">
            5+ Years of Engineering Excellence
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 leading-tight text-white uppercase">
            Mohamed <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f1d570] to-[#D4AF37]">
              Ayman Kornay
            </span>
          </h1>
          
          <h3 className="text-xl md:text-2xl text-gray-300 mb-10 font-light tracking-[0.2em] uppercase">
            Senior Civil Engineer | Technical Office & BIM
          </h3>

          <div className="pl-6 border-l-2 border-[#D4AF37]/50 mb-12">
            <p className="text-gray-400 text-lg leading-relaxed font-light max-w-2xl">
              Specializing in Technical Office Engineering, Structural BIM, and precise Site Execution. 
              Eager to associate with leading organizations to deliver quality services, precise modeling, and seamless coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl">
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 px-5 py-4">
              <span className="text-sm text-gray-300 tracking-wider">📍 Riyadh, Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 px-5 py-4">
              <span className="text-sm text-gray-300 tracking-wider">📞 +966 566853823</span>
            </div>
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 px-5 py-4 sm:col-span-2">
              <span className="text-sm text-gray-300 tracking-wider">✉️ mohamaedaymann1516@gmail.com</span>
            </div>
          </div>
        </div>
      </main>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-8 md:px-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-white font-serif mb-16 uppercase tracking-[0.2em]">Professional <span className="text-[#D4AF37]">Experience</span></h2>
          
          <div className="space-y-12">
            {/* Taysar */}
            <div className="border-l border-[#D4AF37]/30 pl-8 relative">
              <div className="absolute w-3 h-3 bg-[#D4AF37] rounded-full -left-[6.5px] top-2"></div>
              <h3 className="text-2xl text-white font-bold mb-1">Technical Office Engineer (Design Build)</h3>
              <h4 className="text-[#D4AF37] text-sm tracking-widest mb-4 uppercase">Taysar Trading Company | Aug 2024 - Present | Makkah, KSA</h4>
              <p className="text-gray-400 font-light mb-4 text-sm">Project: EL-HASSOUN HOTEL (30.5 Floors)</p>
              <ul className="text-gray-400 font-light text-sm space-y-2 list-disc ml-4">
                <li>Study specs, drawings, and conditions of the project contract.</li>
                <li>Coordination between owner's contractors (Plumbing, Electrical, Post Tension) and site follow-up.</li>
                <li>Prepare, revise, and approve Requests for Information (RFIs).</li>
                <li>Create clash detection and suggest engineering solutions.</li>
                <li>Prepare as-built drawings and handover to project consultants.</li>
              </ul>
            </div>

            {/* IND For Construction */}
            <div className="border-l border-[#D4AF37]/30 pl-8 relative">
              <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-2"></div>
              <h3 className="text-2xl text-white font-bold mb-1">Project Manager Technical Office & Site</h3>
              <h4 className="text-[#D4AF37] text-sm tracking-widest mb-4 uppercase">IND For Construction | May 2023 - Jul 2024 | October, Egypt</h4>
              <p className="text-gray-400 font-light mb-4 text-sm">Project: PALM HILLS - PALM PLAY (Design Build)</p>
              <ul className="text-gray-400 font-light text-sm space-y-2 list-disc ml-4">
                <li>Study IFC drawings and prepare RFT & Concrete dimension Shop drawings.</li>
                <li>Review drawings submitted by consultants and manage RFIs.</li>
                <li>Perform all requested QS (Quantity Survey) works (Civil & Architectural).</li>
                <li>Provide on-site technical assistance to resolve engineering problems efficiently.</li>
              </ul>
            </div>

            {/* BMB */}
            <div className="border-l border-[#D4AF37]/30 pl-8 relative">
              <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-2"></div>
              <h3 className="text-2xl text-white font-bold mb-1">Technical Office Engineer</h3>
              <h4 className="text-[#D4AF37] text-sm tracking-widest mb-4 uppercase">Builders For Modern Buildings (BMB) | May 2022 - May 2023 | October, Egypt</h4>
              <p className="text-gray-400 font-light mb-4 text-sm">Project: NEWGIZA</p>
              <ul className="text-gray-400 font-light text-sm space-y-2 list-disc ml-4">
                <li>Extensive use of Procore (Submittals, RFIs, Invoices).</li>
                <li>Structural modeling utilizing Revit Structure.</li>
                <li>Preparation and updating of shop drawings for consultant approvals (ECG & Degla CFM).</li>
                <li>Quantity surveying including bending lists and finishing works.</li>
              </ul>
            </div>

            {/* Earlier Roles */}
            <div className="border-l border-[#D4AF37]/30 pl-8 relative">
              <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-2"></div>
              <h3 className="text-xl text-white font-bold mb-1">Site Engineer</h3>
              <h4 className="text-[#D4AF37] text-sm tracking-widest mb-2 uppercase">Engineering Research & Consulting Office | Jun 2020 - Mar 2021 | Fayoum Uni, Egypt</h4>
              <p className="text-gray-400 font-light text-sm">Supervised implementation, financial extracts, and quantity reviews. Enhanced site quality control and contractor management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Featured Works */}
      <section id="portfolio" className="py-24 px-8 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-white font-serif mb-16 uppercase tracking-[0.2em]">Engineering <span className="text-[#D4AF37]">Portfolio</span></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-xl text-[#D4AF37] font-bold mb-3 uppercase tracking-widest">NewGiza (NH-08 & NH-04)</h3>
              <p className="text-sm text-gray-500 mb-6 uppercase">Consultant: ECG / Degla CFM</p>
              <ul className="text-gray-400 font-light text-sm space-y-3 list-disc ml-4">
                <li>Approved Shop Drawings (Code B) for Plain & Reinforced Concrete Foundations.</li>
                <li>Complex Reinforcement Details for Swimming Pools & Mechanical Rooms (Sections & Elevations).</li>
                <li>Underground Masonry 3D Modeling and exact BOQ/QS extraction directly from Revit.</li>
                <li>Punching Layouts, Drop Panel Typical Sections, and Shear Link Detailing.</li>
              </ul>
            </div>
            
            <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-xl text-[#D4AF37] font-bold mb-3 uppercase tracking-widest">BIM & 3D Coordination</h3>
              <p className="text-sm text-gray-500 mb-6 uppercase">Advanced Modeling & Clash Detection</p>
              <ul className="text-gray-400 font-light text-sm space-y-3 list-disc ml-4">
                <li>Strict adherence to BIM protocols, ensuring no duplication in model elements for accurate Material Quantities.</li>
                <li>Locating all MEP sleeves with actual dimensions to resolve interference with Structural elements.</li>
                <li>Exporting and updating Navisworks files (NWC, NWF) to coordinate multi-disciplinary models.</li>
                <li>Generation of automated schedules and PDF Sheets mandatory from Revit Models.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Education */}
      <section id="skills" className="py-24 px-8 md:px-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Education & Courses */}
          <div>
            <h2 className="text-2xl text-white font-serif mb-10 uppercase tracking-[0.2em]">Education & <span className="text-[#D4AF37]">Courses</span></h2>
            <div className="mb-8">
              <h3 className="text-lg text-white font-bold">Bachelor of Civil Engineering</h3>
              <p className="text-[#D4AF37] text-sm mb-2">Fayoum University | Graduated May 2020</p>
              <p className="text-gray-400 text-sm font-light">Grade: Good | Graduation Project: Foundation (Grade: Good)</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/[0.02] border border-white/10 p-4">
                <p className="text-gray-300 text-sm font-light">Technical Office Engineer: Shop drawing, Quantity Survey, AutoCAD & Revit 3D Coordination, Planning & Document Control.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/10 p-4">
                <p className="text-gray-300 text-sm font-light">Diploma in Concrete Design with ECG.</p>
              </div>
            </div>
          </div>

          {/* Software & Skills */}
          <div>
            <h2 className="text-2xl text-white font-serif mb-10 uppercase tracking-[0.2em]">Software & <span className="text-[#D4AF37]">Skills</span></h2>
            
            <div className="mb-8">
              <h3 className="text-sm text-[#D4AF37] tracking-widest uppercase mb-4">Engineering Software</h3>
              <div className="flex flex-wrap gap-2">
                {['Revit Structural', 'AutoCAD', 'AutoCAD Structural Detailing', 'SAP 2000', 'Etabs', 'SAFE', 'Power BI', 'Cut Optimization'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 border border-white/10 text-gray-300 text-xs tracking-wider bg-white/[0.02]">{skill}</span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm text-[#D4AF37] tracking-widest uppercase mb-4">Professional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Leadership', 'Analytical Skills', 'Decision Making', 'Attention to Detail', 'Team Player', 'Adaptability'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 border border-white/10 text-gray-300 text-xs tracking-wider bg-white/[0.02]">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-[#D4AF37] tracking-widest uppercase mb-4">Languages</h3>
              <p className="text-gray-400 text-sm font-light">Arabic (Native) • English (C1 Conversational) • Spanish (B2 Conversational)</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-gray-500 text-xs tracking-widest uppercase">
        © 2026 Mohamed Ayman. Civil & Structural Engineer.
      </footer>
    </div>
  );
}