import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/styles/Projects.css";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("professional");

  const projects = [
    {
      id: 1,
      title: "GSI-Sol",
      category: "professional",
      role: "Junior Developer",
      duration: "Jul 2024 – Dec 2024",
      description:
        "At MapleLabs, my manager and I got involved in a project that grew significantly due to the success of our work. As more team members joined, I facilitated knowledge transfer by sharing the product knowledge I had acquired. My work in resolving customer issues and improving system performance using C# and ASP.NET was acknowledged by my team and praised by senior managers, both at MapleLabs and on the client side.",
      technologies: ["C#", "ASP.NET", "MySQL"],
    },
    {
      id: 2,
      title: "NXOS-Sanity",
      category: "professional",
      role: "Full Stack Developer",
      duration: "Dec 2023 – Jun 2024",
      description:
        "As a Full Stack Developer on the NXOS-Sanity project, I worked with Django and Vue.js to develop new features and enhance existing ones, improving the overall user experience. I designed and built RESTful APIs to ensure smooth communication between the frontend and backend, and collaborated with teams to deliver features on time.",
      technologies: ["Django", "Vue.js", "REST APIs"],
    },
    {
      id: 3,
      title: "Varcons Internship",
      category: "professional",
      role: "Full Stack Web Development Intern",
      duration: "Mar 2023 – Apr 2023",
      description:
        "During my internship, I worked on developing a website for a cafe. I focused on designing a simple, user-friendly interface and setting up a structured database. This gave me hands-on experience building something real based on a client’s needs.",
      technologies: ["HTML", "CSS", "JavaScript", "Databases"],
    },
    {
      id: 4,
      title: "Log Analysis Tool",
      category: "personal",
      role: "Full Stack Developer",
      duration: "Ongoing",
      description:
        "Currently working on a log analysis tool that processes large volumes of system logs. Built with Java Spring Boot and Vue.js, it identifies anomalies, visualizes trends, and generates performance reports in real-time.",
      technologies: ["Java", "Spring Boot", "Vue.js", "Data Analysis"],
    },
    {
      id: 5,
      title: "Optical Coherence Tomography Using Federated ML",
      category: "personal",
      role: "Academic Project",
      duration: "Sep 2022 – May 2023",
      description:
        "Explored federated learning to train AI models on OCT medical data without compromising privacy. This enabled collaboration across healthcare institutions while maintaining data confidentiality.",
      technologies: ["Python", "TensorFlow", "Federated Learning"],
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "personal",
      role: "Personal Project",
      duration: "Ongoing",
      description:
        "This is my personal portfolio, built to showcase my work and skills. Built with React and CSS, it features a clean, responsive design and animations using Framer Motion.",
      technologies: ["React", "CSS", "Framer Motion"],
    },
    {
      id: 7,
      title: "LLM-Powered Decision Support System for Mental Health",
      category: "personal",
      role: "Personal Project",
      duration: "Dec 2024 – Feb 2025",
      description:
        "This project explores how large language models can support clinicians in early mental health screening by offering interpretable suggestions. I built a web-based tool that combines GPT-generated summaries with visual explanations like SHAP graphs and attention overlays. The interface aims to make AI insights more accessible to non-technical users.",
      technologies: ["Python", "FastAPI", "React", "SHAP", "Plotly", "LLMs"],
    },
  ];

  const filteredProjects =
    activeCategory === "professional"
      ? projects.filter((project) => project.category === "professional")
      : projects.filter((project) => project.category === "personal");

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="text-center mb-4">
          <span
            className={activeCategory === "professional" ? "active-link" : ""}
            onClick={() => setActiveCategory("professional")}
            style={{
              cursor: "pointer",
              marginRight: "20px",
              fontWeight: activeCategory === "professional" ? "bold" : "normal",
            }}
          >
            Professional
          </span>
          |
          <span
            className={activeCategory === "personal" ? "active-link" : ""}
            onClick={() => setActiveCategory("personal")}
            style={{
              cursor: "pointer",
              marginLeft: "20px",
              fontWeight: activeCategory === "personal" ? "bold" : "normal",
            }}
          >
            Personal
          </span>
        </div>

        <div className="row">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="col-md-6 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="project-card">
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-duration">{project.duration}</p>
                <p className="project-description">{project.description}</p>
                <div className="technologies">
                  <strong>Technologies:</strong>
                  <div className="tech-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-item">
                        {tech}
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
  );
};

export default Projects;
