import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Phone, Github, ExternalLink, Menu, X, Database, Palette, Globe, Server, Smartphone, Zap, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { motion, easeOut } from 'framer-motion';


const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('All');
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = 'Anshumala Pandit';
  const { toast } = useToast();

  // Typing animation effect for name
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex));
        if (currentIndex === fullName.length) {
          setIsTypingComplete(true);
        }
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120); // Typing speed - 80ms per character
    return () => clearInterval(typingInterval);
  }, []); // Only run once on mount

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
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

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
  },{
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  }, {
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  }, {  
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  }, {  
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  }, {
    name: 'Post Man',
    logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
  }, {
    name:'Spring Boot',
    logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
  },
  {
    name:'NLP',
    logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name:'Render',
    logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg'
  },{
    name:'Vercel', 
    logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg'
  }

];

  const projects = [{
    title: 'Expense Tracker',
    category: 'Web Apps',
    description: 'A full stack expense tracker application that helps users manage and monitor their daily spending. Features include user authentication, adding and categorizing expenses, real-time balance updates, and insightful analytics dashboards.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS','Render','Vercel'],
    image: '/images/expensetracker.png',
    github: 'https://github.com/anshumalapandit/Expense-Tracker-Project',
    Live:'https://expense-tracker-project-chi-two.vercel.app'
  }, {
    title: 'School Website',
    category: 'Web Apps',
    description: 'A modern and responsive website designed for schools to showcase their achievements, events, and important information. Features include event galleries, announcements, and easy contact options for parents and students.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/schoolwebsite.png',
    github: 'https://github.com/anshumalapandit/schoolwebsite',
    Live:'https://anshumalapandit.github.io/schoolwebsite/'
  },{
    title: 'Simon Says Game',
    category: 'Web Apps',
    description: 'Fun memory game built with vanilla JavaScript for enhanced user interaction.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/html.png',
    github: 'https://github.com/anshumalapandit/SimonSaysGame',
    Live:'https://anshumalapandit.github.io/SimonSaysGame/'
  },
{
  title: 'Sahayak - A Helping Hand',
  category: 'Web Apps',
    description: 'A web application that connects volunteers with physically abled people in need of assistance, facilitating community support,aid,exam,and for basic needs.',
    tech:['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS','Dialogflow'],
    image: '/images/sahayak3.png',
    github: 'https://github.com/anshumalapandit/Sahayak-Helping-Hand-project'
},
{
  title: 'AI-Powered Nutrition and Fitness Recommendation System',
  category: 'AIML',
    // description: 'A flask-based web application that provides personalized nutrition and fitness recommendations using Gemini APi to help users achieve their health goals effectively.',
    description: 'A Flask web app using Grok AI give personalized nutrition and fitness advice. Users enter details like age, height, weight, activity, allergies, and location. ChefAi then suggests top restaurants, meal plans, and workouts tailored to their goals.',
    tech: ['Python (Flask)', 'HTML5', 'Tailwind CSS', 'Bootstrap', 'LLaMA 3.3 (Meta)','Grok API','Render'],
    image: '/images/fitness.jpg',
    github: 'https://github.com/anshumalapandit/Chef-AI-Your-Smart-Food-Fitness-Recommender-Project',
    Live: 'https://chef-ai-your-smart-food-fitness.onrender.com/'
},
 {
  title: 'Shortest Path Finder',
  category: 'Advanced Java',
    description: 'A Java AWT-based visualization tool that demonstrates Dijkstra and A* algorithms. Users can set custom start and end nodes to see how each algorithm explores the graph and finds the optimal path.',
    tech: ['Java', 'AWT', 'Dikstra Algorithms',' A* algorithms'],
    image: '/images/shortest_path.png',
    github: 'https://github.com/anshumalapandit/Shortest-Path-Finder-Visualization'
},
{
  title: "Journal Junction",
  category: "Advanced Java",
  description:
  "A backend-focused journaling web application that allows users to write and manage daily reflections. The project demonstrates structured application design, data handling, and real-world cloud deployment.",
  tech: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Hibernate",
    "H2 Database",
    "Thymeleaf",
    "Maven"
  ],
  image: "/images/junction.png",
  github: "https://github.com/anshumalapandit/spring-boot-project",
  Live: "https://spring-boot-project-v1nn.onrender.com/"
},
  {
  title: "Java Calculator Web Application",
  category: "Advanced Java",
  description:
    "A simple Java web application using Servlets and JSP that performs arithmetic operations and shows a random programming joke with each result.",
  tech: [
    "Java",
    "Jakarta Servlets",
    "JSP (Expression Language)",
    "HTML5",
    "CSS3",
    "Apache Tomcat"
  ],
  image: "/images/calculator.png",
  github: "https://github.com/anshumalapandit/java-servlet-jsp-project"
},{
  title: "Task Trek",
  category: "Web Apps",
  description:
  "A simple and intuitive task management web application that lets users create tasks and organize them into To Do, Doing, and Done stages through an interactive interface.",
  tech: [
    "React",
    "JavaScript",
    "Vercel"
  ],
  image: "/images/tasktrek.png",
  github: "https://github.com/anshumalapandit/TaskTrek", // update if repo link is different
  Live: "https://task-trek-three.vercel.app/"
}
];

  const services = ['UI/UX Design (Figma, Canva)', 'Frontend Development (React.js)', 'Website Fixes & UI Improvements','Data Preprocessing & Cleaning (Certified)', 'Power BI Dashboard Creation', 'Documentation & Professional PPT Design'];

  return <div className={`min-h-screen transition-colors duration-300 w-full overflow-x-hidden ${darkMode ? 'dark' : ''}`}>
    
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 border-b border-gray-200 dark:border-gray-700 shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 py-2 sm:py-3">
            <div className="font-bold text-base sm:text-lg md:text-xl bg-gradient-to-r from-[#e5f414] to-[#bd1e51] bg-clip-text text-transparent truncate flex-shrink-0">
              Anshumala
            </div>
            
            <div className="hidden md:flex space-x-4 lg:space-x-6">
              {['Home', 'About', 'Skills', 'Projects','Achievements', 'Services', 'Contact'].map(item => <motion.button key={item} onClick={() => scrollToSection(item.toLowerCase())} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm lg:text-base font-medium transition-colors duration-200 whitespace-nowrap ${activeSection === item.toLowerCase() ? 'text-[#bd1e51] dark:text-[#f1b814] border-b-2 border-[#bd1e51] dark:border-[#f1b814]' : 'text-gray-700 dark:text-gray-300 hover:text-[#bd1e51] dark:hover:text-[#f1b814]'}`}>
                  {item}
                </motion.button>)}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-shrink-0">
              <motion.a
                href="https://github.com/anshumalapandit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="p-1.5 sm:p-2 h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 flex items-center justify-center rounded-md text-gray-700 dark:text-gray-300 hover:text-[#bd1e51] dark:hover:text-[#f1b814] transition-colors duration-200 flex-shrink-0"
                title="GitHub"
              >
                <Github className="h-4 sm:h-5 w-4 sm:w-5" />
              </motion.a>
              
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="p-1.5 sm:p-2 h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 flex-shrink-0">
                {darkMode ? <Sun className="h-4 sm:h-5 w-4 sm:w-5" /> : <Moon className="h-4 sm:h-5 w-4 sm:w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden p-1.5 sm:p-2 h-8 sm:h-9 w-8 sm:w-9 flex-shrink-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-4 sm:h-5 w-4 sm:w-5" /> : <Menu className="h-4 sm:h-5 w-4 sm:w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects','Achievements', 'Services', 'Contact'].map((item, index) => <motion.button key={item} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} onClick={() => scrollToSection(item.toLowerCase())} className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#bd1e51] dark:hover:text-[#f1b814] w-full text-left rounded-md transition-colors duration-200">
                  {item}
                </motion.button>)}
            </div>
          </motion.div>}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 sm:pt-20 md:pt-32 min-h-screen flex items-center bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-[#2a1a3d] dark:to-gray-900 w-full">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center" variants={containerVariants} initial="hidden" animate="visible">
            
            {/* LEFT COLUMN - Identity */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left w-full">
              {/* Name with Typing Animation */}
              <motion.div variants={itemVariants}>
                <style>{`
                  @keyframes blink {
                    0%, 49% { opacity: 1; }
                    50%, 100% { opacity: 0; }
                  }
                  .typing-cursor {
                    display: inline-block;
                    width: 2px;
                    height: 1em;
                    margin-left: 2px;
                    background: currentColor;
                    animation: blink 1s infinite;
                  }
                  .typing-cursor.complete {
                    animation: none;
                    opacity: 0.3;
                  }
                `}</style>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xs sm:text-sm md:text-lg lg:text-2xl font-semibold uppercase tracking-wider bg-gradient-to-r from-[#bd1e51] to-[#f1b814] bg-clip-text text-transparent dark:bg-none dark:text-white">
                    I AM
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#490b3d] via-[#bd1e51] to-[#f1b814] bg-clip-text text-transparent dark:bg-none dark:text-white mb-2 leading-tight min-h-[50px] sm:min-h-[60px] md:min-h-[80px]">
                    {displayedText}
                    <span className={`typing-cursor ${isTypingComplete ? 'complete' : ''} bg-gradient-to-r from-[#490b3d] via-[#bd1e51] to-[#f1b814]`}></span>
                  </h1>
                </div>
                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] rounded-full mx-auto md:mx-0"></div>
              </motion.div>
              
              {/* Role + Subheading */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#bd1e51] to-[#f1b814] bg-clip-text text-transparent dark:bg-none dark:text-white">
                  Java Enthusiast with MERN Stack Experience
                </h2>
              
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 font-medium space-y-1.5 sm:space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#bd1e51] dark:text-[#f1b814] font-bold mt-0.5">✓</span>
                    <p>Full-Stack MERN Developer with hands-on project experience</p>
                  </div>
                  <div className="hidden sm:flex items-start gap-2">
                    <span className="text-[#bd1e51] dark:text-[#f1b814] font-bold mt-0.5">✓</span>
                    <p>Strong foundation in Java, Data Structures & Object-Oriented Programming</p>
                  </div>
                  <div className="hidden sm:flex items-start gap-2">
                    <span className="text-[#bd1e51] dark:text-[#f1b814] font-bold mt-0.5">✓</span>
                    <p>Experience working on real-world applications and hackathons</p>
                  </div>
                  <div className="sm:hidden flex items-start gap-2">
                    <span className="text-[#bd1e51] dark:text-[#f1b814] font-bold mt-0.5">✓</span>
                    <p>Full-Stack MERN Developer with real-world project experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Core Skills Badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
                {[
                  { label: 'Java', icon: '☕' },
                  { label: 'DSA', icon: '🔗' },
                  { label: 'OOP', icon: '🏗️' },
                  { label: 'Hackathons', icon: '🏆' },
                ].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-xs md:text-sm font-semibold border border-[#490b3d] dark:border-[#f1b814] hover:bg-gradient-to-r hover:from-[#bd1e51] hover:to-[#f1b814] hover:text-white dark:hover:from-[#f1b814] dark:hover:to-[#bd1e51] dark:hover:text-gray-900 transition-all duration-300 whitespace-nowrap"
                  >
                    <span className="mr-1">{skill.icon}</span>{skill.label}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full pt-2 sm:pt-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }} className="flex-1">
                  <Button onClick={() => scrollToSection('projects')} className="w-full bg-gradient-to-r from-[#bd1e51] to-[#f1b814] hover:from-[#f1b814] hover:to-[#bd1e51] text-white px-6 sm:px-4 md:px-8 py-2.5 sm:py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-sm md:text-base">
                    View My Work
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }} className="flex-1">
                  <Button onClick={() => scrollToSection('contact')} className="w-full border-2 border-[#bd1e51] text-[#bd1e51] dark:border-[#f1b814] dark:text-[#f1b814] hover:bg-[#bd1e51] hover:text-white dark:hover:bg-[#f1b814] dark:hover:text-gray-900 px-6 sm:px-4 md:px-8 py-2.5 sm:py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-sm md:text-base">
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN - Profile Image + Coding Profiles */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full">
              {/* Profile Image */}
              <div className="relative flex justify-center w-full">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  className="w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 rounded-full bg-gradient-to-br from-[#bd1e51] to-[#f1b814] p-1 sm:p-1.5 shadow-2xl flex-shrink-0"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                    <img alt="Anshumala Pandit" className="w-full h-full object-cover rounded-full" onError={e => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="text-6xl">👩‍💻</div>';
                    }} src="/lovable-uploads/0060bb4e-86f7-47e3-960d-96965c199461.jpg" />
                  </div>
                </motion.div>
              </div>

              {/* Coding Profiles Hook */}
              <motion.div variants={itemVariants} className="text-center space-y-2 sm:space-y-3 w-full">
                <p className="text-xs sm:text-xs md:text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">
                  CONNECT & EXPLORE MY CODE
                </p>
                
                {/* Social Profile Icons */}
                <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center items-center">
                  <motion.a
                    href="https://www.linkedin.com/in/anshumalapandit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    title="LinkedIn"
                    className="hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
                  >
                    <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10" />
                  </motion.a>
                  <motion.a
                    href="https://www.geeksforgeeks.org/profile/anshumala18?tab=activity"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    title="GeeksforGeeks"
                    className="hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
                  >
                    <img src="https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=2F8D46" alt="GeeksforGeeks" className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10" />
                  </motion.a>
                  <motion.a
                    href="https://leetcode.com/u/Anshumalapandit18/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    title="LeetCode"
                    className="hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
                  >
                    <img src="https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=F9A825" alt="LeetCode" className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 w-full">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
              About Me
            </h2>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}></motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                 I am a Computer Engineering student with a solid foundation in Java and Data Structures & Algorithms, 
    along with hands-on expertise in the MERN stack. I enjoy solving challenging problems and transforming ideas into efficient, user-friendly applications.
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                {/* My goal is to work at a top-tier MERN-based company and make an impact with clean, user-centric design. */}
                 I am goal-oriented and highly adaptable, thriving in environments where learning and innovation never stop. 
    My aim is to build impactful products at leading tech companies, combining clean code, scalability, and a deep focus on user experience.
              </p>
              
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Education</h3>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="border-l-4 border-l-[#bd1e51]">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Computer Engineering</h4>
                      <p className="text-gray-600 dark:text-gray-400">Vishwakarma Institute of Information Technology, Pune</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">2025 - Present</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-[#490b3d] to-[#bd1e51] hover:from-[#bd1e51] hover:to-[#f1b814] text-white px-6 py-2 rounded-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {['Problem-Solving', 'Goal Oriented', 'Team Person', 'Communication'].map((skill, index) => <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}><Card className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#490b3d] to-[#bd1e51] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">{skill[0]}</span>
                      </div>
                      <p className="font-medium text-gray-900 dark:text-white">{skill}</p>
                    </CardContent>
                  </Card></motion.div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
              Skills & Technologies
            </h2>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}></motion.div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => <motion.div key={index} initial={{ opacity: 0, scale: 0.7, y: 32 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 130, damping: 18, delay: index * 0.06 }} viewport={{ once: true }} whileHover={{ scale: 1.12, rotate: 2 }} className="flex flex-col items-center group cursor-pointer">
                <motion.div className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-[#bd1e51]">
                  <img src={skill.logo} alt={skill.name} className="w-10 sm:w-12 md:w-12 h-10 sm:h-12 md:h-12 object-contain" onError={e => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<div class="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#490b3d] to-[#bd1e51] rounded-lg flex items-center justify-center text-white font-bold text-base">${skill.name[0]}</div>`;
              }} />
                </motion.div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-[#bd1e51] dark:group-hover:text-[#f1b814] transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
  {skills.map((skill, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.7, y: 32 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 130, damping: 18, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.12,
        boxShadow: "0 6px 18px #bd1e51",
        rotate: 2,
      }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center mb-3 border border-gray-100 dark:border-gray-700 group-hover:border-[#bd1e51]">
        <img src={skill.logo} alt={skill.name} className="w-12 h-12 object-contain" />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-[#bd1e51] dark:group-hover:text-[#f1b814] transition-colors duration-300">
        {skill.name}
      </span>
{/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 w-full">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
              My Projects
            </h2>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}></motion.div>
          </motion.div>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {['All', 'Web Apps', 'AIML', 'Advanced Java'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedProjectCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                  selectedProjectCategory === category
                    ? 'bg-gradient-to-r from-[#bd1e51] to-[#f1b814] text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects
              .filter((project) => selectedProjectCategory === 'All' || project.category === selectedProjectCategory)
              .map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10 }}>
                <Card className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-900 h-full flex flex-col">
                  <motion.img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span key={techIndex} whileHover={{ scale: 1.1 }} className="bg-violet-100 text-violet-700 text-xs font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">{tech}</motion.span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                      <motion.a href={project.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:underline">
                        <span>🔗</span> View Code
                      </motion.a>
                      {project.Live && (
                        <motion.a href={project.Live} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:underline">
                          <span>🌐</span> Live
                        </motion.a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
              Achievements
            </h2>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}></motion.div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Example item */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-purple-500">📚</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">Amazon Future Engineer Scholar</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Selected as an Amazon Future Engineer Scholar for excellence in academics and commitment to technology.
              </p>
            </motion.div>
            {/* Add more as needed */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-purple-500">🎓</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">Katalyst India Scholar</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Recognized as a Katalyst Scholar for leadership, academic performance, and personality development.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-purple-500">🏆</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">J.P. MorganChase Generation Tech Hackathon Winner</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Winner of the prestigious Generation Tech Hackathon by J.P. Morgan, showcasing innovative tech solutions.
              </p>
            </motion.div>
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-purple-500">🏅</div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">Finalist of Mastercard Code For Change Hackathon 2025</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
         Advanced to Round 2 as one of the Top 200 individuals selected from 2000+ entries for the Hackathon.
        </p>
      </div>
            {/* <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div className="text-4xl mb-4 text-purple-500">🌍</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Aspire Leaders Program</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Selected for the Harvard-founded Aspire Leaders Program, a global platform for emerging youth leaders from underserved communities.
        </p>
            </motion.div> */}

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-purple-500">🎯</div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">FLY-Scholar Program</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Successfully completed the FLY-Scholar program by The Competitiveness Mindset Institute, USA, developing key non-cognitive skills.
        </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-purple-500">👥</div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">Mentorship Programs</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Selected as a mentee in prestigious programs: AFE Mentorship and Katalyst India Mentorship, receiving guidance from industry leaders.
        </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 w-full">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
              Services
            </h2>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}></motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.05 }}><Card className="text-center p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#f1b814]">
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-[#490b3d] to-[#bd1e51] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl text-white">🚀</span>
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2">{service}</h3>
                  </CardContent>
                </Card></motion.div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 w-full">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#490b3d] to-[#bd1e51] bg-clip-text text-transparent dark:bg-none dark:text-white">
              Get In Touch
            </h2>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-[#bd1e51] to-[#f1b814] mx-auto mb-8" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}></motion.div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 cursor-pointer">
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#bd1e51]" />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 break-all">anshumala.22310480@viit.ac.in</span>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 cursor-pointer">
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#bd1e51]" />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">+91 8263886589</span>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 cursor-pointer">
                  <Github className="w-5 h-5 flex-shrink-0 text-[#bd1e51]" />
                  <a
                    href="https://github.com/anshumalapandit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    GitHub Profile
                  </a>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 cursor-pointer">
                  <Linkedin className="w-5 h-5 flex-shrink-0 text-[#bd1e51]" />
                  <a
                    href="https://www.linkedin.com/in/anshumala-pandit-82285328a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <Card className="border-t-4 border-t-[#f1b814]">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        required
                        className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd1e51] dark:bg-gray-800 dark:text-white transition-all duration-300" 
                      />
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        required
                        className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd1e51] dark:bg-gray-800 dark:text-white transition-all duration-300" 
                      />
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                      <textarea 
                        rows={5} 
                        name="message"
                        placeholder="Your Message" 
                        required
                        className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bd1e51] dark:bg-gray-800 dark:text-white transition-all duration-300 resize-none"
                      ></textarea>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#490b3d] to-[#bd1e51] hover:from-[#bd1e51] hover:to-[#f1b814] text-white py-2.5 sm:py-3 rounded-lg disabled:opacity-50 transition-all duration-300 text-sm sm:text-base"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#490b3d] dark:bg-black text-white py-6 sm:py-8 w-full">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base text-gray-300">
            © 2025 Anshumala Vijay Pandit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};

export default Index;
