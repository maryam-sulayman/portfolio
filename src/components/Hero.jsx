import "../styles/Hero.css";
import profile from "../images/profile.jpg";
import html5 from "../images/html5.svg";
import css3 from "../images/css3.svg";
import js from "../images/javascript.svg";
import reactLogo from "../images/react.svg";
import vue from "../images/vuejs.svg";
import python from "../images/python.svg";
import figma from "../images/figma.svg";
import aws from "../images/amazonwebservices.svg";
import ps from "../images/photoshop.svg";
import mysql from "../images/mysql.svg";
import canva from "../images/canva.svg";
import anaconda from "../images/anaconda.svg";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "Python", src: python },
  { name: "HTML5", src: html5 },
  { name: "CSS3", src: css3 },
  { name: "JavaScript", src: js },
  { name: "React", src: reactLogo },
  { name: "Vue", src: vue },
  { name: "Figma", src: figma },
  { name: "Adobe XD", src: aws },
  { name: "Anaconda", src: anaconda },
  { name: "Canva", src: canva },
  { name: "MySQL", src: mysql },
  { name: "Photoshop", src: ps },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        {/* left column */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={profile} alt="Maryam Sulayman" className="hero-img" />
          <div className="hero-text">
            <h1>
              Hi, I'm <span>Maryam Sulayman</span>
            </h1>
            <p>
              I'm a motivated web and mobile developer with a growing focus on
              cloud computing and secure full-stack application design.
            </p>

            <div className="hero-buttons">
              <button className="btn">UX/UI</button>
              <button className="btn">Researcher</button>
              <button className="btn">Data Analyst</button>
              <button className="btn">Software Developer</button>
            </div>
          </div>
        </motion.div>

        {/* right column (About) */}
        <motion.div
          className="hero-about"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-card">
            <h2>About me</h2>
            <p>
              I’m a junior web and mobile developer with a growing focus on
              cloud computing and intuitive user experience design. Currently
              studying towards the AWS Solutions Architect Associate
              certification, I’m passionate about building responsive,
              accessible digital products that solve real-world problems and
              enhance daily experiences.
            </p>
            <p>
              My hands-on experience includes building full-stack web and mobile
              applications using React, React Native, and Vue. I’ve also worked
              on client and real-world university projects that involve
              registration systems, dashboards, and customer-facing tools.
            </p>
          </div>
               {/* full-width Skills card */}
        <motion.div
          className="skills-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <h3>SKILLS</h3>
          <ul className="skills-grid" aria-label="Skills">
            {SKILLS.map((s) => (
              <li key={s.name} className="skill">
                <img src={s.src} alt={s.name} />
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        </motion.div>

   
      </div>
    </section>
  );
}
