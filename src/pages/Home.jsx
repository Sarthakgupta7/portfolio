import React from "react";
import { motion } from "framer-motion";
import "../CSS/Home.css";
import "../index.css";

// 🖼️ Assets
import photo from "../../public/photo.jpg";
import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import instagramLogo from "../../public/insta.png";

export default function Home() {
  const professions = [
    "Data Analyst",
    "Electrical Engineer",
    "Fashion Enthusiast",
    "UI/UX Designer",
    "Analytics Architect",
  ];

  const quickLinks = [
    {
      img: githubLogo,
      title: "GitHub",
      link: "https://github.com/aditikarn-analyst",
    },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://linkedin.com/in/aditikarn-data-analyst",
    },
    {
      img: gmailLogo,
      title: "Email",
      link: "mailto:aditikarnoff88@gmail.com",
    },
    {
      img: instagramLogo,
      title: "Instagram",
      link: "https://www.instagram.com/coco_addu_08/",
    },
  ];

  return (
    <section className="home-section">
      {/* Typing Animation Keyframes (Desktop Only via CSS) */}
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
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="photo-frame"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={photo}
              alt="Aditi Karn"
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
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Aditi Karn
            </motion.span>
          </h1>

          <p className="typing-effect">
            Electrical Engineer | Data Analyst | Fashion Enthusiast
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
                value: "New Delhi, Delhi, India",
              },
              {
                label: "💼 Expertise",
                value: "Data Analyst, Electrical Engineer",
              },
              {
                label: "📧 Contact",
                value: "aditikarnoff88@gmail.com",
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
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}