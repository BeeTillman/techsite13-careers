import React, { useState, useEffect } from "react";
import logo from "url:../images/tpsiteTpLogo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "benefits", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileNavOpen(false);
      setActiveSection(sectionId);
    }
  };

  const toggleMobileNav = (e) => {
    e.stopPropagation();
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header id="header" className={`fixed-top ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="https://techport13.com" className="logo">
          <img src={logo} alt="Techport13 Logo" className="img-fluid" />
        </a>

        <nav id="navbar" className={`navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <li>
              <a className={`nav-link scrollto ${activeSection === "hero" ? "active" : ""}`} href="#hero" onClick={(e) => handleNavClick(e, "hero")}>
                Home
              </a>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeSection === "about" ? "active" : ""}`} href="#about" onClick={(e) => handleNavClick(e, "about")}>
                About
              </a>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeSection === "benefits" ? "active" : ""}`} href="#benefits" onClick={(e) => handleNavClick(e, "benefits")}>
                Benefits
              </a>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeSection === "contact" ? "active" : ""}`} href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Contact
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://techport13.com">
                Main Page
              </a>
            </li>
          </ul>
          <i
            className={`bi ${isMobileNavOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
