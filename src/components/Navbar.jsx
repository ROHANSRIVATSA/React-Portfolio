import React, { useState, useEffect } from "react";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (id, duration = 1000) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const targetPosition = element.offsetTop - 70;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

        const scrollAnimation = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed / duration);
          window.scrollTo(0, startPosition + distance * run);

          if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
          }
        };

        requestAnimationFrame(scrollAnimation);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          
        </a>

        <div className="nav-center">
          <ul className="navbar-nav">
            {["home", "about", "skills", "experience", "projects", "contact"].map((id) => (
              <li key={id} className="nav-item">
                <a
                  href={`#${id}`}
                  className={`nav-link ${activeLink === id ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id, 1000);
                  }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
