import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  // Detect overflow to switch to hamburger
  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    setShowButton(
      linksRef.current.scrollWidth > navRef.current.clientWidth
    );
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="nav" ref={navRef}>
        {/* Left */}
        <div className="nav-left">
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            AK
          </motion.div>

          <div className="nav-name">
            <h1>Aditi Karn</h1>
            <span className="nav-tagline">
              Electrical • Electronics • Data Analyst
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div
          className="nav-links"
          ref={linksRef}
          style={{ display: showButton ? "none" : "flex" }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className="nav-link"
            >
              {({ isActive }) => (
                <motion.div
                  className="nav-link-content"
                  whileHover={{ scale: 1.05 }}
                >
                  <span
                    style={{
                      color: isActive ? "var(--accent)" : "#fff",
                    }}
                  >
                    {l.label}
                  </span>

                  {isActive && <div className="underline" />}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        {showButton && (
          <button
            className="mobile-btn"
            onClick={() => setIsOpen((p) => !p)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            className="mobile-dropdown"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            <button
              className="mobile-close"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}