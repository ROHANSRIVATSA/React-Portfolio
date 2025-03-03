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
              I’ve spent the past year working as a full-stack developer, and it’s been an exciting ride! I’ve had the chance to work with technologies like <strong>C#</strong>, <strong>ASP.NET</strong>, <strong>Django</strong>, and <strong>Vue.js</strong>, building web applications that solve real problems. From managing databases with <strong>MySQL</strong> to creating smooth, user-friendly interfaces, I’ve learned a lot, and I’m always up for new challenges.
            </p>
            <p className="lead">
              Right now, I’m pursuing a Master’s in Computer Science at <strong>Northeastern University</strong>, diving deeper into <strong>AI</strong> and <strong>Machine Learning</strong>. This is the next step for me because I’ve always been curious about how data and smart systems can help make better decisions and drive innovation. I also got into cloud tech a couple of years ago, and I’ve earned certifications in cloud essentials, architecture, and serverless, which has helped me think about how scalable and secure systems are built.
            </p>
            <p className="lead">
              I love working with teams, whether it's helping new members get started, brainstorming ideas, or collaborating to make sure we deliver quality software. Outside of work, I’m always keeping an eye on the latest <strong>AI</strong> trends or tinkering with new tech just to learn more.
            </p>
            <p className="lead">
              I’m super excited about where this journey is taking me, and I can’t wait to apply my skills in <strong>AI/ML</strong> and <strong>data science</strong> to build something meaningful!
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
