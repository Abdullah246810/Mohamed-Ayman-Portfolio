import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#09090b] text-gray-200 font-sans">
      {/* شريط التنقل (Navbar) */}
      <nav className="flex justify-between items-center py-5 px-8 md:px-16 border-b border-zinc-800/50 bg-[#09090b]/90 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="font-bold text-xl tracking-wider text-white">MOHAMED<span className="text-[#D4AF37]">.ENG</span></div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">About</a>
          <a href="#skills" className="hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">Skills</a>
          <a href="#projects" className="hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">Projects</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">Contact</a>
        </div>
        <button className="bg-[#D4AF37] hover:bg-[#b5952f] text-black px-6 py-2 rounded-sm text-sm font-bold transition-all uppercase tracking-widest">
          Hire Me
        </button>
      </nav>

      {/* القسم الرئيسي (Hero Section) */}
      <main className="px-8 md:px-16 pt-40 pb-12 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-medium border border-[#D4AF37]/30 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Available for New Projects
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white uppercase">
          Hi, I'm <span className="text-[#D4AF37]">MOHAMED AYMAN</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-light uppercase tracking-[0.2em]">
          Civil & Structural Engineer
        </h2>

        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-12 font-light">
          Civil Engineer specializing in building robust, high-performance structural designs. 
          Focused on concrete modeling, architectural integration, and precise site execution. 
          Skilled in modern engineering software and strict code compliance.
        </p>

        {/* معلومات التواصل */}
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-5 py-3 rounded-sm text-sm text-gray-300">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Faiyum / Cairo, Egypt
          </div>
          <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-5 py-3 rounded-sm text-sm text-gray-300">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            mohamed.ayman@ma-engineering.com
          </div>
          <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-5 py-3 rounded-sm text-sm text-gray-300">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +20 100 000 0000
          </div>
        </div>

        {/* الأزرار */}
        <div className="flex gap-4">
          <button className="bg-[#D4AF37] hover:bg-[#b5952f] text-black px-8 py-3 rounded-sm font-bold transition-all flex items-center gap-2 uppercase tracking-widest text-sm">
            View Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <button className="bg-transparent hover:bg-zinc-900 text-[#D4AF37] p-3 rounded-sm transition-all border border-[#D4AF37]/50 hover:border-[#D4AF37] flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </button>
        </div>
      </main>
    </div>
  );
}