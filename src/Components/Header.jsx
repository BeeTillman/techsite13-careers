import React, { useState, useEffect } from "react";
import logo from "url:../images/tpsiteTpLogo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    }
  };

  const toggleMobileNav = () => {
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
              <a className="nav-link scrollto active" href="#hero" onClick={(e) => handleNavClick(e, "hero")}>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about" onClick={(e) => handleNavClick(e, "about")}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#benefits" onClick={(e) => handleNavClick(e, "benefits")}>
                Benefits
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
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
