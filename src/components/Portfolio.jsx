import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Menu,
  X,
  Send,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const Github = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const personalData = {
    name: "ABDULLAH AYMAN",
    title: "Frontend Engineer (React / Next.js)",
    location: "Faiyum / Cairo, Egypt",
    phone: "+201080938454",
    email: "abdullahaymen706@gmail.com",
    github: "https://github.com/abdullahaymen706-debug",
    linkedin: "https://linkedin.com/in/abdullahaymen706",
    status: "Immediately Available",
    summary: "Frontend Engineer specializing in building responsive, high-performance web applications with React.js and Next.js. Focused on clean, reusable component architecture, REST API integration, and pixel-perfect UI implementation. Skilled in modern state management and form handling."
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Sass", "shadcn/ui"]
    },
    {
      title: "State & API Integration",
      skills: ["Zustand", "React Hook Form", "Zod", "Axios", "REST APIs"]
    },
    {
      title: "Tools & Ecosystem",
      skills: ["Git", "GitHub", "VS Code", "Vite", "Node.js", "Nest.js"]
    }
  ];

  const projects = [
    {
      title: "Medical Booking App",
      tags: ["React.js", "Tailwind CSS", "Zustand", "React Hook Form", "REST APIs"],
      description: "A responsive medical booking application allowing users to browse doctors, view details, book, and manage appointments seamlessly.",
      highlights: [
        "Implemented scalable state management using Zustand.",
        "Handled complex form validations with React Hook Form.",
        "Integrated REST APIs for dynamic data fetching and real-time updates."
      ],
      githubLink: "https://github.com/abdullahaymen706-debug/medical-booking-app",
      demoLink: "https://drive.google.com/file/d/1nNDW69_SuMLKVJyD_WsLoEipLU5VTcF6/view?usp=sharing"
    },
    {
      title: "Modern React Web Application",
      tags: ["Vite", "React Router", "Tailwind CSS", "shadcn/ui"],
      description: "A scalable single-page application built with modern frontend tooling for optimized routing and fluid user interaction.",
      highlights: [
        "Configured SPA architecture utilizing Vite and React Router.",
        "Designed clean, accessible UI components leveraging Tailwind CSS and shadcn/ui."
      ],
      githubLink: "https://github.com/abdullahaymen706-debug",
    },
    {
      title: "Web Development Agency Landing Page",
      tags: ["HTML5", "CSS3", "JavaScript"],
      description: "A high-converting, pixel-perfect responsive landing page designed for a digital web agency.",
      highlights: [
        "Ensured cross-browser compatibility and mobile-first layout.",
        "Optimized asset loading and core web vitals for maximum performance."
      ],
      githubLink: "https://github.com/abdullahaymen706-debug/web-agency"
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">

      {/* 1. NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-wider text-blue-400 hover:text-blue-300 transition-colors">
            ABDULLAH<span className="text-slate-100">.DEV</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Education & Training</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Education & Training</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {personalData.status}
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{personalData.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-400">
            {personalData.title}
          </h2>
        </div>

        <p className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
          {personalData.summary}
        </p>

        {/* Quick Contact & Social Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-slate-300">
          <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">
            <MapPin size={16} className="text-blue-400" />
            {personalData.location}
          </div>
          <a href={`mailto:${personalData.email}`} className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800 hover:border-slate-700 transition-colors">
            <Mail size={16} className="text-blue-400" />
            {personalData.email}
          </a>
          <a href={`tel:${personalData.phone}`} className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800 hover:border-slate-700 transition-colors">
            <Phone size={16} className="text-blue-400" />
            {personalData.phone}
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/25"
          >
            View Projects <ChevronRight size={18} />
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </section>

      {/* 3. TECHNICAL SKILLS SECTION */}
      <section id="skills" className="py-20 bg-slate-900/50 border-y border-slate-800/80 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
              <Code2 className="text-blue-400" /> Technical Skills
            </h2>
            <p className="text-slate-400 text-sm">Technologies and frameworks I specialize in to build applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
                <h3 className="text-base font-semibold text-blue-400 border-b border-slate-800 pb-2">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-slate-950 text-slate-300 rounded-md border border-slate-800 text-xs font-medium hover:border-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
            <Briefcase className="text-blue-400" /> Featured Projects
          </h2>
          <p className="text-slate-400 text-sm">A collection of web applications I have engineered with modern tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {proj.description}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-300">
                  {proj.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/40">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold pt-2">
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                  >
                    <Github size={14} /> Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EDUCATION & TRAINING */}
      <section id="experience" className="py-20 bg-slate-900/50 border-y border-slate-800/80 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
              <GraduationCap className="text-blue-400" /> Education & Training
            </h2>
            <p className="text-slate-400 text-sm">My academic background and specialized intensive training programs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ITI Training */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <Award size={16} /> Intensive Training
              </div>
              <h3 className="text-lg font-bold text-white">Information Technology Institute (ITI)</h3>
              <p className="text-sm font-medium text-slate-300">Front-End Development with React.js & Next.js</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Intensive 6-week training program covering modern front-end architecture, state management, component optimization, and hands-on project implementations.
              </p>
            </div>

            {/* University Education */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                <GraduationCap size={16} /> Bachelor's Degree
              </div>
              <h3 className="text-lg font-bold text-white">B.Sc. in Science</h3>
              <p className="text-sm font-medium text-slate-300">Faiyum University, Faculty of Science</p>
              <p className="text-xs text-slate-400">
                Faiyum, Egypt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          <p className="text-slate-400 text-sm">Have a project or job opportunity? Feel free to send me a message!</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
              <CheckCircle2 size={48} className="text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-sm text-slate-400">Thank you for reaching out. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Job Opportunity / Project Inquiry"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Abdullah Ayman. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}