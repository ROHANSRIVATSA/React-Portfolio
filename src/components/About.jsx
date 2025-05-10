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
            I'm a software engineer and graduate student in Computer Science at Northeastern University, with a background in full-stack development and a growing focus on AI, machine learning, andhuman-computer interaction. Over the past year, I’ve built and maintained backend and frontend systems using Django, Vue.js, C#, and ASP.NET, while collaborating with cross-functional teams and mentoring new developers.
          </p>
          <p className="lead">
            My recent work has been centered around making intelligent systems more explainable and inclusive. I’ve developed a decision-support prototype for mental health screening that uses large language models (LLMs) and visual explanation tools like SHAP and attention overlays to assist clinicians in understanding AI-generated recommendations. I also worked on a federated learning project focused on privacy-preserving AI for medical imaging during my bachelors.
          </p>
          <p className="lead">
            I’m especially interested in building AI systems that adapt to individual differences in background, expertise, and cognitive styles so that technology works for a wider range of people. My goal is to contribute to the development of trustworthy, user-centered sociotechnical systems that blend strong engineering with thoughtful design.
          </p>
          <p className="lead">
            I'm always excited to collaborate on research at the intersection of machine learning, HCI, and I’m looking forward to applying these passions in projects that drive real-world impact.
          </p>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
