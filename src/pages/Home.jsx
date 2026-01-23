import React from "react";
import { motion } from "framer-motion";
import "../CSS/Home.css";
import "../index.css";

// 🖼️ Assets
import mphoto from "../assets/mphoto.jpeg";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";
import gmailLogo from "../assets/gmail.png";
import instagramLogo from "../assets/insta.png";
import pp from "../assets/pp.jpeg";


export default function Home() {
  const professions = [
    "Full Stack Developer",
    "AI Project Developer",
    "SQL & Python",
    "Data Analyst",
    "Problem Solver",
  ];

  const quickLinks = [
    {
      img: githubLogo,
      title: "GitHub",
      link: "https://github.com/Sarthakgupta7",
    },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://linkedin.com/in/sarthak-gupta-946295258",
    },
    {
      img: gmailLogo,
      title: "Email",
      link: "mailto:sarthakgupta.ksj@gmail.com",
    },
    {
      img: instagramLogo,
      title: "Instagram",
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <section className="home-section">
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* ================= TOP SECTION ================= */}
      <div className="home-top">
        {/* Photo */}
        <motion.div
          className="photo-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="photo-ring"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="photo-frame"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src={pp}
              alt="Sarthak Gupta"
              className="profile-photo"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </motion.div>

        {/* Info */}
        <motion.div
          className="home-info"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="home-title">
            Hi, I’m{" "}
            <motion.span
              className="home-name"
              animate={{ backgroundPositionX: ["0%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Sarthak Gupta
            </motion.span>
          </h1>

          <p className="typing-effect">
             Full Stack Developer | AI Enthusiast | Data Analyst | Problem Solver | Team Player
          </p>

          {/* Profession Tags */}
          <div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                className="profession-tag"
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(90deg,var(--accent),var(--accent-2))",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {role}
              </motion.div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="info-cards">
            {[
              {
                label: "📍 Location",
                value: "Ghaziabad, Uttar Pradesh, India",
              },
              {
                label: "💼 Expertise",
                value: "SQL, Python, Full Stack Development, Data Analysis",
              },
              {
                label: "📧 Contact",
                value: "sarthakgupta.ksj@gmail.com",
              },
              {
                label: "🟢 Availability",
                value: "Actively Seeking Opportunities",
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                className="info-card"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= QUICK LINKS ================= */}
      <motion.div
        className="quick-links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="quick-links-title">Connect with me</h2>

       <div className="quick-links-list">
  {quickLinks.map((item, i) => (
    <motion.a
      key={i}
      href={item.link}
      title={item.title}
      target="_blank"
      rel="noopener noreferrer"
      data-platform={item.title.toLowerCase()}
      whileHover={{ scale: 1.12 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="quick-link"
    >
      <img src={item.img} alt={item.title} className="quick-link-img" />
    </motion.a>
  ))}
</div>
      </motion.div>
    </section>
  );
}
