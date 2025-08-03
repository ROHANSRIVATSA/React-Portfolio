// About.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "../assets/styles/About.css";

const About = () => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      id="about"
    >
      <div className="container">
        <h2 className="text-center mb-5">About Me</h2>
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <p className="lead">
              I am a graduate student in Computer Science at Northeastern University and a passionate software engineer with extensive full-stack experience. My core expertise spans AI, machine learning, and human-computer interaction, driving me to bridge the gap between innovative research and scalable technology solutions.
            </p>
            <p className="lead">
              Over the past year, I have contributed to robust backend and frontend systems using Django, Vue.js, C#, and ASP.NET, collaborating closely with cross-functional teams while mentoring junior developers. I actively apply data-driven methodologies to optimize system performance and user experience.
            </p>
            <p className="lead">
              My current research trajectory focuses on breakthrough AI applications, including interpretable machine learning and privacy-preserving federated learning, aimed at solving complex real-world challenges in healthcare and beyond. I am deeply motivated to pioneer trustworthy, user-centered sociotechnical systems that adapt seamlessly to diverse user needs and contexts.
            </p>
            <p className="lead">
              With a vision to become a technology entrepreneur, I strive to drive impactful innovation through cutting-edge research and entrepreneurial leadership. I am eager to collaborate on projects that fuse rigorous scientific inquiry with scalable product development, accelerating progress in emerging technological domains.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;