import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" } 
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const getNavClass = (sectionId) => {
    const isActive = activeSection === sectionId;
    return `transition-all duration-300 font-serif text-[11px] sm:text-xs md:text-base tracking-wider md:tracking-widest whitespace-nowrap cursor-pointer ${
      isActive 
        ? "text-[#D4AF37] font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]" 
        : "text-gray-400 hover:text-gray-200"
    }`;
  };

  const sectionHeaderClass = "flex items-center justify-center md:justify-start gap-3 mb-8 border border-[#D4AF37]/30 bg-gradient-to-r from-[#0a0a0a] via-[#D4AF37]/15 to-[#0a0a0a] rounded-2xl px-6 py-3 w-fit mx-auto md:mx-0 shadow-[0_4px_20px_rgba(212,175,55,0.15)]";

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-[#D4AF37] selection:text-black pb-20">
      
      {/* Floating Pill Navbar */}
      <div className="fixed w-full top-4 md:top-6 z-50 flex justify-center px-2 pointer-events-none">
        <nav className="pointer-events-auto bg-[#111111]/90 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-3 md:px-8 md:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-nowrap justify-center items-center gap-3 sm:gap-5 md:gap-8 w-fit max-w-full">
          <a href="#about" className={getNavClass('about')}>About</a>
          <a href="#skills" className={getNavClass('skills')}>Skills</a>
          <a href="#projects" className={getNavClass('projects')}>Projects</a>
          <a href="#education" className={getNavClass('education')}>Education</a>
          <a href="#contact" className={getNavClass('contact')}>Contact</a>
        </nav>
      </div>

      {/* تقليل المسافة العلوية pt-20 بدلاً من المسافات الكبيرة السابقة */}
      <main className="pt-20 md:pt-28 px-4 md:px-8 max-w-7xl mx-auto space-y-8 md:space-y-12">
        
        {/* ================= SECTION 1: ABOUT ================= */}
        <section id="about" className="bg-[#111111] border border-white/5 rounded-[2rem] p-5 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-16">
          
          {/* Profile Image - أصغر ودائرية تماماً */}
          <div className="flex-shrink-0 w-36 sm:w-48 lg:w-64 mx-auto lg:mx-0 lg:ml-auto order-1 lg:order-2 mt-4 lg:mt-0">
            <div className="relative w-full aspect-square p-1.5 border-2 border-[#D4AF37] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-[#1a1a1a]">
              <img 
                src="/mohamed.png" 
                alt="Eng Mohamed Ayman" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/400x400/131313/D4AF37?text=Eng+Mohamed";
                }}
              />
            </div>
          </div>

          <div className="flex-1 w-full order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-2 lg:mt-0">
            
            <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight whitespace-nowrap">
              Eng <span className="text-[#D4AF37]">MOHAMED AYMAN</span>
            </h1>
            
            <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#1a1a1a]/50 border border-[#D4AF37]/40 rounded-xl px-5 py-3 mb-6 shadow-lg shadow-[#D4AF37]/5 w-fit mx-auto lg:mx-0">
              <h2 className="text-[#D4AF37] text-base md:text-xl font-bold tracking-wide leading-snug">
                <span className="block text-lg md:text-2xl mb-1">Senior Civil Engineer</span>
                <span className="block text-gray-300 font-medium text-xs md:text-sm">(Technical Office / BIM)</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-8 max-w-2xl px-2 lg:px-0">
              Civil Engineer specializing in Technical Office Engineering, Structural BIM, and precise Site Execution. 
              Focused on delivering high-quality projects, precise 3D modeling, and seamless interdisciplinary coordination. 
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-8">
              <div className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-lg px-3 py-2 text-xs md:text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Riyadh, KSA
              </div>
              <a href="mailto:mohamaedaymann1516@gmail.com" className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-lg px-3 py-2 text-xs md:text-sm text-gray-300 hover:border-[#D4AF37]/50 transition-colors">
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Me
              </a>
              <a href="tel:+966566853823" className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-lg px-3 py-2 text-xs md:text-sm text-gray-300 hover:border-[#D4AF37]/50 transition-colors">
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +966 566853823
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 w-full lg:w-auto px-4 lg:px-0">
              <a href="#projects" className="bg-[#D4AF37] hover:bg-[#b5952f] text-black px-6 py-2.5 rounded-lg font-bold transition-all flex items-center justify-center gap-2 flex-1 lg:flex-none text-sm md:text-base">
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
              
              <a href="https://www.linkedin.com/in/mohamed-ayman-27966724a/" target="_blank" rel="noreferrer" className="bg-[#1a1a1a] hover:bg-[#222] text-[#D4AF37] w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center border border-gray-800 hover:border-[#D4AF37]/50 transition-all flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: SKILLS ================= */}
        <section id="skills" className="bg-[#111111] border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl">
          <div className={sectionHeaderClass}>
            <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide">Technical Skills</h2>
          </div>
          <p className="text-gray-400 mb-8 text-center md:text-left text-sm md:text-base">Tools, competencies, and languages I specialize in.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6 hover:border-[#D4AF37]/30 transition-all">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
                <h3 className="text-[#D4AF37] font-semibold">Engineering Software</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Revit Structural', 'AutoCAD', 'AutoCAD Detailing', 'SAP 2000', 'Etabs', 'SAFE', 'Power BI', 'Cut Optimization'].map(skill => (
                  <span key={skill} className="px-2 py-1.5 border border-gray-700/50 rounded-md text-gray-300 text-xs text-center bg-[#111111] truncate">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6 hover:border-[#D4AF37]/30 transition-all">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                <h3 className="text-[#D4AF37] font-semibold">Professional Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Problem Solving', 'Leadership', 'Analytical', 'Decisions', 'Detail Oriented', 'Team Player'].map(skill => (
                  <span key={skill} className="px-2 py-1.5 border border-gray-700/50 rounded-md text-gray-300 text-xs text-center bg-[#111111] truncate">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6 hover:border-[#D4AF37]/30 transition-all">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                <h3 className="text-[#D4AF37] font-semibold">Languages</h3>
              </div>
              <div className="flex flex-col gap-2">
                <span className="px-3 py-2.5 border border-gray-700/50 rounded-md text-gray-300 text-xs bg-[#111111] flex justify-between"><span>Arabic</span> <span className="text-[#D4AF37]">Native</span></span>
                <span className="px-3 py-2.5 border border-gray-700/50 rounded-md text-gray-300 text-xs bg-[#111111] flex justify-between"><span>English</span> <span className="text-[#D4AF37]">C1</span></span>
                <span className="px-3 py-2.5 border border-gray-700/50 rounded-md text-gray-300 text-xs bg-[#111111] flex justify-between"><span>Spanish</span> <span className="text-[#D4AF37]">B2</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: PROJECTS ================= */}
        <section id="projects" className="bg-[#111111] border border-white/5 rounded-[2rem] p-5 md:p-12 lg:p-16 shadow-2xl">
          <div className={sectionHeaderClass}>
            <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            
            {/* Project 1 */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all flex flex-col group">
              <div className="h-40 sm:h-48 w-full overflow-hidden border-b border-gray-800">
                <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800" alt="NewGiza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 sm:p-5 relative flex-1 flex flex-col">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                <div className="flex flex-col gap-2 mb-3 pl-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                    <h3 className="text-lg sm:text-xl text-white font-bold leading-tight">NewGiza (NH-08 & NH-04)</h3>
                  </div>
                  <span className="text-[10px] sm:text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded w-fit ml-7 border border-[#D4AF37]/20">ECG / Degla CFM</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 pl-7 leading-relaxed">Preparation and coordination of complex structural shop drawings for a major residential and commercial development.</p>
                <ul className="text-gray-400 font-light text-xs sm:text-sm space-y-2 list-disc ml-11">
                  <li>Approved Shop Drawings (Code B).</li>
                  <li>Swimming Pools & Mech Rooms Details.</li>
                  <li>Masonry 3D Modeling and exact BOQ.</li>
                </ul>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all flex flex-col group">
              <div className="h-40 sm:h-48 w-full overflow-hidden border-b border-gray-800">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800" alt="BIM Coordination" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 sm:p-5 relative flex-1 flex flex-col">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                <div className="flex flex-col gap-2 mb-3 pl-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                    <h3 className="text-lg sm:text-xl text-white font-bold leading-tight">BIM & 3D Coordination</h3>
                  </div>
                  <span className="text-[10px] sm:text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit ml-7 border border-gray-600">Advanced Modeling</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 pl-7 leading-relaxed">End-to-end structural modeling and interdisciplinary clash detection for various large-scale projects.</p>
                <ul className="text-gray-400 font-light text-xs sm:text-sm space-y-2 list-disc ml-11">
                  <li>Strict adherence to BIM protocols.</li>
                  <li>MEP sleeves location accuracy.</li>
                  <li>Navisworks coordination & reports.</li>
                </ul>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all flex flex-col group">
              <div className="h-40 sm:h-48 w-full overflow-hidden border-b border-gray-800">
                <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800" alt="Hotel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 sm:p-5 relative flex-1 flex flex-col">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                <div className="flex flex-col gap-2 mb-3 pl-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                    <h3 className="text-lg sm:text-xl text-white font-bold leading-tight">EL-HASSOUN HOTEL</h3>
                  </div>
                  <span className="text-[10px] sm:text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded w-fit ml-7 border border-[#D4AF37]/20">Makkah, KSA</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 pl-7 leading-relaxed">30.5 Floors hospitality project executed under a Design-Build contract by Taysar Trading Company.</p>
                <ul className="text-gray-400 font-light text-xs sm:text-sm space-y-2 list-disc ml-11">
                  <li>Coordination (Plumbing, Electrical, PT).</li>
                  <li>Preparation of RFIs.</li>
                  <li>As-built drawings preparation.</li>
                </ul>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all flex flex-col group">
              <div className="h-40 sm:h-48 w-full overflow-hidden border-b border-gray-800">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800" alt="Palm Hills" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 sm:p-5 relative flex-1 flex flex-col">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                <div className="flex flex-col gap-2 mb-3 pl-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                    <h3 className="text-lg sm:text-xl text-white font-bold leading-tight">PALM HILLS - PALM PLAY</h3>
                  </div>
                  <span className="text-[10px] sm:text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit ml-7 border border-gray-600">IND For Construction</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 pl-7 leading-relaxed">Design-Build project in October, Egypt. Managed technical office and site coordination.</p>
                <ul className="text-gray-400 font-light text-xs sm:text-sm space-y-2 list-disc ml-11">
                  <li>IFC drawings & Shop drawings.</li>
                  <li>Quantity Survey (QS) works.</li>
                  <li>On-site technical assistance.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 4: EDUCATION & TRAINING ================= */}
        <section id="education" className="bg-[#111111] border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl">
          <div className={sectionHeaderClass}>
            <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v6" /></svg>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide">Education & Training</h2>
          </div>
          
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6 mb-8 border-l-4 border-l-[#D4AF37]">
            <h3 className="text-xl text-white font-bold mb-1">Bachelor of Civil Engineering</h3>
            <p className="text-[#D4AF37] text-xs sm:text-sm mb-4">Fayoum University | Graduated May 2020</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-12">
              <p className="text-gray-300 text-sm"><strong>Overall Grade:</strong> Good</p>
              <p className="text-gray-300 text-sm"><strong>Graduation Project:</strong> Foundation (Grade: Good)</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5 mt-10 justify-center md:justify-start">
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 className="text-lg md:text-xl text-white font-bold">Certificates & Courses</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-colors">
              <svg className="w-6 h-6 text-[#D4AF37] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <h4 className="text-base text-white mb-2 font-semibold">Technical Office Engineer Diploma</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Shop drawing, Quantity Survey, AutoCAD & Revit 3D Coordination, Planning, and Quotations.</p>
            </div>
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-colors">
              <svg className="w-6 h-6 text-[#D4AF37] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <h4 className="text-base text-white mb-2 font-semibold">Diploma in Concrete Design</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Advanced structural design methodologies certified by ECG.</p>
            </div>
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-center">
              <svg className="w-6 h-6 text-[#D4AF37] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <h4 className="text-base text-white font-semibold mb-1">ICDL</h4>
              <p className="text-gray-400 text-xs sm:text-sm">International Computer Driving License.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: CONTACT ================= */}
        <section id="contact" className="bg-[#111111] border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className={sectionHeaderClass}>
              <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide">Get In Touch</h2>
            </div>
            <p className="text-gray-400 text-sm md:text-lg mb-10 px-4">
              Available for Technical Office, BIM Coordination, and Structural Engineering opportunities.
            </p>

            <div className="flex flex-col gap-4">
              <a href="tel:+966566853823" className="group flex items-center justify-center gap-3 bg-[#1a1a1a] border border-gray-800 hover:border-[#D4AF37] rounded-xl p-5 transition-all duration-300">
                <span className="text-xl">📞</span>
                <span className="text-base md:text-lg text-gray-200 group-hover:text-[#D4AF37] transition-colors font-medium">+966 566853823</span>
              </a>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:mohamaedaymann1516@gmail.com" className="group flex flex-col items-center justify-center gap-2 bg-[#1a1a1a] border border-gray-800 hover:border-[#D4AF37] rounded-xl p-5 transition-all duration-300">
                  <span className="text-2xl">✉️</span>
                  <span className="text-xs sm:text-sm text-gray-200 group-hover:text-[#D4AF37] transition-colors break-all">mohamaedaymann1516@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/mohamed-ayman-27966724a/" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-2 bg-[#1a1a1a] border border-gray-800 hover:border-[#D4AF37] rounded-xl p-5 transition-all duration-300">
                  <span className="text-2xl">💼</span>
                  <span className="text-xs sm:text-sm text-gray-200 group-hover:text-[#D4AF37] transition-colors">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}