import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Experience</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            {/* MapleLabs Experience */}
            <motion.div
              className="experience-item mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Associate Software Engineer</h3>
              <h4>MapleLabs, a unit of Xoriant Solutions Pvt. Ltd. | Nov 2023 – Dec 2024</h4>
              <p>
              Full stack web development work with Django, Vue.js, C#, and ASP.NET.
              </p>
            </motion.div>

            {/* Varcons Internship */}
            <motion.div
              className="experience-item mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Full Stack Web Development Intern</h3>
              <h4>Varcons | March 2023 – April 2023</h4>
              <p>
                Developed a web application for a cafe, creating a user-friendly interface and optimizing database structures for efficient data management.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
