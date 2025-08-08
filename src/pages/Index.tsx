import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Phone, Github, Linkedin, ExternalLink, Menu, X, Code, Database, Palette, Globe, Server, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';


const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.toggle('dark', darkMode);
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('aqQ8b3qPpmn-BKfHW');
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message'),
      to_name: 'Anshumala', // Your name
    };

    console.log('Sending email with params:', templateParams);

    try {
      const result = await emailjs.send(
        'service_jysi93s',
        'template_ymkmkha',
        templateParams,
        'aqQ8b3qPpmn-BKfHW'
      );
      
      console.log('EmailJS result:', result);
      
      toast({
        title: "Message sent successfully! 🎉",
        description: "Thank you for reaching out! Your message has been received and our team will connect with you soon. We typically respond within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an issue sending your message. Please try again or contact me directly via email at anshumala.22310480@viit.ac.in",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [{
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  }, {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  }, {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  }, {
    name: 'React.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  }, {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  }, {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  }, {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
  }, {
    name: 'Bootstrap',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
  }, {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
  }];

  const projects = [{
    title: 'Expense Tracker',
  description: 'A full stack expense tracker application that helps users manage and monitor their daily spending. Features include user authentication, adding and categorizing expenses, real-time balance updates, and insightful analytics dashboards.',
  tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  image: '/images/expensetracker.png',
  github: 'https://github.com/anshumalapandit',
  // Live: 'https://your-expensetracker-live-link.com'
  }, {
    title: 'School Website',
    description: 'A modern and responsive website designed for schools to showcase their achievements, events, and important information. Features include event galleries, announcements, and easy contact options for parents and students.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/schoolwebsite.png',
    github: 'https://github.com/anshumalapandit',
    Live:'https://anshumalapandit.github.io/schoolwebsite/'
  }, {
    title: 'Club Connect',
    description: 'Web application that connects clubs altogether .',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS',' Node.js', 'Express.js', 'MongoDB'],
    image: '/images/club_connect.png',
    github: 'https://github.com/anshumalapandit'
  },{
     title: 'Simon Says Game',
    description: 'Fun memory game built with vanilla JavaScript for enhanced user interaction.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/html.png',
    github: 'https://github.com/anshumalapandit'
  },
  {
  title: 'Shortest Path Finder',
    description: 'Visual tool showing Dijkstra & A* algorithm performance using Java AWT.',
    tech: ['Java', 'AWT', 'Dikstra Algorithms & A* algorithms'],
    image: '/images/shortest_path.png',
    github: 'https://github.com/anshumalapandit'
}
];

  const services = ['UI/UX Design (Figma, Canva)', 'Frontend Development (React.js)', 'Full Website Development', 'Power BI Dashboard Creation', 'Documentation & Professional PPT Design'];

  return <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
    
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-[#e5f414] to-[#bd1e51] bg-clip-text text-transparent">
              Anshumala Pandit
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects','Achievements', 'Services', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === item.toLowerCase() ? 'text-[#bd1e51] dark:text-[#f1b814]' : 'text-gray-700 dark:text-gray-300 hover:text-[#bd1e51] dark:hover:text-[#f1b814]'}`}>
                  {item}
                </button>)}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects','Achievements', 'Services', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#bd1e51] dark:hover:text-[#f1b814] w-full text-left">
                  {item}
                </button>)}
            </div>
          </div>}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-[#490b3d] dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#490b3d] via-[#bd1e51] to-[#f1b814] bg-clip-text text-transparent dark:bg-none dark:text-yellow-400">
                Anshumala Vijay Pandit
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-white mb-4">
                Aspiring Software Developer
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 max-w-2xl">
                Building beautiful user experiences with code & creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-[#490b3d] to-[#bd1e51] hover:from-[#bd1e51] hover:to-[#f1b814] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  View My Work
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-[#bd1e51] text-[#bd1e51] hover:bg-[#bd1e51] hover:text-white px-8 py-3 rounded-full transition-all duration-300">
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#490b3d] to-[#bd1e51] p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img alt="Anshumala Vijay Pandit" className="w-full h-full object-cover rounded-full" onError={e => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="text-6xl">👩‍💻</div>';
                  }} src="/lovable-uploads/0060bb4e-86f7-47e3-960d-96965c199461.jpg" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                 I’m a Computer Engineering student with a solid foundation in Java and Data Structures & Algorithms, 
    along with hands-on expertise in the MERN stack. I enjoy solving challenging problems and transforming ideas into efficient, user-friendly applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                {/* My goal is to work at a top-tier MERN-based company and make an impact with clean, user-centric design. */}
                 I’m goal-oriented and highly adaptable, thriving in environments where learning and innovation never stop. 
    My aim is to build impactful products at leading tech companies, combining clean code, scalability, and a deep focus on user experience.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h3>
                <Card className="border-l-4 border-l-[#bd1e51]">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Computer Engineering</h4>
                    <p className="text-gray-600 dark:text-gray-400">Vishwakarma Institute of Information Technology, Pune</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2025 - Present</p>
                  </CardContent>
                </Card>
              </div>

              <Button className="bg-gradient-to-r from-[#490b3d] to-[#bd1e51] hover:from-[#bd1e51] hover:to-[#f1b814] text-white px-6 py-2 rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Problem-Solving', 'Goal Oriented', 'Team Person', 'Communication'].map((skill, index) => <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#490b3d] to-[#bd1e51] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">{skill[0]}</span>
                      </div>
                      <p className="font-medium text-gray-900 dark:text-white">{skill}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => <div key={index} className="flex flex-col items-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-[#bd1e51]">
                  <img src={skill.logo} alt={skill.name} className="w-12 h-12 object-contain" onError={e => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<div class="w-12 h-12 bg-gradient-to-br from-[#490b3d] to-[#bd1e51] rounded-lg flex items-center justify-center text-white font-bold text-lg">${skill.name[0]}</div>`;
              }} />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-[#bd1e51] dark:group-hover:text-[#f1b814] transition-colors duration-300">
                  {skill.name}
                </span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
        My Projects
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8"></div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="rounded-xl overflow-hidden shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl bg-white dark:bg-gray-900">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="bg-violet-100 text-violet-700 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:underline">
                <span>🔗</span> View Code
              </a>
              {project.Live && (
                <a href={project.Live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:underline">
                  <span>🌐</span> Live
                </a>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
        Achievements
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8"></div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Example item */}
       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4 text-purple-500">📚</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Amazon Future Engineer Scholar</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Selected as an Amazon Future Engineer Scholar for excellence in academics and commitment to technology.
        </p>
      </div>
      {/* Add more as needed */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4 text-purple-500">🎓</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Katalyst India Scholar</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Recognized as a Katalyst Scholar for leadership, academic performance, and personality development.
        </p>
      </div>
       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4 text-purple-500">🏆</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">J.P. Morgan Generation Hack Winner</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Winner of the prestigious Generation Tech Hackathon by J.P. Morgan, showcasing innovative tech solutions.
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
  <div className="text-4xl mb-4 text-purple-500">🌍</div>
  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Aspire Leaders Program</h3>
  <p className="text-gray-600 dark:text-gray-300">
    Selected for the Harvard-founded Aspire Leaders Program, a global platform for emerging youth leaders from underserved communities.
  </p>
</div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4 text-purple-500">🎯</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">FLY-Scholar Program</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Successfully completed the FLY-Scholar program by The Competitiveness Mindset Institute, USA, developing key non-cognitive skills.
        </p>
      </div>
       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4 text-purple-500">👥</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Mentorship Programs</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Selected as a mentee in prestigious programs: Navgurukul and FLY-Scholar program.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
              Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-[#f1b814]">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#490b3d] to-[#bd1e51] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🚀</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{service}</h3>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#bd1e51]" />
                  <span className="text-gray-700 dark:text-gray-300">anshumala.22310480@viit.ac.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#bd1e51]" />
                  <span className="text-gray-700 dark:text-gray-300">+91 8263886589</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-[#bd1e51]" />
                  {/* <span className="text-gray-700 dark:text-gray-300">GitHub Profile</span> */}
                   <a
    href="https://github.com/anshumalapandit"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 dark:text-gray-300 hover:underline"
  >
    GitHub Profile
  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-[#bd1e51]" />
                  {/* <span className="text-gray-700 dark:text-gray-300">LinkedIn Profile</span> */}
                   <a
    href="https://www.linkedin.com/in/anshumala-pandit-82285328a/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 dark:text-gray-300 hover:underline"
  >
    LinkedIn Profile
  </a>
                </div>
              </div>
            </div>
            
            <Card className="border-t-4 border-t-[#f1b814]">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd1e51] dark:bg-gray-800 dark:text-white" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your Email" 
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd1e51] dark:bg-gray-800 dark:text-white" 
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={5} 
                      name="message"
                      placeholder="Your Message" 
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd1e51] dark:bg-gray-800 dark:text-white"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#490b3d] to-[#bd1e51] hover:from-[#bd1e51] hover:to-[#f1b814] text-white py-3 rounded-lg disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#490b3d] dark:bg-black text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2025 Anshumala Vijay Pandit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};

export default Index;
