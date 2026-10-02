import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#070913] text-white font-sans">
      {/* شريط التنقل (Navbar) */}
      <nav className="flex justify-between items-center py-5 px-8 md:px-16 border-b border-gray-800/50 bg-[#070913]/80 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="font-bold text-xl tracking-wider">MOHAMED<span className="text-blue-500">.ENG</span></div>
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#education" className="hover:text-blue-400 transition-colors">Education & Training</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
          Hire Me
        </button>
      </nav>

      {/* القسم الرئيسي (Hero Section) */}
      <main className="px-8 md:px-16 pt-32 pb-12 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for New Projects
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Hi, I'm <span className="text-blue-500">MOHAMED AYMAN</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6 font-light">
          Civil & Structural Engineer
        </h2>

        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-10">
          Civil Engineer specializing in building robust, high-performance structural designs. 
          Focused on concrete modeling, architectural integration, and precise site execution. 
          Skilled in modern engineering software and strict code compliance.
        </p>

        {/* معلومات التواصل (Badges) */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 bg-gray-800/40 border border-gray-700/50 px-4 py-2.5 rounded-lg text-sm text-gray-300">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Faiyum / Cairo, Egypt
          </div>
          <div className="flex items-center gap-2 bg-gray-800/40 border border-gray-700/50 px-4 py-2.5 rounded-lg text-sm text-gray-300">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            mohamed.ayman@ma-engineering.com
          </div>
          <div className="flex items-center gap-2 bg-gray-800/40 border border-gray-700/50 px-4 py-2.5 rounded-lg text-sm text-gray-300">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +20 100 000 0000
          </div>
        </div>

        {/* الأزرار */}
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2">
            View Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <button className="bg-gray-800/60 hover:bg-gray-700 text-white p-3 rounded-lg transition-all border border-gray-700 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </button>
        </div>
      </main>
    </div>
  );
}