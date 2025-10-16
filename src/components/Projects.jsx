import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    title: "CardioTrack",
    images: [health1, health2, health3, health4, health5, health6],
    type: "mobile",
    description:
      "A mobile health app that helps users track their cardiovascular health and lifestyle habits. It estimates cardiovascular risk using user inputs like diet, sleep, and activity levels. I focused on creating a clean, friendly interface with clear feedback and easy navigation.",
    tags: ["Health App", "Data-Driven UI", "Habit Tracking", "Figma" , "Wireframing" ],
  },
  {
    title: "Hotel Hive",
    images: [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8],
    type: "mobile",
    description:
      "A mobile booking app designed to make finding and reserving hotel rooms fast and easy. I built a modern UI using React Native and Firebase.",
    tags: ["Hotel Booking", "Figma", "UI Design", "Information Architecture", "Usability Testing"],
  },
   {
    title: "BookMySpot",
    type: "mobile",
    images: [book1, book2, book3, book5, book6, book7, book8, book9],
    description:
      "A parking app that helps users find and reserve available parking spaces nearby. I worked on simplifying the user journey through user research, ensuring that each step feels intuitive and fast. The prototype focuses on accessibility and real-world usability.",
    tags: ["Parking App", "User Journey", "Low/Hi-Fidelity Prototypes", "Maps & Geolocation"],
  },
       {
    title: "BookMySpot - web",
    type: "desktop",
    images: [bookdesktop1, bookdesktop2, bookdesktop3, bookdesktop4, bookdesktop5, bookdesktop6, bookdesktop7, bookdesktop8],
    description:
      "The web version of BookMySpot, built for desktop users who prefer a larger interface. It mirrors the mobile flow but adds advanced admin and analytics dashboards. I designed and developed it using React, Node.js, and MySQL for a full-stack experience.",
    tags: ["Admin Dashboards", "Responsive Web Design", "Forms & Validation", "Role-based UI"],
  },
     {
    title: "Chowdeck",
    type: "desktop",
    images: [chow1, chow2, chow3, chow4, chow5, chow6, chow7, chow8],
    description:
      "A concept redesign of a food delivery platform aimed at improving user flow and overall brand feel. I reworked the restaurant discovery experience, making it easier for users to browse, compare, and order their meals quickly.",
    tags: ["Food Delivery", "Figma", "Content Strategy", "User Flow", "Web"],
  },
     {
    title: "Group5",
    images: [food1, food2, food3],
    type: "mobile",
    description:
      "A collaborative food ordering app designed for group or team meals. The goal was to make coordinating shared orders effortless while keeping the UI simple and visually consistent across screens.",
    tags: ["Real-time UX", "Mobile-First", "Figma", "Accessibility", "Usability Testing"],
  },
     {
    title: "Lasgidi",
    type: "desktop",
    images: [lagos1, lagos2, lagos3, lagos4,],
    description:
      "A tourism and events website showcasing the best of Lagos. Built with HTML and CSS, it focuses on responsive design and smooth navigation across devices, creating an engaging browsing experience for visitors.",
    tags: ["Responsive Design", "Figma", "Information Architecture", "Content Design"],
  },
];
export default function Projects() {
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
      if (e.key === "ArrowLeft")  prevImg(projectIndex);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [projectIndex, imageIndices]);

  const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
  const prevProject = () => setProjectIndex(i => clamp(i - 1, 0, PROJECTS.length - 1));
  const nextProject = () => setProjectIndex(i => clamp(i + 1, 0, PROJECTS.length - 1));
  const goToProject = (i) => setProjectIndex(clamp(i, 0, PROJECTS.length - 1));

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
        <h1>My projects</h1>
        <p className="muted">A list of all my previous work.</p>
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

    <h2>{p.title}</h2>
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