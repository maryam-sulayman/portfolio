import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Projects.css";

/* === Images === */
import health1 from "../images/projects/health/health-01.png";
import health2 from "../images/projects/health/health-02.png";
import health3 from "../images/projects/health/health-03.png";
import health4 from "../images/projects/health/health-04.png";
import health5 from "../images/projects/health/health-05.png";
import health6 from "../images/projects/health/health-06.png";
import hotel1 from "../images/projects/hotel/hotel-01.png";
import hotel2 from "../images/projects/hotel/hotel-02.png";
import hotel3 from "../images/projects/hotel/hotel-03.png";
import hotel4 from "../images/projects/hotel/hotel-04.png";
import hotel5 from "../images/projects/hotel/hotel-05.png";
import hotel6 from "../images/projects/hotel/hotel-06.png";
import hotel7 from "../images/projects/hotel/hotel-07.png";
import hotel8 from "../images/projects/hotel/hotel-08.png";
import book1 from "../images/projects/book/book-01.png";
import book2 from "../images/projects/book/book-02.png";
import book3 from "../images/projects/book/book-03.png";
import book5 from "../images/projects/book/book-05.png";
import book6 from "../images/projects/book/book-06.png";
import book7 from "../images/projects/book/book-07.png";
import book8 from "../images/projects/book/book-08.png";
import book9 from "../images/projects/book/book-09.png";
import chow1 from "../images/projects/chow/chow-01.png";
import chow2 from "../images/projects/chow/chow-02.png";
import chow3 from "../images/projects/chow/chow-03.png";
import chow4 from "../images/projects/chow/chow-04.png";
import chow5 from "../images/projects/chow/chow-05.png";
import chow6 from "../images/projects/chow/chow-06.png";
import chow7 from "../images/projects/chow/chow-07.png";
import chow8 from "../images/projects/chow/chow-08.png";
import food1 from "../images/projects/food/food-01.png";
import food2 from "../images/projects/food/food-02.png";
import food3 from "../images/projects/food/food-03.png";
import lagos1 from "../images/projects/lagos/lagos-01.png";
import lagos2 from "../images/projects/lagos/lagos-02.png";
import lagos3 from "../images/projects/lagos/lagos-03.png";
import lagos4 from "../images/projects/lagos/lagos-04.png";
import bookdesktop1 from "../images/projects/bookdesktop/bookdesktop-01.png";
import bookdesktop2 from "../images/projects/bookdesktop/bookdesktop-02.png";
import bookdesktop3 from "../images/projects/bookdesktop/bookdesktop-03.png";
import bookdesktop4 from "../images/projects/bookdesktop/bookdesktop-04.png";
import bookdesktop5 from "../images/projects/bookdesktop/bookdesktop-05.png";
import bookdesktop6 from "../images/projects/bookdesktop/bookdesktop-06.png";
import bookdesktop7 from "../images/projects/bookdesktop/bookdesktop-07.png";
import bookdesktop8 from "../images/projects/bookdesktop/bookdesktop-08.png";



/* === Data === */
const PROJECTS = [
    {
    title: "BookMySpot",
    type: "mobile",
    images: [book1, book2, book3, book5, book6, book7, book8, book9],
    description:
      "A full-stack parking reservation platform built with React, Node.js, and MongoDB. Features include real-time availability, calendar-based bookings, user authentication, and a rating system. I developed custom REST APIs, implemented client-side form validation, and wrote tests using Jest and React Testing Library.",
    tags: ["React", "Node.js", "MongoDB", "REST APIs", "Jest", "Mobile-First Design"],
     caseStudy: "/bookmyspot-case-study"
  },
  {
    title: "CardioTrack",
    images: [health1, health2, health3, health4, health5, health6],
    type: "mobile",
    description:
      "A mobile health tracking app that estimates cardiovascular risk based on user inputs like diet, sleep, and activity. Built with React Native, it features data visualization, habit tracking, and personalized health insights. I focused on creating an intuitive interface with clear data presentation and smooth user flows.",
    tags: ["React Native", "Data Visualization", "Mobile Development", "Health Tech", "Firebase"],
  },
  {
    title: "Hotel Hive",
    images: [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8],
    type: "mobile",
    description:
      "A hotel booking mobile app built with React Native and Firebase. Users can browse hotels, view availability, and make reservations. I developed the complete UI, integrated Firebase for real-time data management, and built an admin panel for staff to manage bookings and customer information.",
    tags: ["React Native", "Firebase", "Mobile App", "Expo Go", "Admin Dashboard"],
  },
  {
    title: "BookMySpot - web",
    type: "desktop",
    images: [bookdesktop1, bookdesktop2, bookdesktop3, bookdesktop4, bookdesktop5, bookdesktop6, bookdesktop7, bookdesktop8],
    description:
      "The web version of BookMySpot, designed for desktop users with advanced features. Built with React, Node.js, and MySQL, it includes admin dashboards, analytics, role-based access control, and comprehensive booking management. I handled both frontend and backend development for a complete full-stack experience.",
    tags: ["React", "Node.js", "MySQL", "Admin Dashboards", "Full-Stack", "Responsive Design"],
    caseStudy: "/bookmyspot-case-study"
  },
  {
    title: "Chowdeck",
    type: "desktop",
    images: [chow1, chow2, chow3, chow4, chow5, chow6, chow7, chow8],
    description:
      "A concept redesign of a food delivery platform focused on improving the restaurant discovery and ordering experience. Built as a responsive web application, I reworked the UI architecture to make browsing and comparing restaurants faster and more intuitive, with improved search and filtering functionality.",
    tags: ["Web Design", "Responsive UI", "React", "User Flow", "Frontend Development"],
  },
  {
    title: "Group5",
    images: [food1, food2, food3],
    type: "mobile",
    description:
      "A collaborative food ordering app designed for group meals and team orders. Built with React Native, it allows multiple users to add items to a shared cart with real-time updates. I implemented the core ordering logic, real-time synchronization, and created a clean, accessible mobile interface.",
    tags: ["React Native", "Real-time Sync", "Mobile Development", "Collaborative Features", "Firebase"],
  },
  {
    title: "Lasgidi",
    type: "desktop",
    images: [lagos1, lagos2, lagos3, lagos4,],
    description:
      "A tourism and events website showcasing Lagos attractions. Built with HTML, CSS, and JavaScript, it features responsive design, smooth animations, and optimized performance across devices. I focused on clean code, cross-browser compatibility, and creating an engaging browsing experience for visitors.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Performance Optimization"],
  },
];

export default function Projects() {
   const location = useLocation();
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndices, setImageIndices] = useState([]);
  const viewportRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    setImageIndices(PROJECTS.map(() => 0));
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextImg(projectIndex);
      if (e.key === "ArrowLeft") prevImg(projectIndex);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [projectIndex, imageIndices]);

  // Handle URL parameter on component mount
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const projectParam = params.get('project');
  if (projectParam !== null) {
    const index = parseInt(projectParam, 10);
    if (!isNaN(index) && index >= 0 && index < PROJECTS.length) {
      setProjectIndex(index);
    }
  }
}, []);

const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

const prevProject = () =>
  setProjectIndex(i => clamp(i - 1, 0, PROJECTS.length - 1));

const nextProject = () =>
  setProjectIndex(i => clamp(i + 1, 0, PROJECTS.length - 1));

const goToProject = (i) =>
  setProjectIndex(clamp(i, 0, PROJECTS.length - 1));


  const setImg = (pi, val) =>
    setImageIndices(arr => {
      const copy = [...arr];
      copy[pi] = clamp(val, 0, PROJECTS[pi].images.length - 1);
      return copy;
    });
  const nextImg = (pi) => setImg(pi, (imageIndices[pi] ?? 0) + 1);
  const prevImg = (pi) => setImg(pi, (imageIndices[pi] ?? 0) - 1);

  const onSwipe = (pi, offsetX) => {
    const t = 120; // px threshold
    if (offsetX < -t) nextImg(pi);
    else if (offsetX > t) prevImg(pi);
  };


  const onThumbClick = (pi, i) => {
    setImg(pi, i);
    // wait for the image state to commit, then scroll
    requestAnimationFrame(() => {
      slideRefs.current[pi]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  };




  return (
    <section className="projects-page" id="projects">
       <div className="projects-header">
  <div className="projects-headline">
    <h1>My projects</h1>
  </div>
  <p className="muted">A showcase of my web and mobile development work.</p>
</div>

      {/* Desktop-only dots at top */}
      <div className="proj-dots-top" aria-label="Project navigation">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === projectIndex ? "active" : ""}`}
            onClick={() => goToProject(i)}
            aria-label={`Go to project ${i + 1} of ${PROJECTS.length}`}
          />
        ))}
        <span className="proj-count">{projectIndex + 1} / {PROJECTS.length}</span>
      </div>

      <div className="carousel">
        <button className="nav-cta left" onClick={prevProject} disabled={projectIndex === 0}>
          <ChevronLeft size={20} strokeWidth={3} />
          <span>Prev project</span>
        </button>

        <div className="viewport" ref={viewportRef}>
          <motion.div
            className="track"
            animate={{ translateX: `-${projectIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            {PROJECTS.map((p, pi) => {
              const idx = imageIndices[pi] ?? 0;
              return (
                <article key={p.title} className="slide">
                  <div className="slide-inner">
                    {/* LEFT: WHOLE COLUMN SWIPES IMAGES */}
                    <motion.div
                      className="media"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(_, info) => onSwipe(pi, info.offset.x)}
                      ref={(el) => (slideRefs.current[pi] = el)}
                    >
                      <div className={`device-frame ${p.type === "desktop" ? "desktop" : "mobile"}`}>
                        <img
                          key={idx}
                          src={p.images[idx]}
                          alt={`${p.title} screen ${idx + 1}`}
                          className="shot-cover"
                        />
                        <button
                          className="img-arrow left"
                          onClick={() => prevImg(pi)}
                          disabled={idx === 0}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={30} strokeWidth={2.5} />
                        </button>

                        <button
                          className="img-arrow right"
                          onClick={() => nextImg(pi)}
                          disabled={idx === p.images.length - 1}
                          aria-label="Next image"
                        >
                          <ChevronRight size={30} strokeWidth={2.5} />
                        </button>

                      </div>
                    </motion.div>

                    {/* RIGHT: text */}
                    <div className="info-card">
                      <div>
                        {/* project dots above title */}
                        <div className="proj-indicator">
                          <div className="proj-dots">
                            {PROJECTS.map((_, i) => (
                              <button
                                key={i}
                                className={`dot ${i === projectIndex ? "active" : ""}`}
                                onClick={() => goToProject(i)}
                                aria-label={`Go to project ${i + 1} of ${PROJECTS.length}`}
                              />
                            ))}
                          </div>
                          <span className="proj-count">{projectIndex + 1} / {PROJECTS.length}</span>
                        </div>

<div className="proj-title-row">
  <h2 className="project-title">{p.title}</h2>
  {p.caseStudy && (
    <Link className="case-link-edge" to={p.caseStudy}>
      View case study
    </Link>
  )}
</div>

                        <p className="desc">{p.description}</p>
                        <ul className="tags">{p.tags?.map(t => <li key={t}>{t}</li>)}</ul>
                      </div>
                      <div className="screens">
                        <h4>Screens</h4>
                        <div className="thumbs-right">
                          {p.images.map((img, i) => (
                            <button
                              key={i}
                              className={`thumb ${i === idx ? "active" : ""}`}
                              onClick={() => onThumbClick(pi, i)}
                              aria-label={`Show screen ${i + 1}`}
                            >
                              <img src={img} alt={`${p.title} ${i + 1}`} />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>


                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>

        <button className="nav-cta right" onClick={nextProject} disabled={projectIndex === PROJECTS.length - 1}>
          <span>Next project</span>
          <ChevronRight size={20} strokeWidth={3} />
        </button>
      </div>


    </section>
  );
}