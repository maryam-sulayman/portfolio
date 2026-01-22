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
  { name: "HTML5", src: html5 },
  { name: "CSS3", src: css3 },
  { name: "JavaScript", src: js },
  { name: "React", src: reactLogo },
  { name: "Vue", src: vue },
  { name: "MySQL", src: mysql },
  { name: "Python", src: python },
  { name: "AWS", src: aws },
  { name: "Anaconda", src: anaconda },
  { name: "Figma", src: figma },
  { name: "Photoshop", src: ps },
  { name: "Canva", src: canva },
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
  I'm a web and mobile developer with experience building user-friendly interfaces. 
  I work mainly with HTML, CSS, and JavaScript, and build front-end components using React.
            </p>

            <div className="hero-buttons">
              <a className="btn primary"
                href="/maryam-sulayman-cv.pdf"
                target="_blank" rel="noreferrer"
                aria-label="Open my CV in a new tab">
                VIEW CV
              </a>

              <a className="btn"
                href="mailto:muhammedmariam80@yahoo.co.uk?subject=Project%20inquiry"
                aria-label="Email Maryam to hire">
                HIRE ME
              </a>
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
    My journey into tech didn't follow the traditional path. After graduating with a First-class degree in Biomedical Sciences, I taught myself to code through online courses, bootcamps, and personal projects.
  </p>
<p>
  Today, I build production-ready applications with React and Node.js. I'm comfortable with Git for version control, databases like MongoDB and MySQL, and Figma for design collaboration. I create interfaces that are responsive, accessible, and work seamlessly across devices.
</p>
</div>
               {/* full-width Skills card */}
        <motion.div
          className="skills-card skills-responsive"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <h3>Skills</h3>
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