import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Brain,
  // Tool,
  Globe,
  Terminal,
} from "lucide-react";

const App = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "TypeScript"],
      description:
        "Building responsive and interactive user interfaces with modern web technologies.",
    },
    {
      category: "Backend Development",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"],
      description:
        "Developing scalable server-side applications and RESTful APIs.",
    },
    {
      category: "Data Science & AI",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "OpenAI"],
      description:
        "Creating intelligent solutions using machine learning and deep learning.",
    },
    {
      category: "DevOps & Tools",
      icon: <Github className="w-8 h-8 text-blue-600" />,
      skills: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
      description: "Implementing robust deployment and development workflows.",
    },
  ];

  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description:
        "Built a comprehensive analytics dashboard using React and TensorFlow, processing real-time data for business insights.",
      image: "/api/placeholder/600/400",
      tags: ["React", "TensorFlow", "Node.js"],
      link: "#",
    },
    {
      title: "E-Commerce Marketplace",
      description:
        "Developed a full-stack e-commerce platform with real-time inventory management and payment processing.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Smart Document Processor",
      description:
        "Created an AI-powered document processing system using OCR and natural language processing.",
      image: "/api/placeholder/600/400",
      tags: ["Python", "OpenAI", "Flask"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.h1
              // {...fadeIn}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            >
              Faizan Ahmad
            </motion.h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <motion.li key={item} whileHover={{ scale: 1.05 }}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 flex hover:text-blue-600 transition-colors text-sm font-medium"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section {...fadeIn} className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Full Stack Developer & AI Engineer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                Crafting innovative digital solutions at the intersection of web
                development and artificial intelligence. Specialized in building
                scalable applications that leverage cutting-edge technology.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  View Projects
                </a>
              </motion.div>
            </div>
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1682124857779-5c3a97dd3967?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero illustration"
                className="rounded-lg shadow-2xl w-[82vh] mx-auto aspect-video object-contain"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h3>
            <p className="text-gray-600">
              Combining modern web technologies with artificial intelligence to
              create powerful digital solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">{skill.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {skill.category}
                    </h4>
                    <p className="text-gray-600 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h3>
            <p className="text-gray-600">
              A selection of my recent work combining web development and
              artificial intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all"
              >
                <img
                  src="https://images.unsplash.com/photo-1732003039812-39c4cd9fce9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Let's Connect
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <motion.a
                href="mailto:faizanbutt030@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors w-full md:w-auto justify-center"
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <span>Email</span>
              </motion.a>
              <motion.a
                href="https://github.com/faizan-codes"
                target="blank"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors w-full md:w-auto justify-center"
              >
                <Github className="w-5 h-5 text-blue-600" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/faizan-ahmad-0x"
                target="blank"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors w-full md:w-auto justify-center"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          {/* <div className="flex justify-center space-x-6 mb-4">
            <Globe className="w-5 h-5" />
            <Terminal className="w-5 h-5" />
            <Code className="w-5 h-5" />
          </div> */}
          <p>&copy; 2024 Faizan Ahmad. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
