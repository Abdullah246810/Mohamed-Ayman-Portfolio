import React, { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  // دالة مساعدة لتغيير شكل الزر النشط في شريط التنقل
  const navClass = (tabName) => 
    `cursor-pointer transition-all duration-300 uppercase tracking-widest text-xs ${
      activeTab === tabName ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1' : 'hover:text-[#D4AF37]'
    }`;

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navbar (شريط التنقل) */}
      <nav className="flex flex-col md:flex-row justify-between items-center py-6 px-8 md:px-16 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md fixed w-full top-0 z-50 gap-4 md:gap-0">
        <div 
          onClick={() => setActiveTab('about')}
          className="font-serif font-bold text-2xl tracking-widest text-white cursor-pointer"
        >
          M<span className="text-[#D4AF37]">A</span>
        </div>
        
        {/* قائمة التنقل - تدعم التمرير على الموبايل */}
        <div className="flex gap-6 md:gap-10 text-gray-400 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 justify-center whitespace-nowrap">
          <span onClick={() => setActiveTab('about')} className={navClass('about')}>About</span>
          <span onClick={() => setActiveTab('skills')} className={navClass('skills')}>Skills</span>
          <span onClick={() => setActiveTab('projects')} className={navClass('projects')}>Projects</span>
          <span onClick={() => setActiveTab('education')} className={navClass('education')}>Education & Training</span>
          <span onClick={() => setActiveTab('contact')} className={navClass('contact')}>Contact</span>
        </div>
      </nav>

      {/* محتوى الصفحات الديناميكي */}
      <main className="px-8 md:px-16 pt-40 pb-20 max-w-7xl mx-auto min-h-screen">
        
        {/* ================= PAGE 1: ABOUT (HERO + EXPERIENCE) ================= */}
        {activeTab === 'about' && (
          <div className="animate-fade-in">
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
            <div className="pl-6 border-l-2 border-[#D4AF37]/50 mb-16">
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-2xl">
                Specializing in Technical Office Engineering, Structural BIM, and precise Site Execution. 
                Eager to associate with leading organizations to deliver quality services, precise modeling, and seamless coordination.
              </p>
            </div>

            {/* الخبرات المهنية */}
            <h2 className="text-3xl text-white font-serif mb-10 uppercase tracking-[0.2em] border-b border-white/10 pb-4">Professional <span className="text-[#D4AF37]">Experience</span></h2>
            <div className="space-y-12">
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

              <div className="border-l border-[#D4AF37]/30 pl-8 relative">
                <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-2"></div>
                <h3 className="text-2xl text-white font-bold mb-1">Project Manager Technical Office & Site</h3>
                <h4 className="text-[#D4AF37] text-sm tracking-widest mb-4 uppercase">IND For Construction | May 2023 - Jul 2024 | October, Egypt</h4>
                <p className="text-gray-400 font-light mb-4 text-sm">Project: PALM HILLS - PALM PLAY (Design Build)</p>
                <ul className="text-gray-400 font-light text-sm space-y-2 list-disc ml-4">
                  <li>Study IFC drawings and prepare RFT & Concrete dimension Shop drawings.</li>
                  <li>Review drawings submitted by consultants and manage RFIs.</li>
                  <li>Perform all requested QS (Quantity Survey) works.</li>
                  <li>Provide on-site technical assistance to resolve engineering problems efficiently.</li>
                </ul>
              </div>

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

              <div className="border-l border-[#D4AF37]/30 pl-8 relative">
                <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-2"></div>
                <h3 className="text-xl text-white font-bold mb-1">Site Engineer</h3>
                <h4 className="text-[#D4AF37] text-sm tracking-widest mb-2 uppercase">Engineering Research & Consulting Office | Jun 2020 - Mar 2021 | Fayoum Uni, Egypt</h4>
                <p className="text-gray-400 font-light text-sm">Supervised implementation, financial extracts, and quantity reviews. Enhanced site quality control and contractor management.</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAGE 2: SKILLS ================= */}
        {activeTab === 'skills' && (
          <div className="animate-fade-in max-w-4xl">
            <h2 className="text-3xl text-white font-serif mb-12 uppercase tracking-[0.2em] border-b border-white/10 pb-4">Software & <span className="text-[#D4AF37]">Skills</span></h2>
            
            <div className="mb-12">
              <h3 className="text-sm text-[#D4AF37] tracking-widest uppercase mb-6">Engineering Software</h3>
              <div className="flex flex-wrap gap-3">
                {['Revit Structural', 'AutoCAD', 'AutoCAD Structural Detailing', 'SAP 2000', 'Etabs', 'SAFE', 'Power BI', 'Cut Optimization'].map(skill => (
                  <span key={skill} className="px-5 py-3 border border-white/10 text-gray-200 text-sm tracking-wider bg-white/[0.02] hover:border-[#D4AF37]/50 transition-colors">{skill}</span>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-sm text-[#D4AF37] tracking-widest uppercase mb-6">Professional Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Leadership', 'Analytical Skills', 'Decision Making', 'Attention to Detail', 'Team Player', 'Adaptability', 'Multitasking'].map(skill => (
                  <span key={skill} className="px-5 py-3 border border-white/10 text-gray-200 text-sm tracking-wider bg-white/[0.02] hover:border-[#D4AF37]/50 transition-colors">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-[#D4AF37] tracking-widest uppercase mb-6">Languages</h3>
              <div className="space-y-3">
                <p className="text-gray-300 bg-white/[0.02] border border-white/10 p-4">Arabic <span className="text-[#D4AF37] float-right">Native</span></p>
                <p className="text-gray-300 bg-white/[0.02] border border-white/10 p-4">English <span className="text-[#D4AF37] float-right">C1 Conversational</span></p>
                <p className="text-gray-300 bg-white/[0.02] border border-white/10 p-4">Spanish <span className="text-[#D4AF37] float-right">B2 Conversational</span></p>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAGE 3: PROJECTS ================= */}
        {activeTab === 'projects' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl text-white font-serif mb-12 uppercase tracking-[0.2em] border-b border-white/10 pb-4">Engineering <span className="text-[#D4AF37]">Projects</span></h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-colors group">
                <h3 className="text-2xl text-white font-bold mb-3 uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">NewGiza (NH-08 & NH-04)</h3>
                <p className="text-sm text-[#D4AF37] mb-6 uppercase tracking-widest">Consultant: ECG / Degla CFM</p>
                <ul className="text-gray-400 font-light text-base space-y-4 list-disc ml-4">
                  <li>Approved Shop Drawings (Code B) for Plain & Reinforced Concrete Foundations.</li>
                  <li>Complex Reinforcement Details for Swimming Pools & Mechanical Rooms (Sections & Elevations).</li>
                  <li>Underground Masonry 3D Modeling and exact BOQ/QS extraction directly from Revit.</li>
                  <li>Punching Layouts, Drop Panel Typical Sections, and Shear Link Detailing.</li>
                </ul>
              </div>
              
              <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-colors group">
                <h3 className="text-2xl text-white font-bold mb-3 uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">BIM & 3D Coordination</h3>
                <p className="text-sm text-[#D4AF37] mb-6 uppercase tracking-widest">Advanced Modeling & Clash Detection</p>
                <ul className="text-gray-400 font-light text-base space-y-4 list-disc ml-4">
                  <li>Strict adherence to BIM protocols, ensuring no duplication in model elements for accurate Material Quantities.</li>
                  <li>Locating all MEP sleeves with actual dimensions to resolve interference with Structural elements.</li>
                  <li>Exporting and updating Navisworks files (NWC, NWF) to coordinate multi-disciplinary models.</li>
                  <li>Generation of automated schedules and PDF Sheets mandatory from Revit Models.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAGE 4: EDUCATION & TRAINING ================= */}
        {activeTab === 'education' && (
          <div className="animate-fade-in max-w-4xl">
            <h2 className="text-3xl text-white font-serif mb-12 uppercase tracking-[0.2em] border-b border-white/10 pb-4">Education & <span className="text-[#D4AF37]">Training</span></h2>
            
            <div className="bg-white/[0.02] border border-white/10 p-8 mb-8 border-l-4 border-l-[#D4AF37]">
              <h3 className="text-2xl text-white font-bold mb-2">Bachelor of Civil Engineering</h3>
              <p className="text-[#D4AF37] tracking-widest uppercase mb-4">Fayoum University | Graduated May 2020</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="text-gray-300"><strong>Overall Grade:</strong> Good</p>
                <p className="text-gray-300"><strong>Graduation Project:</strong> Foundation (Grade: Good)</p>
              </div>
            </div>

            <h3 className="text-xl text-white font-serif mb-6 uppercase tracking-[0.1em]">Certificates & Courses</h3>
            <div className="space-y-4">
              <div className="bg-white/[0.02] border border-white/10 p-6 hover:border-[#D4AF37]/50 transition-colors">
                <h4 className="text-lg text-white mb-2">Technical Office Engineer Diploma</h4>
                <p className="text-gray-400 font-light">Comprehensive training in Shop drawing, Quantity Survey, AutoCAD & Revit 3D Coordination, Planning, Document Control, and Quotations.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/10 p-6 hover:border-[#D4AF37]/50 transition-colors">
                <h4 className="text-lg text-white mb-2">Diploma in Concrete Design</h4>
                <p className="text-gray-400 font-light">Advanced structural design methodologies certified by ECG (Engineering Consultants Group).</p>
              </div>
              <div className="bg-white/[0.02] border border-white/10 p-6 hover:border-[#D4AF37]/50 transition-colors">
                <h4 className="text-lg text-white">ICDL (International Computer Driving License)</h4>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAGE 5: CONTACT (WITH CLICKABLE LINKS) ================= */}
        {activeTab === 'contact' && (
          <div className="animate-fade-in max-w-3xl mx-auto text-center mt-10">
            <h2 className="text-4xl text-white font-serif mb-6 uppercase tracking-[0.2em]">Get In <span className="text-[#D4AF37]">Touch</span></h2>
            <p className="text-gray-400 text-lg font-light mb-12">
              Available for Technical Office, BIM Coordination, and Structural Engineering opportunities. Let's build something exceptional.
            </p>

            <div className="flex flex-col gap-6">
              {/* رقم التليفون - Clickable */}
              <a href="tel:+966566853823" className="group flex items-center justify-center gap-4 bg-white/[0.02] border border-white/10 hover:border-[#D4AF37] p-6 transition-all duration-300">
                <span className="text-2xl">📞</span>
                <span className="text-xl text-gray-200 tracking-wider group-hover:text-[#D4AF37] transition-colors">+966 566853823</span>
              </a>

              {/* الإيميل ولينكد إن بجانب بعض - Clickable */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="mailto:mohamaedaymann1516@gmail.com" className="group flex flex-col items-center justify-center gap-3 bg-white/[0.02] border border-white/10 hover:border-[#D4AF37] p-6 transition-all duration-300">
                  <span className="text-3xl">✉️</span>
                  <span className="text-sm md:text-base text-gray-200 group-hover:text-[#D4AF37] transition-colors break-all">mohamaedaymann1516@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/mohamed-ayman-27966724a/" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-3 bg-white/[0.02] border border-white/10 hover:border-[#D4AF37] p-6 transition-all duration-300">
                  <span className="text-3xl">💼</span>
                  <span className="text-sm md:text-base text-gray-200 group-hover:text-[#D4AF37] transition-colors">LinkedIn Profile</span>
                </a>
              </div>

              {/* الموقع */}
              <div className="flex items-center justify-center gap-4 bg-white/[0.02] border border-white/10 p-6">
                <span className="text-2xl">📍</span>
                <span className="text-xl text-gray-200 tracking-wider">Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-gray-600 text-xs tracking-widest uppercase mt-auto">
        © 2026 Mohamed Ayman Kornay. Civil & Structural Engineer.
      </footer>
    </div>
  );
}