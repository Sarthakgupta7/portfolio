import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '4 Legged robot',
    desc: 'A four-legged robot project uses servo/DC motors controlled by a microcontroller to mimic animal-like walking. Its electrical system includes motor drivers, sensors, and a rechargeable battery for stable power and balance.',
    ss: '/4 legged robot.jpg',
    tech: ['Ardiuno', 'Hands-on experience'],
    live: '#',
    code: 'https://github.com/aditikarn-analyst/4-legged-robot'
  },
  {
  title: 'Women Safety app- SIH 2024',
  desc: 'A Women Safety API project provides a digital interface for emergency alerts and location sharing. It integrates with mobile apps, GPS, and messaging services to notify contacts or authorities instantly.',
  ss: '/Women safety.jpeg',
  tech: ['Python', 'Transformers', 'Sos-calling', 'software'],
  live: '#',
  code: 'https://github.com/aditikarn-analyst/Women-safety'
  },
  {
    title: 'Night Lamp using LDR',
    desc: 'A night lamp project uses a bulb/LED powered by a simple electrical circuit with a switch or sensor. It includes a power source, wiring, and control mechanism to turn the lamp on/off automatically or manually..',
    ss: '/Night Lamp.jpeg',
    tech: ['Hardware', 'Hands-on', 'LDR'],
    live: '#',
    code: 'https://github.com/aditikarn-analyst/night-lamp-'
  },
  {
  title: 'Sehat Bandhu - SIH 2025',
  desc: 'Sehat Bandhu is a digital health platform from SIH 2025 that enhances healthcare access and disease tracking for Kerala’s migrant population, using AI/ML, geospatial tools, and multilingual support for equitable, timely care..',
  ss: '/health detect..jpeg',
  tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  live: '#',
  code: 'https://github.com/aditikarn-analyst/SIH'
  },
  {
    title: 'GUVI HACKATHON-LLM Resume Reviwer',
    desc: 'An intelligent web application that leverages LLMs and ATS-style scoring to help candidates analyze and enhance their resumes.',
    ss: '/LLM.jpeg',
    tech: ['Scikit-learn + Joblib', 'PyMuPDF / pdfminer', 'Keyword extraction + semantic matching'],
    live: 'https://llmresumeanalysis.streamlit.app/',
    code: 'https://github.com/Aaronrao989/AI_Resume_Analysis'
  },
  {
    title: 'Salary Analyzer',
    desc: 'A simple Machine Learning web app built with Streamlit to predict employee salaries based on their details such as age, experience, and other categorical features.',
    ss: '/salary.jpeg',
    tech: ['Python', 'Pandas & NumPy (Data Handling)', 'Joblib (Model Saving & Loading)'],
    live: 'https://employee-salary-prediction-nicuwy2cnu5qvvekaqxf5y.streamlit.app/',
    code: 'https://github.com/Aaronrao989/employee-salary-prediction'
  },
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
