import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles"; // Correct import for Particles
import "../assets/styles/Hero.css";

const Hero = () => {
  // Add debugging console log to check rendering
  useEffect(() => {
    console.log("Hero section is being rendered.");
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Projects section not found.");
    }
  };

  // Particle options for background
  const options = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 3,
        random: true,
      },
      opacity: {
        value: 0.3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.5,
        width: 1,
      },
    },
  };

  return (
    <section id="hero" className="hero-section">
      {/* Particle background */}
      <div className="particle-background">
        <Particles options={options} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hero-content"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hi, I'm Rohan A
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Welcome to my portfolio website. I’m a Software Engineer with a background in full-stack development, 
          and I’ve always had a strong interest in working with data. My journey has led me to explore AI and Machine Learning, 
          where I focus on improving coding practices, system performance, and problem-solving. Along the way, I’ve gained 
          hands-on experience applying data-driven approaches to enhance software solutions and optimize processes.
        </motion.p>
        <div className="cta-buttons">
          <motion.button
            className="btn btn-primary me-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            onClick={scrollToProjects} // Add onClick handler
          >
            View My Work
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
