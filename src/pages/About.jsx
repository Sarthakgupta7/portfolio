import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Sarthak Gupta</strong> — a{" "}
  <strong>B.Tech Information Technology student</strong> with a strong interest
  in building real-world, scalable software solutions. I enjoy working with{" "}
  <strong>web technologies, data, and problem-solving systems</strong> to turn
  ideas into functional products. I have hands-on experience in{" "}
  <strong>full-stack development</strong> and have built projects like an
  AI-Powered Code Debugging Assistant and Recipedia.
</p>

<p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
 Beyond coding, I bring strong experience in{" "}
<strong>leadership, coordination, and teamwork</strong>. I have served as the{" "}
<strong>General Secretary of SYC</strong>,{" "}
<strong>Vice President of Unnat Bharat Abhiyan (UBA) under IIT Delhi</strong>,{" "}
<strong>Treasurer of the Environment Club</strong>, and{" "}
<strong>Student Coordinator of the Institution’s Innovation Council (IIC)</strong>,{" "}
where I led technical events, innovation programs, and community-driven
initiatives while working closely with diverse teams.
</p>

<p>
  4th-year B.Tech IT student with proficiency in Python, SQL, JavaScript, React,
  Node.js, and core CS fundamentals like Object Orientation Programming and Data Structure & Algorithm. Seeking internship and
  entry-level opportunities to apply technical skills and contribute to
  impactful technology solutions.
</p>


        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.Tech in Information Technology
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>ABES EC (Dr A.P.J. Abdul Kalam Technical University)</strong> — Ghaziabad,
                  Uttar Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  4<sup>th</sup> Year (Pursuing) 
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2022 – 2026</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>S.J.S Public School</strong> — 
                  Kasganj, Uttar Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  CBSE
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2022</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                   <strong>S.J.S Public School</strong> — 
                  Kasganj, Uttar Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  CBSE
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2020</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* --- Experience Section --- */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.8 }}
  style={{ marginTop: "3rem" }}
>
  <h3
    style={{
      fontSize: "1.6rem",
      marginBottom: "1.5rem",
      background:
        "linear-gradient(90deg, var(--accent), var(--accent-2))",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    Experience
  </h3>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1.2rem",
    }}
  >
    {/* --- Experience Card 1 --- */}
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 25px rgba(0,255,200,0.15)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "14px",
        padding: "1.5rem 2rem",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 0 15px rgba(0,255,200,0.05)",
      }}
    >
      <h4 style={{ color: "var(--accent)", fontSize: "1.25rem" }}>
        Full Stack Intern
      </h4>
      <p style={{ color: "rgba(255,255,255,0.85)" }}>
        <strong>Ekaggata Technologies</strong> | Jul 2025 – Aug 2025
      </p>
      <p style={{ color: "rgba(255,255,255,0.75)" }}>
        Designed and deployed a Timecard Management System for 100+ employees
        using React, Firebase, and Tailwind CSS. Improved workflow efficiency
        and reduced manual HR follow-ups.
      </p>
    </motion.div>

    {/* --- Experience Card 2 --- */}
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 25px rgba(0,255,200,0.15)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "14px",
        padding: "1.5rem 2rem",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 0 15px rgba(0,255,200,0.05)",
      }}
    >
      <h4 style={{ color: "var(--accent)", fontSize: "1.25rem" }}>
        Content Research Analyst
      </h4>
      <p style={{ color: "rgba(255,255,255,0.85)" }}>
        <strong>Know Your Colleges (KYC)</strong> | Jul 2024 – Jun 2025
      </p>
      <p style={{ color: "rgba(255,255,255,0.75)" }}>
        Researched and structured data from 200+ college websites, improving
        content accuracy and helping students make informed admission decisions.
      </p>
    </motion.div>

    {/* --- Experience Card 3 --- */}
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 25px rgba(0,255,200,0.15)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "14px",
        padding: "1.5rem 2rem",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 0 15px rgba(0,255,200,0.05)",
      }}
    >
      <h4 style={{ color: "var(--accent)", fontSize: "1.25rem" }}>
        Campus Ambassador
      </h4>
      <p style={{ color: "rgba(255,255,255,0.85)" }}>
        <strong>Teachnook</strong> | 2023
      </p>
      <p style={{ color: "rgba(255,255,255,0.75)" }}>
        Promoted technical programs, coordinated student outreach, and
        strengthened brand presence across campus through events and campaigns.
      </p>
    </motion.div>
  </div>
</motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
