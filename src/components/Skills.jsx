import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaAws, FaDocker, FaMicrosoft, FaGlobe, FaNetworkWired, FaPowerOff } from "react-icons/fa";
import { SiTensorflow, SiPostgresql, SiTableau, SiPytorch, SiJira, SiGit, SiPostman, SiMysql, SiKubernetes, SiPandas, SiNumpy, SiPowers, SiDatastax, SiJavascript } from "react-icons/si";
import "../assets/styles/Skills.css";

const Skills = () => {
  const programmingLanguages = [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C#", icon: <FaMicrosoft /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <SiMysql /> },
  ];

  const aiMlTools = [
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Matplotlib", icon: <FaPython /> },
  ];

  const cloudDevOps = [
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
  ];

  const dataVisualization = [
    { name: "Tableau", icon: <SiTableau /> },
    { name: "Power BI", icon: <SiPowers /> },
  ];

  const versionControl = [
    { name: "Git", icon: <SiGit /> },
  ];

  const otherTools = [
    { name: "Jira", icon: <SiJira /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "MySQL", icon: <SiMysql /> },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>

        {/* Programming Languages */}
        <h3 className="text-center mb-4">Programming Languages</h3>
        <div className="skills-grid">
          {programmingLanguages.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
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
          ))}
        </div>

        {/* AI/ML Tools */}
        <h3 className="text-center mb-4">AI/ML Tools</h3>
        <div className="skills-grid">
          {aiMlTools.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
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
          ))}
        </div>

        {/* Cloud & DevOps */}
        <h3 className="text-center mb-4">Cloud & DevOps</h3>
        <div className="skills-grid">
          {cloudDevOps.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
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
          ))}
        </div>

        {/* Data Visualization */}
        <h3 className="text-center mb-4">Data Visualization</h3>
        <div className="skills-grid">
          {dataVisualization.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
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
          ))}
        </div>

        {/* Version Control */}
        <h3 className="text-center mb-4">Version Control</h3>
        <div className="skills-grid">
          {versionControl.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
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
          ))}
        </div>

        {/* Other Tools */}
        <h3 className="text-center mb-4">Other Tools</h3>
        <div className="skills-grid">
          {otherTools.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
