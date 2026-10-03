import React from 'react';

export default function Portfolio() {
  const navClass = "text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 font-serif text-sm md:text-lg tracking-widest";

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-[#D4AF37] selection:text-black pb-20">
      
      {/* Navbar - تم زيادة الشفافية وتأثير الزجاج */}
      <nav className="fixed w-full top-0 z-50 border-b border-white/5 bg-[#050505]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <a href="#about" className="font-bold text-2xl tracking-wider text-white uppercase font-sans">
            MOHAMED<span className="text-[#D4AF37]">.ENG</span>
          </a>
          
          <div className="flex flex-wrap gap-x-5 gap-y-3 md:gap-10 w-full md:w-auto justify-center text-center">
            <a href="#about" className={navClass}>About</a>
            <a href="#skills" className={navClass}>Skills</a>
            <a href="#projects" className={navClass}>Projects</a>
            <a href="#education" className={navClass}>Education & Training</a>
            <a href="#contact" className={navClass}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content - ضبط المسافات الجانبية للموبايل */}
      <main className="pt-36 px-4 md:px-8 max-w-7xl mx-auto space-y-8 md:space-y-12">
        
        {/* ================= SECTION 1: ABOUT ================= */}
        {/* تقليل الـ padding في الموبايل لزيادة المساحة، وتقليل المسافة بين الصورة والاسم (gap-5) */}
        <section id="about" className="bg-[#111111] border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-16">
          
          {/* Profile Image */}
          <div className="flex-shrink-0 w-48 sm:w-56 lg:w-80 mx-auto lg:mx-0 lg:ml-auto order-1 lg:order-2">
            <div className="relative w-full p-2 border-2 border-[#D4AF37] rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-[#1a1a1a]">
              <img 
                src="/mohamed.png" 
                alt="Eng Mohamed Ayman" 
                className="w-full h-auto object-cover rounded-xl"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/400x500/131313/D4AF37?text=Eng+Mohamed";
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 w-full order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <h1 className="text-[24px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight whitespace-nowrap">
              Eng <span className="text-[#D4AF37]">MOHAMED AYMAN</span>
            </h1>
            
            <h2 className="text-sm sm:text-lg md:text-2xl text-gray-400 mb-5 font-medium">
              Senior Civil Engineer (Technical Office / BIM)
            </h2>
            
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-8 max-w-2xl">
              Civil Engineer specializing in Technical Office Engineering, Structural BIM, and precise Site Execution. 
              Focused on delivering high-quality projects, precise 3D modeling, and seamless interdisciplinary coordination. 
              Skilled in modern engineering software and strict code compliance.
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

            <div className="flex justify-center lg:justify-start gap-4 w-full lg:w-auto">
              <a href="#projects" className="bg-[#D4AF37] hover:bg-[#b5952f] text-black px-6 py-2.5 rounded-lg font-bold transition-all flex items-center justify-center gap-2 flex-1 lg:flex-none">
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
              
              <a href="https://www.linkedin.com/in/mohamed-ayman-27966724a/" target="_blank" rel="noreferrer" className="bg-[#1a1a1a] hover:bg-[#222] text-[#D4AF37] w-12 h-12 rounded-lg flex items-center justify-center border border-gray-800 hover:border-[#D4AF37]/50 transition-all flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: SKILLS ================= */}
        <section id="skills" className="bg-[#111111] border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl">
          <div className="flex items-center gap-3 mb-2">
            {/* أيقونة مبنى هندسي بدلاً من أيقونة البرمجة */}
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h2 className="text-2xl md:text-3xl text-white font-bold tracking-wide">Technical Skills</h2>
          </div>
          <p className="text-gray-400 mb-8 md:ml-9 text-sm md:text-base">Tools, competencies, and languages I specialize in.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:ml-9">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6">
              <h3 className="text-[#D4AF37] font-semibold mb-4 border-b border-gray-800 pb-2">Engineering Software</h3>
              {/* التوازي باستخدام grid من عمودين */}
              <div className="grid grid-cols-2 gap-2">
                {['Revit Structural', 'AutoCAD', 'AutoCAD Detailing', 'SAP 2000', 'Etabs', 'SAFE', 'Power BI', 'Cut Optimization'].map(skill => (
                  <span key={skill} className="px-2 py-1.5 border border-gray-700/50 rounded-md text-gray-300 text-xs text-center bg-[#111111] truncate">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6">
              <h3 className="text-[#D4AF37] font-semibold mb-4 border-b border-gray-800 pb-2">Professional Skills</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Problem Solving', 'Leadership', 'Analytical', 'Decisions', 'Detail Oriented', 'Team Player'].map(skill => (
                  <span key={skill} className="px-2 py-1.5 border border-gray-700/50 rounded-md text-gray-300 text-xs text-center bg-[#111111] truncate">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6">
              <h3 className="text-[#D4AF37] font-semibold mb-4 border-b border-gray-800 pb-2">Languages</h3>
              <div className="flex flex-col gap-2">
                <span className="px-3 py-2 border border-gray-700/50 rounded-md text-gray-300 text-xs bg-[#111111]">Arabic (Native)</span>
                <span className="px-3 py-2 border border-gray-700/50 rounded-md text-gray-300 text-xs bg-[#111111]">English (C1)</span>
                <span className="px-3 py-2 border border-gray-700/50 rounded-md text-gray-300 text-xs bg-[#111111]">Spanish (B2)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: PROJECTS ================= */}
        <section id="projects" className="bg-[#111111] border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-8 border-b border-white/10 pb-4">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* تصميم البطاقة الجديد بخط ذهبي جانبي وترتيب أفضل في الموبايل */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 relative overflow-hidden hover:border-[#D4AF37]/40 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
              <div className="flex flex-col gap-2 mb-4 pl-2">
                <h3 className="text-xl text-white font-bold">NewGiza (NH-08 & NH-04)</h3>
                <span className="text-[10px] sm:text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded w-fit border border-[#D4AF37]/20">ECG / Degla CFM</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4 pl-2">Preparation and coordination of complex structural shop drawings for a major residential and commercial development.</p>
              <ul className="text-gray-400 font-light text-xs sm:text-sm space-y-2 list-disc ml-6">
                <li>Approved Shop Drawings (Code B) for Foundations.</li>
                <li>Reinforcement Details for Swimming Pools & Mechanical Rooms.</li>
                <li>Underground Masonry 3D Modeling and exact BOQ/QS.</li>
              </ul>
            </div>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 relative overflow-hidden hover:border-[#D4AF37]/40 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
              <div className="flex flex-col gap-2 mb-4 pl-2">
                <h3 className="text-xl text-white font-bold">BIM & 3D Coordination</h3>
                <span className="text-[10px] sm:text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit border border-gray-600">Advanced Modeling</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4 pl-2">End-to-end structural modeling and interdisciplinary clash detection for various large-scale projects.</p>
              <ul className="text-gray-400 font-light text-xs sm:text-sm space-y-2 list-disc ml-6">
                <li>Strict adherence to BIM protocols and Level of Development.</li>
                <li>MEP sleeves location to resolve interference.</li>
                <li>Navisworks coordination and clash reports.</li>
              </ul>
            </div>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 relative overflow-hidden hover:border-[#D4AF37]/40 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
              <div className="flex flex-col gap-2 mb-4 pl-2">
                <h3 className="text-xl text-white font-bold">EL-HASSOUN HOTEL</h3>
                <span className="text-[10px] sm:text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded w-fit border border-[#D4AF37]/20">Makkah, KSA</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4 pl-2">30.5 Floors hospitality project executed under a Design-Build contract by Taysar Trading Company.</p>
              <ul className="text-gray-400 font-light text-xs sm:text-sm space-y-2 list-disc ml-6">
                <li>Coordination between Plumbing, Electrical, and Post Tension.</li>
                <li>Preparation of RFIs and solving site technical problems.</li>
                <li>As-built drawings preparation for final handover.</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 relative overflow-hidden hover:border-[#D4AF37]/40 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
              <div className="flex flex-col gap-2 mb-4 pl-2">
                <h3 className="text-xl text-white font-bold">PALM HILLS - PALM PLAY</h3>
                <span className="text-[10px] sm:text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit border border-gray-600">IND For Construction</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4 pl-2">Design-Build project in October, Egypt. Managed technical office and site coordination.</p>
              <ul className="text-gray-400 font-light text-xs sm:text-sm space-y-2 list-disc ml-6">
                <li>IFC drawings study and Concrete dimension Shop drawings.</li>
                <li>Quantity Survey (QS) works for Civil & Architectural items.</li>
                <li>On-site technical assistance to resolve engineering issues.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: EDUCATION & TRAINING ================= */}
        <section id="education" className="bg-[#111111] border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-8 border-b border-white/10 pb-4">Education & Training</h2>
          
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6 mb-8 border-l-4 border-l-[#D4AF37]">
            <h3 className="text-xl text-white font-bold mb-1">Bachelor of Civil Engineering</h3>
            <p className="text-[#D4AF37] text-xs sm:text-sm mb-4">Fayoum University | Graduated May 2020</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-12">
              <p className="text-gray-300 text-sm"><strong>Overall Grade:</strong> Good</p>
              <p className="text-gray-300 text-sm"><strong>Graduation Project:</strong> Foundation (Grade: Good)</p>
            </div>
          </div>

          <h3 className="text-lg md:text-xl text-white font-bold mb-5">Certificates & Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-colors">
              <h4 className="text-base text-white mb-2 font-semibold">Technical Office Engineer Diploma</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Shop drawing, Quantity Survey, AutoCAD & Revit 3D Coordination, Planning, and Quotations.</p>
            </div>
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-colors">
              <h4 className="text-base text-white mb-2 font-semibold">Diploma in Concrete Design</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Advanced structural design methodologies certified by ECG.</p>
            </div>
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-center">
              <h4 className="text-base text-white font-semibold">ICDL</h4>
              <p className="text-gray-400 text-xs sm:text-sm">International Computer Driving License.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: CONTACT ================= */}
        <section id="contact" className="bg-[#111111] border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-sm md:text-lg mb-10">
              Available for Technical Office, BIM Coordination, and Structural Engineering opportunities. Let's build something exceptional.
            </p>

            <div className="flex flex-col gap-4">
              <a href="tel:+966566853823" className="group flex items-center justify-center gap-3 bg-[#1a1a1a] border border-gray-800 hover:border-[#D4AF37] rounded-xl p-5 transition-all duration-300">
                <span className="text-xl">📞</span>
                <span className="text-base md:text-lg text-gray-200 group-hover:text-[#D4AF37] transition-colors">+966 566853823</span>
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