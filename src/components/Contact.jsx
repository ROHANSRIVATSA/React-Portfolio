import React from "react";
import "../assets/styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        {/* Contact Header */}
        <h2 className="contact-header text-center mb-5">
          Contact
        </h2>

        {/* Contact Window */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="contact-window">
              <div className="contact-info">
                {/* Email Contact */}
                <p className="contact-item">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:rohanaswath@gmail.com" className="contact-link">
                    rohanaswath@gmail.com
                  </a>
                </p>

                {/* LinkedIn Contact */}
                <p className="contact-item">
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/rohan-a-48234b1b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rohan A
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
