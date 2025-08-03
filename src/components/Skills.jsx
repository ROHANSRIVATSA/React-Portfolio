import React from "react";
import { motion } from "framer-motion";

import {
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaMicrosoft,
  FaGlobe,
  FaPowerOff,
  FaNetworkWired,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiJira,
  SiPostman,
  SiTeamcity,
  SiJfrog,
  SiReact,
  SiDjango,
  SiSpringboot,
  SiCss3,
  SiKubernetes,
  SiVuedotjs,
} from "react-icons/si";

import "../assets/styles/Skills.css";

const Skills = () => {
  const programmingLanguages = [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C", icon: <FaMicrosoft /> }, // Using Microsoft icon for C#
    { name: "JavaScript", icon: <SiJavascript /> },
  ];

  const databases = [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  const frameworksTechnologies = [
    { name: "Vue.js", icon: <SiVuedotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "ASP.NET", icon: <FaMicrosoft /> },
    { name: "HTML", icon: <FaGlobe /> },
    { name: "CSS", icon: <SiCss3 /> },
  ];

  const aiMlTools = [
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Pandas", icon: <SiPandas /> },
  ];

  const cloudDevOps = [
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "TeamCity", icon: <SiTeamcity /> },
    { name: "JFrog", icon: <SiJfrog /> },
  ];

  const otherTools = [
    { name: "Git", icon: <SiGit /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "VMware", icon: <FaPowerOff /> }, // Placeholder
    { name: "SolarWinds", icon: <FaNetworkWired /> }, // Placeholder
  ];

  const renderSkillsGrid = (skills) =>
    skills.map((skill, index) => (
      <motion.div
        key={index}
        className="skill-item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
          background: "#333333",
        }}
      >
        <motion.div
          className="skill-icon"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, color: "#4CAF50" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {skill.icon}
        </motion.div>
        <h4 className="mt-3">{skill.name}</h4>
      </motion.div>
    ));

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>

        <h3 className="text-center mb-4">Programming Languages</h3>
        <div className="skills-grid">{renderSkillsGrid(programmingLanguages)}</div>

        <h3 className="text-center mb-4">Databases</h3>
        <div className="skills-grid">{renderSkillsGrid(databases)}</div>

        <h3 className="text-center mb-4">Frameworks & Technologies</h3>
        <div className="skills-grid">{renderSkillsGrid(frameworksTechnologies)}</div>

        <h3 className="text-center mb-4">AI/ML Tools</h3>
        <div className="skills-grid">{renderSkillsGrid(aiMlTools)}</div>

        <h3 className="text-center mb-4">Cloud & DevOps</h3>
        <div className="skills-grid">{renderSkillsGrid(cloudDevOps)}</div>

        <h3 className="text-center mb-4">Other Tools</h3>
        <div className="skills-grid">{renderSkillsGrid(otherTools)}</div>
      </div>
    </section>
  );
};

export default Skills;
