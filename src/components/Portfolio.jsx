import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* شريط التنقل (Navbar) */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md fixed w-full top-0 z-50">
        <div className="font-serif font-bold text-2xl tracking-widest text-white">
          M<span className="text-[#D4AF37]">A</span>
        </div>
        <div className="hidden md:flex gap-10 text-xs text-gray-400 tracking-[0.2em] uppercase">
          <a href="#about" className="hover:text-[#D4AF37] transition-all duration-300">About</a>
          <a href="#expertise" className="hover:text-[#D4AF37] transition-all duration-300">Expertise</a>
          <a href="#projects" className="hover:text-[#D4AF37] transition-all duration-300">Projects</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-all duration-300">Contact</a>
        </div>
        <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-6 py-2.5 text-xs font-bold transition-all duration-500 uppercase tracking-widest">
          Get in Touch
        </button>
      </nav>

      {/* القسم الرئيسي (Hero Section) */}
      <main className="relative px-8 md:px-16 pt-40 pb-20 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
        {/* لمسة معمارية خفيفة في الخلفية */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 opacity-50 pointer-events-none hidden md:block"></div>
        
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-light">
            Engineering Excellence
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight text-white uppercase">
            Mohamed <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f1d570] to-[#D4AF37]">
              Ayman
            </span>
          </h1>
          
          <h3 className="text-xl md:text-2xl text-gray-300 mb-10 font-light tracking-[0.2em] uppercase">
            Civil & Structural Engineer
          </h3>

          <div className="pl-6 border-l-2 border-[#D4AF37]/50 mb-12">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              Specializing in building robust, high-performance structural designs. 
              Focused on concrete modeling, architectural integration, and precise site execution. 
              Committed to delivering projects with uncompromising integrity.
            </p>
          </div>

          {/* معلومات التواصل (بتصميم حاد وأنيق) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl">
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-500 px-5 py-4">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="text-sm text-gray-300 tracking-wider">Faiyum / Cairo, Egypt</span>
            </div>
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-500 px-5 py-4">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-sm text-gray-300 tracking-wider">mohamed.ayman@ma-engineering.com</span>
            </div>
          </div>

          {/* زر عرض المشاريع */}
          <div className="flex flex-wrap gap-5">
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#c5a028] hover:from-[#c5a028] hover:to-[#b5952f] text-black px-8 py-4 font-bold transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-xs">
              Explore Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}