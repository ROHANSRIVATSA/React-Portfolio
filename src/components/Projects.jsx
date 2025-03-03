import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/styles/Projects.css";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("professional");

  const projects = [
    {
      id: 1,
      title: "GSI-Sol-Support",
      category: "professional",
      role: "Junior Developer",
      duration: "Jul 2024 – Dec 2024",
      description:
        "At MapleLabs, my manager and I got involved in a project that grew significantly due to the success of our work. As more team members joined, I facilitated knowledge transfer by sharing the product knowledge I had acquired. My work in resolving customer issues and improving system performance using C# and ASP.NET was acknowledged by my team and praised by senior managers, both at MapleLabs and on the client side. I was responsible for improving system performance, resolving customer issues, and developing new features with C# and ASP.NET.",
      technologies: ["C#", "ASP.NET", "MySQL"],
    },
    {
      id: 2,
      title: "NXOS-Sanity",
      category: "professional",
      role: "Full Stack Developer",
      duration: "Dec 2023 – Jun 2024",
      description:
        "As a Full Stack Developer on the NXOS-Sanity project, I worked with Django and Vue.js to develop new features and enhance existing ones, improving the overall user experience. I designed and built RESTful APIs to ensure smooth communication between the frontend and backend. Along with developing new features, I was also responsible for troubleshooting and fixing bugs to keep everything running smoothly. I worked closely with different teams to understand their needs, integrate various systems, and make sure we delivered the features on time. This experience helped me grow my skills in both backend and frontend development while also strengthening my ability to collaborate and solve problems effectively.",
      technologies: ["Django", "Vue.js", "REST APIs"],
    },
    {
      id: 3,
      title: "Varcons Internship",
      category: "professional",
      role: "Full Stack Web Development Intern",
      duration: "Mar 2023 – Apr 2023",
      description:
        "During my internship, I worked on developing a website for a cafe. My focus was on designing a simple, easy-to-use interface and setting up a well-structured database to keep things organized. I also documented the process to make future updates easier for the team. It was a short project, but it gave me hands-on experience in building something real based on a client’s needs.",
      technologies: ["HTML", "CSS", "JavaScript", "Databases"],
    },
    {
      id: 4,
      title: "Log Analysis Tool",
      category: "personal", // Changed category to personal
      role: "Full Stack Developer",
      duration: "Ongoing",
      description:
        "Currently working on the development of a log analysis tool that processes and analyzes large volumes of system log data. The tool, built with Java Spring Boot for the backend and Vue.js for the frontend, is designed to identify patterns and anomalies in log data, visualize trends, and generate reports. This project focuses on using data analysis techniques to optimize system performance and support troubleshooting efforts by efficiently processing and analyzing data in real-time.",
      technologies: ["Java", "Spring Boot", "Vue.js", "Data Analysis"],
    },
    {
      id: 5,
      title: "Optical Coherence Tomography Using Federated ML",
      category: "personal",
      role: "Academic Project",
      duration: "Sep 2022 – May 2023",
      description:
        "I worked on a project exploring Federated Learning to train AI models on medical data without compromising privacy. The goal was to allow hospitals to collaborate securely while ensuring sensitive information remained protected.",
      technologies: ["Python", "TensorFlow", "Federated Learning"],
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "personal",
      role: "Personal Project",
      duration: "Ongoing",
      description:
        "This is my personal portfolio, built to showcase my work and skills. I developed it using React and CSS, focusing on a clean design and smooth user experience. It’s an ongoing project where I keep experimenting and improving.",
      technologies: ["React", "CSS", "Framer Motion"],
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
            style={{ cursor: "pointer", marginRight: "20px", fontWeight: activeCategory === 'professional' ? 'bold' : 'normal' }}
          >
            Professional
          </span>
          |
          <span
            className={activeCategory === "personal" ? "active-link" : ""}
            onClick={() => setActiveCategory("personal")}
            style={{ cursor: "pointer", marginLeft: "20px", fontWeight: activeCategory === 'personal' ? 'bold' : 'normal' }}
          >
            Personal
          </span>
        </div>

        {/* Professional Projects */}
        {activeCategory === "professional" ? (
          <>
            <div className="category-header">Professional Projects</div>
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
          </>
        ) : null}

        {/* Personal Projects */}
        {activeCategory === "personal" ? (
          <>
            <div className="category-header">Personal Projects</div>
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
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;
