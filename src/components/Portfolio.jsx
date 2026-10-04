import React, { useState, useEffect, useRef } from 'react';

// ================= CSS أنماط مخصصة =================
const CustomStyles = () => (
  <style>{`
    /* Custom Golden Scrollbar (Desktop only) */
    @media (min-width: 768px) {
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #050505;
      }
      ::-webkit-scrollbar-thumb {
        background: #D4AF37;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #b5952f;
      }
    }

    /* Floating Particles Animation */
    @keyframes floatParticle {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      20% { opacity: 0.8; }
      80% { opacity: 0.5; }
      100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
    }

    /* Preloader Loading Bar Animation */
    @keyframes loadingBar {
      0% { width: 0%; }
      100% { width: 100%; }
    }
  `}</style>
);

// ================= 1. مكون الأنيميشن (FadeUp) =================
const FadeUp = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[800ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ================= 2. مكون الـ 3D Hover =================
const TiltCard = ({ children, className = "" }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateY = ((mouseX / width) - 0.5) * 15;
    const rotateX = ((mouseY / height) - 0.5) * -15;

    setTilt({ x: rotateX, y: rotateY });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setTilt({ x: 0, y: 0 }); }}
      className={`active:scale-[0.98] transition-transform duration-200 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovering ? 1.02 : 1}, ${isHovering ? 1.02 : 1}, ${isHovering ? 1.02 : 1})`,
        transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

// ================= المكون الرئيسي (Portfolio) =================
export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);

  const sections = ['about', 'skills', 'projects', 'education', 'contact'];

  const particles = useRef(
    Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100 + 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `${Math.random() * 5}s`,
    }))
  ).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((section) => observer.observe(section));
    return () => sectionElements.forEach((section) => observer.unobserve(section));
  }, []);

  const getNavClass = (sectionId) => {
    const isActive = activeSection === sectionId;
    return `transition-all duration-300 font-serif whitespace-nowrap cursor-pointer flex flex-col items-center gap-1 ${isActive ? "text-[#D4AF37] font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.7)] scale-105" : "text-gray-400 hover:text-gray-200"
      }`;
  };

  const sectionHeaderClass = "flex items-center justify-center md:justify-start gap-3 mb-8 border border-[#D4AF37]/30 bg-gradient-to-r from-[#0a0a0a] via-[#D4AF37]/15 to-[#0a0a0a] rounded-2xl px-6 py-3 w-fit mx-auto md:mx-0 shadow-[0_4px_20px_rgba(212,175,55,0.15)]";

  return (
    <>
      <CustomStyles />

      {/* ================= PRELOADER ================= */}
      <div className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-[#D4AF37] text-4xl md:text-6xl font-serif font-black tracking-[0.2em] animate-pulse text-center leading-snug drop-shadow-lg uppercase">
            MOHAMED<br />AYMAN
          </h1>
          <div className="w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#D4AF37]" style={{ animation: 'loadingBar 2.5s ease-in-out forwards' }} />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-[#D4AF37] selection:text-black relative overflow-x-hidden">

        {/* ================= خلفية Parallax والجزيئات الذهبية ================= */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex flex-col justify-center">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#D4AF37] opacity-0"
              style={{
                left: particle.left, top: particle.top, width: particle.size, height: particle.size,
                animation: `floatParticle ${particle.duration} linear infinite`, animationDelay: particle.delay,
                boxShadow: '0 0 8px rgba(212,175,55,0.6)'
              }}
            />
          ))}
          <div className="absolute top-[15%] left-[-2%] text-[12vw] font-black text-white/[0.015] whitespace-nowrap select-none tracking-tighter" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
            CIVIL ENGINEER
          </div>
          <div className="absolute top-[60%] right-[-5%] text-[10vw] font-black text-[#D4AF37]/[0.015] whitespace-nowrap select-none tracking-tighter" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
            STRUCTURAL BIM
          </div>
        </div>

        {/* ================= Navbar العلوي (اللابتوب فقط) ================= */}
        {/* تم تصغير الـ padding الداخلي والعلوي ليصبح أنحف وأكثر أناقة (px-6 py-2.5 بدلاً من px-8 py-4) */}
        <div className="hidden md:flex fixed w-full top-5 z-50 justify-center px-2 pointer-events-none">
          <nav className="pointer-events-auto bg-[#111111]/85 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 shadow-2xl flex justify-center items-center gap-6 w-fit text-sm">
            <a href="#about" className={getNavClass('about')}>About</a>
            <a href="#skills" className={getNavClass('skills')}>Skills</a>
            <a href="#projects" className={getNavClass('projects')}>Projects</a>
            <a href="#education" className={getNavClass('education')}>Education</a>
            <a href="#contact" className={getNavClass('contact')}>Contact</a>
          </nav>
        </div>

        {/* ================= Bubble Nav (القائمة العمودية للموبايل) ================= */}
        {/* تم تغيير الارتفاع من 75vh ليكون حجم ثابت وأنيق (h-[320px]) وتصغير العرض لـ 44px */}
        <div className="md:hidden fixed left-2 sm:left-3 top-1/2 -translate-y-1/2 h-[320px] w-[44px] z-50 pointer-events-none">
          <nav className="pointer-events-auto h-full w-full bg-[#111111]/60 backdrop-blur-lg border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative flex flex-col items-center py-3 overflow-hidden">

            {/* Water Bubble (الفقاعة المنزلقة عمودياً) */}
            {/* معادلة الحركة مضبوطة 100% لتناسب الطول الجديد والـ Padding */}
            <div
              className="absolute inset-x-0 flex items-center justify-center pointer-events-none transition-transform duration-500"
              style={{
                height: 'calc((100% - 24px) / 5)', // 24px هو مجموع مسافات ال py-3
                transform: `translateY(${Math.max(0, sections.indexOf(activeSection)) * 100}%)`,
                top: '12px', // متطابق مع py-3
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-tr from-[#D4AF37]/40 to-transparent border border-[#D4AF37]/60 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.4)] backdrop-blur-md"></div>
            </div>

            {/* Icons */}
            <div className="w-full h-full flex flex-col justify-between items-center z-10 relative">
              {sections.map((section, idx) => {
                const icons = [
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2.28a2 2 0 01.948.684l.94 1.41a2 2 0 001.037.82l.965.321A2 2 0 0113 8h7a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" /></svg>,
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ];
                const labels = ['About', 'Skills', 'Projects', 'Edu', 'Contact'];
                const isActive = activeSection === section;
                return (
                  <a key={section} href={`#${section}`}
                    className={`flex-1 w-full flex flex-col justify-center items-center transition-all duration-300 ${isActive ? 'text-[#D4AF37] scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    {icons[idx]}
                    <span className={`text-[8px] mt-1 font-bold transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                      {labels[idx]}
                    </span>
                  </a>
                );
              })}
            </div>
          </nav>
        </div>

        {/* ================= زر الواتساب ================= */}
        <a href="https://wa.me/966566853823" target="_blank" rel="noreferrer" className="md:hidden fixed bottom-6 right-4 z-50 bg-gradient-to-tr from-[#D4AF37] to-[#fffde7] text-black p-3.5 rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-90 transition-transform">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        {/* ================= تعديل المسافات الجانبية للتوسيط ================= */}
        {/* تم تعديل Padding الموبايل إلى pl-[60px] pr-[16px] (لتفادي القائمة الجانبية وإعطاء المساحة القصوى للمحتوى يميناً) */}
        <main className="pt-8 md:pt-32 pl-[60px] pr-4 md:px-8 max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10 pb-12">

          {/* ================= SECTION 1: ABOUT ================= */}
          <section id="about" className="bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-5 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-16">

            <div className="flex-shrink-0 w-40 sm:w-48 lg:w-64 mx-auto lg:mx-0 lg:ml-auto order-1 lg:order-2 mt-4 lg:mt-0">
              <div className="relative w-full aspect-square p-1 md:p-1.5 border-2 border-[#D4AF37] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-[#1a1a1a]">
                <img
                  src="/mohamed.png"
                  alt="Eng Mohamed Ayman"
                  className="w-full h-full object-cover object-top rounded-full transition-transform"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x400/131313/D4AF37?text=Eng+Mohamed";
                  }}
                />
              </div>
            </div>

            <div className="flex-1 w-full order-2 lg:order-1 flex flex-col items-center lg:items-start mt-2 lg:mt-0 text-center lg:text-left">
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
                Civil Engineer specializing in Technical Office Engineering, Structural BIM, and precise Site Execution. Focused on delivering high-quality projects, precise 3D modeling, and seamless interdisciplinary coordination.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-8">
                <div className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-lg px-3 py-2 text-xs md:text-sm text-gray-300"><svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Riyadh, KSA</div>
                <a href="mailto:mohamaedaymann1516@gmail.com" className="active:scale-95 transition-transform flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-lg px-3 py-2 text-xs md:text-sm text-gray-300 hover:border-[#D4AF37]/50"><svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> Email Me</a>
              </div>
              <div className="flex justify-center lg:justify-start gap-3 w-full lg:w-auto px-4 lg:px-0">
                <a href="#projects" className="active:scale-95 bg-[#D4AF37] hover:bg-[#b5952f] text-black px-6 py-2.5 rounded-lg font-bold transition-all flex items-center justify-center gap-2 flex-1 lg:flex-none text-sm md:text-base">View Projects <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
                <a href="https://www.linkedin.com/in/mohamed-ayman-27966724a/" target="_blank" rel="noreferrer" className="active:scale-95 bg-[#1a1a1a] hover:bg-[#222] text-[#D4AF37] w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center border border-gray-800 hover:border-[#D4AF37]/50 transition-all flex-shrink-0"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
              </div>
            </div>
          </section>

          {/* ================= SECTION 2: SKILLS ================= */}
          <section id="skills" className="bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl">
            <FadeUp>
              <div className={sectionHeaderClass}>
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide">Technical Skills</h2>
              </div>
              <p className="text-gray-400 mb-8 text-center md:text-left text-sm md:text-base">Tools, competencies, and languages I specialize in.</p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <FadeUp delay={100}>
                <TiltCard className="h-full">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6 shadow-xl h-full">
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
                </TiltCard>
              </FadeUp>

              <FadeUp delay={200}>
                <TiltCard className="h-full">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6 shadow-xl h-full">
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
                </TiltCard>
              </FadeUp>

              <FadeUp delay={300}>
                <TiltCard className="h-full">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6 shadow-xl h-full">
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
                </TiltCard>
              </FadeUp>
            </div>
          </section>

          {/* ================= SECTION 3: PROJECTS ================= */}
          <section id="projects" className="bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-5 md:p-12 lg:p-16 shadow-2xl">
            <FadeUp>
              <div className={sectionHeaderClass}>
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide">Featured Projects</h2>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

              <FadeUp delay={100}>
                <TiltCard className="h-full">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col group h-full">
                    <div className="h-32 sm:h-40 w-full overflow-hidden border-b border-gray-800 bg-[#151515]">
                      <img src="/newgiza.jpg" alt="NewGiza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/131313/D4AF37?text=NewGiza+Project"; }} />
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
                    </div>
                  </div>
                </TiltCard>
              </FadeUp>

              <FadeUp delay={200}>
                <TiltCard className="h-full">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col group h-full">
                    <div className="h-32 sm:h-40 w-full overflow-hidden border-b border-gray-800 bg-[#151515]">
                      <img src="/bim-project.jpg" alt="BIM Coordination" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/131313/D4AF37?text=BIM+Coordination"; }} />
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
                    </div>
                  </div>
                </TiltCard>
              </FadeUp>

              <FadeUp delay={100}>
                <TiltCard className="h-full">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col group h-full">
                    <div className="h-32 sm:h-40 w-full overflow-hidden border-b border-gray-800 bg-[#151515]">
                      <img src="/hotel-project.jpg" alt="Hotel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/131313/D4AF37?text=EL-HASSOUN+HOTEL"; }} />
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
                    </div>
                  </div>
                </TiltCard>
              </FadeUp>

              <FadeUp delay={200}>
                <TiltCard className="h-full">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col group h-full">
                    <div className="h-32 sm:h-40 w-full overflow-hidden border-b border-gray-800 bg-[#151515]">
                      <img src="/palm-hills.jpg" alt="Palm Hills" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/131313/D4AF37?text=PALM+HILLS"; }} />
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
                    </div>
                  </div>
                </TiltCard>
              </FadeUp>

            </div>
          </section>

          {/* ================= SECTION 4: EDUCATION & TRAINING ================= */}
          <section id="education" className="bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl">
            <FadeUp>
              <div className={sectionHeaderClass}>
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v6" /></svg>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide">Education & Training</h2>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="active:scale-[0.98] transition-transform duration-200 bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 md:p-6 mb-8 border-l-4 border-l-[#D4AF37] shadow-xl hover:border-l-[#f3e5ab]">
                <h3 className="text-xl text-white font-bold mb-1">Bachelor of Civil Engineering</h3>
                <p className="text-[#D4AF37] text-xs sm:text-sm mb-4">Fayoum University | Graduated May 2020</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-12">
                  <p className="text-gray-300 text-sm"><strong>Overall Grade:</strong> Good</p>
                  <p className="text-gray-300 text-sm"><strong>Graduation Project:</strong> Foundation (Grade: Good)</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="flex items-center gap-3 mb-5 mt-10 justify-center md:justify-start">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="text-lg md:text-xl text-white font-bold">Certificates & Courses</h3>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FadeUp delay={300}>
                <TiltCard className="h-full">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 shadow-lg h-full">
                    <svg className="w-6 h-6 text-[#D4AF37] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <h4 className="text-base text-white mb-2 font-semibold">Technical Office Engineer Diploma</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Shop drawing, Quantity Survey, AutoCAD & Revit 3D Coordination, Planning, and Quotations.</p>
                  </div>
                </TiltCard>
              </FadeUp>
              <FadeUp delay={400}>
                <TiltCard className="h-full">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 shadow-lg h-full">
                    <svg className="w-6 h-6 text-[#D4AF37] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    <h4 className="text-base text-white mb-2 font-semibold">Diploma in Concrete Design</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Advanced structural design methodologies certified by ECG.</p>
                  </div>
                </TiltCard>
              </FadeUp>
              <FadeUp delay={500}>
                <TiltCard className="h-full">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 shadow-lg flex flex-col justify-center h-full">
                    <svg className="w-6 h-6 text-[#D4AF37] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <h4 className="text-base text-white font-semibold mb-1">ICDL</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">International Computer Driving License.</p>
                  </div>
                </TiltCard>
              </FadeUp>
            </div>
          </section>

          {/* ================= SECTION 5: CONTACT ================= */}
          <section id="contact" className="bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-2xl">
            <FadeUp>
              <div className="max-w-3xl mx-auto text-center">
                <div className={sectionHeaderClass}>
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide">Get In Touch</h2>
                </div>
                <p className="text-gray-400 text-sm md:text-lg mb-10 px-4">
                  Available for Technical Office, BIM Coordination, and Structural Engineering opportunities.
                </p>

                <div className="flex flex-col gap-4">
                  <a href="tel:+966566853823" className="active:scale-95 transition-transform duration-200 group flex items-center justify-center gap-3 bg-[#1a1a1a] border border-gray-800 hover:border-[#D4AF37] rounded-xl p-5 shadow-lg hover:shadow-[#D4AF37]/10">
                    <span className="text-xl">📞</span>
                    <span className="text-base md:text-lg text-gray-200 group-hover:text-[#D4AF37] font-medium">+966 566853823</span>
                  </a>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="mailto:mohamaedaymann1516@gmail.com" className="active:scale-95 transition-transform duration-200 group flex flex-col items-center justify-center gap-2 bg-[#1a1a1a] border border-gray-800 hover:border-[#D4AF37] rounded-xl p-5 shadow-lg hover:shadow-[#D4AF37]/10">
                      <span className="text-2xl">✉️</span>
                      <span className="text-xs sm:text-sm text-gray-200 group-hover:text-[#D4AF37] break-all">mohamaedaymann1516@gmail.com</span>
                    </a>

                    <a href="https://www.linkedin.com/in/mohamed-ayman-27966724a/" target="_blank" rel="noreferrer" className="active:scale-95 transition-transform duration-200 group flex flex-col items-center justify-center gap-2 bg-[#1a1a1a] border border-gray-800 hover:border-[#D4AF37] rounded-xl p-5 shadow-lg hover:shadow-[#D4AF37]/10">
                      <span className="text-2xl">💼</span>
                      <span className="text-xs sm:text-sm text-gray-200 group-hover:text-[#D4AF37]">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          </section>

        </main>
      </div>
    </>
  );
}