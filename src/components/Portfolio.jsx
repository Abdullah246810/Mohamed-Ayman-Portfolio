import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#09090b] text-gray-200">
      {/* الواجهة الرئيسية */}
      <section className="relative h-screen flex flex-col items-center justify-center border-b border-zinc-800/50">
        <div className="z-10 text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-[#D4AF37] tracking-widest uppercase">
            Mohamed Ayman
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-light tracking-[0.3em] uppercase mt-4">
            Civil & Structural Engineer
          </p>
          <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#projects" className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 tracking-widest uppercase text-sm">
              Explore Projects
            </a>
            <a href="#contact" className="px-8 py-3 bg-white/5 text-white hover:bg-white/10 transition-all duration-500 tracking-widest uppercase text-sm">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* قسم النبذة والخبرات */}
      <section id="about" className="py-24 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl text-[#D4AF37] font-serif mb-8 tracking-widest uppercase">Philosophy & Expertise</h2>
        <p className="text-gray-400 leading-relaxed text-lg font-light max-w-3xl mx-auto">
          Specializing in high-end structural design and precise site execution. 
          Committed to delivering engineering projects that balance architectural vision with uncompromising structural integrity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="border border-zinc-800/50 p-10 hover:border-[#D4AF37]/30 transition-colors duration-500">
            <h3 className="text-4xl text-[#D4AF37] mb-3 font-serif">8+</h3>
            <p className="text-xs tracking-widest uppercase text-gray-500">Years Experience</p>
          </div>
          <div className="border border-zinc-800/50 p-10 hover:border-[#D4AF37]/30 transition-colors duration-500">
            <h3 className="text-4xl text-[#D4AF37] mb-3 font-serif">45</h3>
            <p className="text-xs tracking-widest uppercase text-gray-500">Completed Projects</p>
          </div>
          <div className="border border-zinc-800/50 p-10 hover:border-[#D4AF37]/30 transition-colors duration-500">
            <h3 className="text-4xl text-[#D4AF37] mb-3 font-serif">100%</h3>
            <p className="text-xs tracking-widest uppercase text-gray-500">Code Compliance</p>
          </div>
        </div>
      </section>

      {/* قسم المشاريع */}
      <section id="projects" className="py-24 bg-[#0c0c0e] px-8 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl text-[#D4AF37] font-serif mb-16 tracking-widest text-center uppercase">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* مشروع 1 */}
            <div className="group relative h-96 bg-zinc-900 overflow-hidden cursor-pointer border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl text-[#D4AF37] font-serif mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Commercial Complex</h3>
                <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 tracking-widest text-xs uppercase">Structural Design & Site Supervision</p>
              </div>
            </div>
            {/* مشروع 2 */}
            <div className="group relative h-96 bg-zinc-900 overflow-hidden cursor-pointer border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl text-[#D4AF37] font-serif mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Residential Tower</h3>
                <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 tracking-widest text-xs uppercase">Concrete Modeling & Execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم التواصل */}
      <section id="contact" className="py-24 px-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl text-[#D4AF37] font-serif mb-12 tracking-widest uppercase">Connect</h2>
        <div className="space-y-6 text-gray-400 font-light tracking-wide">
          <p className="hover:text-white transition-colors cursor-pointer">mohamed.ayman@ma-engineering.com</p>
          <p className="hover:text-white transition-colors cursor-pointer">+20 123 456 7890</p>
          <p>Faiyum, Egypt</p>
        </div>
      </section>
    </div>
  );
}