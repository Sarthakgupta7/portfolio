import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";
import gmailLogo from "../assets/gmail.png";
import instagramLogo from "../assets/insta.png";
import snapchatLogo from "../../public/facebook.png";

import "../CSS/Contact.css";
import "../index.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const phonePattern = /^[+]?[0-9]{7,15}$/;

    if (!emailPattern.test(form.contact) && !phonePattern.test(form.contact)) {
      setStatus("⚠️ Enter a valid email or phone number.");
      return;
    }

    setLoading(true);
    setStatus("");

    const mainParams = {
      from_name: form.name,
      contact_info: form.contact,
      subject: form.subject,
      message: form.message,
    };

    // 1️⃣ Send email to YOU
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        mainParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // 2️⃣ Auto-reply to sender
        return emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          {
            from_name: form.name,
            message: form.message,
            reply_to: form.contact,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      })
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", contact: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        setStatus("❌ Failed to send. Try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const quickLinks = [
    {
      img: githubLogo,
      title: "GitHub",
      link: "https://github.com/sarthakgupta7",
    },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/sarthak-gupta-946295258/",
    },
    {
      img: gmailLogo,
      title: "Email",
      link: "mailto:sarthakgupta.ksj@gmail.com",
    },
    {
      img: instagramLogo,
      title: "Instagram",
      link: "https://www.instagram.com/its_sarthak20/",
    },
    {
      img: snapchatLogo,
      title: "Snapchat",
      link: "https://www.snapchat.com/@sarthakg524",
    },
  ];

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love
        to hear from you!
      </motion.p>

      {/* Social Links */}
      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="contact-form"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
        <input name="contact" placeholder="Your Email or Phone" value={form.contact} onChange={handleChange} />
        <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message..." rows="5" value={form.message} onChange={handleChange} />

        <motion.button
          type="submit"
          className="contact-btn"
          disabled={loading}
          whileHover={!loading ? { scale: 1.05 } : {}}
        >
          {loading ? <span className="spinner"></span> : "🚀 Send Message"}
        </motion.button>

        {status && <p className="contact-status">{status}</p>}
      </motion.form>
    </section>
  );
}

