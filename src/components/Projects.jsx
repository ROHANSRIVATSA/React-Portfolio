import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/styles/Projects.css";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("professional");

  const projects = [
    {
      id: 7,
      title: "Breast Cancer Classification Web App",
      category: "personal",
      role: "Full Stack Developer",
      duration: "Apr-May 2025",
      description:
        "Developed a full-stack breast cancer prediction web app leveraging Logistic Regression (Scikit-learn), Django REST API, and React. Achieved 98.2% test accuracy and enabled real-time binary classification via an intuitive UI.",
      technologies: ["Python", "Scikit-learn", "Django", "React"],
    },
    {
      id: 8,
      title: "Chatbot with Transformer",
      category: "personal",
      role: "AI Developer",
      duration: "Feb 2025 – Mar 2025",
      description:
        "Built a context-aware chatbot using Transformer-based seq2seq models trained on multi-turn dialogues. Demonstrated advanced NLP skills and user-intent modeling, applicable to recommendation systems and ad targeting.",
      technologies: ["Python", "Transformers", "PyTorch", "NLP"],
    },
    {
      id: 9,
      title: "Time Series Forecasting",
      category: "personal",
      role: "ML Engineer",
      duration: "Jan 2025 – Feb 2025",
      description:
        "Engineered a time series forecasting pipeline with LSTM and XGBoost models to predict stock prices, achieving a MAPE of 3.1%, demonstrating strong trend and pattern recognition capabilities.",
      technologies: ["Python", "LSTM", "XGBoost", "Time Series"],
    },
    {
      id: 4,
      title: "Log Analysis Tool",
      category: "personal",
      role: "Full Stack Developer",
      status: "Completed",
      description:
        "Delivered a comprehensive log analysis tool using Java Spring Boot and Vue.js, capable of processing large-scale system logs, detecting anomalies, visualizing trends, and generating real-time performance reports, enhancing system monitoring efficacy.",
      technologies: ["Java", "Spring Boot", "Vue.js", "Data Analysis"],
    },
    {
      id: 5,
      title: "Optical Coherence Tomography Using Federated ML",
      category: "personal",
      role: "Academic Project",
      duration: "Sep 2022 – May 2023",
      description:
        "Explored federated learning techniques to collaboratively train AI models on OCT medical data without compromising patient privacy, enabling secure multi-institutional research.",
      technologies: ["Python", "TensorFlow", "Federated Learning"],
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "personal",
      role: "Personal Project",
      status: "Completed",
      description:
        "Created a personal portfolio using React and CSS, featuring a clean, responsive design with dynamic animations powered by Framer Motion to showcase skills and projects effectively.",
      technologies: ["React", "CSS", "Framer Motion"],
    },

    // Professional projects
    {
      id: 1,
      title: "GSI-Sol",
      category: "professional",
      role: "Junior Developer",
      duration: "Jul 2024 – Dec 2024",
      description:
        "Contributed to maintenance and enhancement of a large-scale enterprise monitoring solution for a confidential client. Diagnosed and resolved over 03 CI pipeline issues by replicating system failures across VDI/VRA environments, improving deployment success rate by ~20%. Authored targeted hotfixes addressing Azure service misconfigurations and collaborated with DevOps to coordinate release delivery via Buddy Drop protocol. Utilized TeamCity to validate nightly builds and JFrog Artifactory for artifact integrity, ensuring release traceability and patch accuracy.",
      technologies: ["C#", "ASP.NET", "MySQL", "TeamCity", "JFrog"],
    },
    {
      id: 2,
      title: "NXOS-Sanity",
      category: "professional",
      role: "Full Stack Developer",
      duration: "Dec 2023 – Jun 2024",
      description:
        "Designed and implemented scalable frontend-backend integrations for a system validation platform using Django and Vue.js. Delivered 8+ new feature modules and resolved 20+ defects, improving system responsiveness and stability. Developed RESTful APIs to standardize cross-system communication, and collaborated with QA and backend teams to reduce integration failure rates during regression testing by 30%.",
      technologies: ["Django", "Vue.js", "REST APIs", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Varcons Internship",
      category: "professional",
      role: "Full Stack Web Development Intern",
      duration: "Mar 2023 – Apr 2023",
      description:
        "Developed a responsive React-based website for a local cafe client, featuring dynamic menu rendering, contact forms, and mobile-first UI components. Delivered project 1 week ahead of schedule, aligning with all client visual and functional requirements. Enhanced UX and improved load performance by optimizing component hierarchy and eliminating unnecessary DOM reflows.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  // Filter projects based on activeCategory
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
                {project.duration && (
                  <p className="project-duration">{project.duration}</p>
                )}
                {project.status && (
                  <p className="project-status">
                    <strong>Status:</strong> {project.status}
                  </p>
                )}
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
