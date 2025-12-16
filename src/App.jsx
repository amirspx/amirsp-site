import React, { useState } from 'react';
import { 
  Menu, X, ArrowRight, Linkedin, Github, Twitter, 
  Globe, PenTool, TrendingUp, Users, ExternalLink, Mail, FileText 
} from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-slate-300 hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
  >
    {children}
  </a>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
  </h2>
);

const ExpertiseCard = ({ icon: Icon, title, description }) => (
  <div className="bg-primary-light p-6 rounded-lg border border-slate-700 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 group">
    <div className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
      <Icon size={40} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="bg-primary-light p-4 rounded-full text-slate-300 hover:text-white hover:bg-accent transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-accent"
  >
    <Icon size={24} />
  </a>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-primary font-sans text-slate-300 selection:bg-accent selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white tracking-tighter">
            AMIR<span className="text-accent">SPERRY</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#expertise">Expertise</NavLink>
            <NavLink href="#socials">Socials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-slate-800 absolute w-full px-6 py-4 flex flex-col space-y-4 shadow-xl">
            <NavLink href="#about" onClick={closeMenu}>About</NavLink>
            <NavLink href="#expertise" onClick={closeMenu}>Expertise</NavLink>
            <NavLink href="#socials" onClick={closeMenu}>Socials</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-accent tracking-widest uppercase text-sm font-semibold mb-4 animate-fade-in-down">
            London, England, United Kingdom
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Communications & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Digital Strategy Expert
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Driving digital engagement and freedom of information for impactful social causes.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-accent text-primary-light font-bold rounded hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
          >
            Let's Start a Conversation
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-primary-light/30">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle>About Amir Sperry</SectionTitle>
          <div className="bg-primary-light p-8 md:p-12 rounded-xl border border-slate-800 shadow-2xl">
            <p className="text-lg text-slate-300 leading-8 mb-8">
              I am a passionate Communications & Digital Strategy Expert with over <span className="text-white font-semibold">10 years of experience</span> creating and managing digital content. 
              My professional focus is centered on leveraging communication, editorial, and writing skills to promote <span className="text-accent">access to information and education</span> for people living under censorship.
              I believe in the power of digital outreach to support and empower social causes and movements, turning complex narratives into impactful global conversations.
            </p>
            <a 
              href="https://www.linkedin.com/in/amirsp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-white font-semibold transition-colors border-b border-accent hover:border-white pb-1"
            >
              View Full Professional History
              <ExternalLink className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle>My Expertise</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ExpertiseCard 
              icon={Globe}
              title="Digital Communications Strategy" 
              description="Directing communication efforts, expanding internet access and freedom in restricted regions, and optimizing digital campaigns with data analytics."
            />
            <ExpertiseCard 
              icon={PenTool}
              title="Content & Editorial Leadership" 
              description="Head of content and editor-in-chief roles, managing content teams, and developing editorial direction for digital platforms."
            />
            <ExpertiseCard 
              icon={TrendingUp}
              title="Digital Marketing & SEO" 
              description="Executing comprehensive analysis on content marketing, driving organic search traffic, and boosting online visibility via SEO strategies."
            />
            <ExpertiseCard 
              icon={Users}
              title="Outreach & Community Development" 
              description="Leveraging expertise in Community Outreach and Development to manage translation and localization and strengthen visibility for social causes."
            />
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="py-24 px-6 bg-primary-light/30">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionTitle>Connect Elsewhere</SectionTitle>
          <div className="flex justify-center flex-wrap gap-6 mt-8">
            <SocialLink href="https://www.linkedin.com/in/amirsp" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="https://amirsp.com" icon={Globe} label="Personal Website" />
            <SocialLink href="https://twitter.com/amirsp" icon={Twitter} label="Twitter / X" />
            <SocialLink href="https://github.com/amirsp" icon={Github} label="GitHub" />
            <SocialLink href="https://medium.com/@amirsp" icon={FileText} label="Medium" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 mb-12">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <SectionTitle>Let's Collaborate</SectionTitle>
            <p className="text-slate-400">
              Have a project in mind or want to discuss digital strategy? I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            className="space-y-6 bg-primary-light p-8 rounded-xl border border-slate-800 shadow-2xl"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <input name="bot-field" />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required
                className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required
                className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows="5" 
                required
                className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-accent text-primary-light font-bold py-4 rounded-lg hover:bg-white transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="mt-16 text-center space-y-4">
            <a href="mailto:contact@amirsp.com" className="block text-slate-400 hover:text-accent transition-colors">
              <Mail className="inline mr-2" size={18} />
              contact@amirsp.com
            </a>
            <a href="https://www.linkedin.com/in/amirsp" className="block text-slate-400 hover:text-accent transition-colors">
              <Linkedin className="inline mr-2" size={18} />
              www.linkedin.com/in/amirsp
            </a>
            <p className="text-slate-600 text-sm mt-8">
              &copy; {new Date().getFullYear()} Amir Sperry. All rights reserved.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
