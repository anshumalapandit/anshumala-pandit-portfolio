
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Phone, Github, Linkedin, ExternalLink, Menu, X, Code, Database, Palette, Globe, Server, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const skills = [
    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'React.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    },
    {
      name: 'Bootstrap',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Figma',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
    {
      name: 'Canva',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
    }
  ];

  const projects = [
    {
      title: 'Shortest Path Finder',
      description: 'Visual tool showing Dijkstra & A* algorithm performance using Java AWT.',
      tech: ['Java', 'AWT', 'Algorithms'],
      github: '#'
    },
    {
      title: 'Simon Says Game',
      description: 'Fun memory game built with vanilla JavaScript for enhanced user interaction.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: '#'
    },
    {
      title: 'Truth Table Generator',
      description: 'Web application that creates truth tables from logical expressions.',
      tech: ['React.js', 'JavaScript', 'Logic'],
      github: '#'
    }
  ];

  const services = [
    'UI/UX Design (Figma, Canva)',
    'Frontend Development (React.js)',
    'Full Website Development',
    'Power BI Dashboard Creation',
    'Documentation & Professional PPT Design'
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
              Anshumala
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-slate-600 dark:text-slate-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-slate-600 dark:hover:text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-slate-600 dark:hover:text-slate-400 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-600 via-gray-700 to-stone-600 bg-clip-text text-transparent animate-fade-in">
                Anshumala Vijay Pandit
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                Aspiring Software Developer
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
                Building beautiful user experiences with code & creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-slate-500 text-slate-600 hover:bg-slate-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-slate-300 to-gray-400 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <div className="text-6xl">👩‍💻</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-gray-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a third-year Computer Engineering student at VIIT Pune with a passion for tech, design, and development. 
                I specialize in Java programming, React.js frontend development, and building intuitive dashboards.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                My goal is to work at a top-tier MERN-based company and make an impact with clean, user-centric design.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h3>
                <Card className="border-l-4 border-l-slate-400">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Computer Engineering</h4>
                    <p className="text-gray-600 dark:text-gray-400">Vishwakarma Institute of Information Technology, Pune</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2022 - Present</p>
                  </CardContent>
                </Card>
              </div>

              <Button className="bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white px-6 py-2 rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Initiative', 'Documentation', 'Design', 'Communication'].map((skill, index) => (
                  <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">{skill[0]}</span>
                      </div>
                      <p className="font-medium text-gray-900 dark:text-white">{skill}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-gray-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center group hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<div class="w-12 h-12 bg-gradient-to-br from-slate-400 to-gray-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">${skill.name[0]}</div>`;
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-gray-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-slate-400 text-slate-600 hover:bg-slate-500 hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
              Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-gray-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🚀</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-gray-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-slate-500" />
                  <span className="text-gray-700 dark:text-gray-300">anshumala.22310480@viit.ac.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-slate-500" />
                  <span className="text-gray-700 dark:text-gray-300">+91 8263886589</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-slate-500" />
                  <span className="text-gray-700 dark:text-gray-300">GitHub Profile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-slate-500" />
                  <span className="text-gray-700 dark:text-gray-300">LinkedIn Profile</span>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={5}
                      placeholder="Your Message"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-gray-800 dark:text-white"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white py-3 rounded-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Anshumala Vijay Pandit. Built with ❤️ using React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
