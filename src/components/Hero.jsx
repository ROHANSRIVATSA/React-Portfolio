// Hero.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import "../assets/styles/Hero.css";

const Hero = () => {
  useEffect(() => {
    console.log("Hero section is rendered.");
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Projects section not found.");
    }
  };

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
      <div className="particle-background">
        <Particles options={options} />
      </div>

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="hero-content"
  style={{
    position: "relative",
    top: "-15vh", // 👈 moves content up by 10% of viewport height
    zIndex: 2,
    maxWidth: "800px",
    textAlign: "center",
    padding: "2rem",
  }}
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
          I am an aspiring technology entrepreneur and graduate student driven by a passion for AI, machine learning, and scalable full-stack development. I leverage data-driven innovation and rigorous scientific methods to create solutions that push the boundaries of what's possible, aiming for breakthrough impact in emerging tech landscapes.
        </motion.p>

        <div className="cta-buttons">
          <motion.button
            className="btn btn-primary me-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            onClick={scrollToProjects}
          >
            Explore My Work
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;