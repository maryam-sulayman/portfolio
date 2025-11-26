import React, { useState } from "react";
import "../styles/CaseStudy.css";

// images
import img01 from "../images/projects/casestudy/olivia.png";
import img02 from "../images/projects/casestudy/panashe.png";
import img03 from "../images/projects/casestudy/priyah.png";

import journey1 from "../images/projects/casestudy/journey1.png";
import journey2 from "../images/projects/casestudy/journey2.png";
import journey3 from "../images/projects/casestudy/journey3.png";

import caseheader from "../images/projects/casestudy/case-header.png";

import sitemap from "../images/projects/casestudy/sitemap.png";

import lowfi from "../images/projects/casestudy/lowfidelity.png";
import lowfi1 from "../images/projects/casestudy/lowfidelity1.png";
import lowfi2 from "../images/projects/casestudy/lowfidelity2.png";
import lowfi3 from "../images/projects/casestudy/lowfidelity3.png";
import lowfi4 from "../images/projects/casestudy/lowfidelity4.png";

import hifi from "../images/projects/casestudy/hifi.png";
import hifi1 from "../images/projects/casestudy/hifi1.png";
import hifi2 from "../images/projects/casestudy/hifi2.png";

import hifi4 from "../images/projects/book/book-02.png";
import hifi5 from "../images/projects/book/book-03.png";
import hifi6 from "../images/projects/book/book-05.png";
import hifi7 from "../images/projects/book/book-06.png";
import hifi8 from "../images/projects/book/book-07.png";
import hifi9 from "../images/projects/book/book-08.png";
import hifi10 from "../images/projects/book/book-09.png";
import hifi22 from "../images/projects/book/book-12.png";

import hifi12 from "../images/projects/casestudy/hifi4.png";
import hifi13 from "../images/projects/casestudy/hifi5.png";
import hifi15 from "../images/projects/casestudy/hifi7.png";
import hifi16 from "../images/projects/casestudy/hifi8.png";
import hifi17 from "../images/projects/casestudy/hifi9.png";
import hifi18 from "../images/projects/casestudy/hifi10.png";
import hifi20 from "../images/projects/casestudy/hifi12.png";
import hifi23 from "../images/projects/casestudy/hifi15.png";

import mainLogo from "../images/projects/casestudy/logo.png";
import iteration1 from "../images/projects/casestudy/logo.jpeg";
import iteration2 from "../images/projects/casestudy/logo2.jpeg";
import iteration3 from "../images/projects/casestudy/logo3.jpeg";

import redesign from "../images/projects/casestudy/redesign.png";
import redesign1 from "../images/projects/casestudy/redesign2.png";

import story1 from "../images/projects/casestudy/story1.png";
import story2 from "../images/projects/casestudy/story2.png";

/* === ICONS === */
function IconZoomIn(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`lb__icon ${props.className || ""}`}
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M11 8v6M8 11h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.5 16.5L21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconZoomOut(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`lb__icon ${props.className || ""}`}
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 11h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.5 16.5L21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconClose(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`lb__icon lb__icon--close ${props.className || ""}`}
      aria-hidden="true"
    >
      <path
        d="M7 7l10 10M17 7L7 17"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
function IconChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" className="lb__chevron" aria-hidden="true">
      <path
        d="M15 19L8 12l7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className="lb__chevron" aria-hidden="true">
      <path
        d="M9 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* === SCROLL LOCK FOR LIGHTBOX === */
function useScrollLock(open) {
  React.useEffect(() => {
    if (!open) return;

    const body = document.body;
    const html = document.documentElement;
    const y = window.scrollY;
    const sbw = window.innerWidth - html.clientWidth;

    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    if (sbw) body.style.paddingRight = `${sbw}px`;
    body.style.overscrollBehavior = "none";

    return () => {
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      const restoreY = -parseInt(body.style.top || "0", 10) || 0;

      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.paddingRight = "";
      body.style.overscrollBehavior = "";

      window.scrollTo(0, restoreY);
      html.style.scrollBehavior = prev;
    };
  }, [open]);
}

/* === LIGHTBOX === */
function ImageModal({ open, onClose, items = [], index = 0, onPrev, onNext }) {
  useScrollLock(open);
  const [zoomed, setZoomed] = React.useState(false);
  const cur = items[index] || {};
  const canCycle = items.length > 1;

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (canCycle && e.key === "ArrowRight") onNext();
      if (canCycle && e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, canCycle, onNext, onPrev, onClose]);

  const startX = React.useRef(null);
  const onTouchStart = (e) => {
    if (!zoomed) startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (zoomed || startX.current == null || !canCycle) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? onNext : onPrev)();
    startX.current = null;
  };

  if (!open) return null;

  return (
    <div className="lb" role="dialog" aria-modal="true">
      <div className="lb__overlay" />

      <div className="lb__bar">
        <div className="lb__right">
          <button
            className="lb__btn"
            onClick={() => setZoomed((z) => !z)}
            aria-label={zoomed ? "Zoom out" : "Zoom in"}
          >
            {zoomed ? <IconZoomOut /> : <IconZoomIn />}
          </button>
          <button className="lb__btn" onClick={onClose} aria-label="Close">
            <IconClose />
          </button>
        </div>
      </div>

      <div
        className={`lb__stage ${zoomed ? "is-zoomed" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {canCycle && !zoomed && (
          <>
            <button
              className="lb__arrow lb__arrow--left"
              aria-label="Previous image"
              onClick={onPrev}
            >
              <IconChevronLeft />
            </button>
            <button
              className="lb__arrow lb__arrow--right"
              aria-label="Next image"
              onClick={onNext}
            >
              <IconChevronRight />
            </button>
          </>
        )}

        <img
          className="lb__img"
          src={cur.src}
          alt={cur.caption || "Preview"}
          draggable={false}
          onClick={() => setZoomed((z) => !z)}
        />
        {(cur.caption || canCycle) && <p className="lb__cap">{cur.caption}</p>}
      </div>
    </div>
  );
}

export default function CaseStudy() {
  const [modal, setModal] = useState({
    open: false,
    items: [],
    index: 0,
    id: 0,
  });

  const openGallery = (items, startIndex = 0) =>
    setModal((m) => ({ open: true, items, index: startIndex, id: m.id + 1 }));
  const openSingle = (src, caption = "") =>
    openGallery([{ src, caption }], 0);
  const closeModal = () =>
    setModal((m) => ({
      ...m,
      open: false,
    }));
  const next = () =>
    setModal((m) => ({
      ...m,
      index: (m.index + 1) % m.items.length,
    }));
  const prev = () =>
    setModal((m) => ({
      ...m,
      index: (m.index - 1 + m.items.length) % m.items.length,
    }));

  /* ===== Section arrays ===== */
  const personas = [
    { src: img01, caption: "Image 1: Driver (visual impairment)." },
    { src: img02, caption: "Image 2: Parking space owner." },
    { src: img03, caption: "Image 3: Administrator." },
  ];

  const journeys = [
    { src: journey1, caption: "Image 1: Olivia's journey booking a spot" },
    { src: journey2, caption: "Image 2: Panashe's journey listing her driveway" },
    { src: journey3, caption: "Image 3: Priyah's journey resolving a dispute" },
  ];

  const wireframes = [
    { src: lowfi, caption: "Image 1: Sign up/Sign in." },
    { src: lowfi1, caption: "Image 2: Dashboard." },
    { src: lowfi2, caption: "Image 3: Search with map." },
    { src: lowfi3, caption: "Image 4: Listing a spot." },
    { src: lowfi4, caption: "Image 5: Booking." },
  ];

  const finalDesign = [
    { src: hifi, caption: "Image 1: Full dashboard." },
    { src: hifi2, caption: "Image 2: Booking flow with simple steps." },
    { src: hifi1, caption: "Image 3: Search page." },
    { src: hifi17, caption: "Image 4: Parking space details." },
  ];

  const mobileDesign = [
    { src: hifi20, caption: "Image 1: Sign up." },
    { src: hifi4, caption: "Image 2: Sign in." },
    { src: hifi16, caption: "Image 3: Password reset." },
    { src: hifi15, caption: "Image 4: Check email." },
    { src: hifi22, caption: "Image 5: Settings." },
    { src: hifi5, caption: "Image 6: Dashboard." },
    { src: hifi6, caption: "Image 7: Space details." },
    { src: hifi12, caption: "Image 8: Space details." },
    { src: hifi13, caption: "Image 9: Add ons." },
    { src: hifi8, caption: "Image 10: Payment." },
    { src: hifi7, caption: "Image 11: Distance." },
    { src: hifi9, caption: "Image 12: Profile." },
    { src: hifi10, caption: "Image 13: Edit Profile." },
    { src: hifi18, caption: "Image 14: History." },
    { src: hifi23, caption: "Image 15: Notifications." },
  ];

  const redesignPair = [
    { src: redesign, caption: "Image 1: Long scroll before reaching content." },
    {
      src: redesign1,
      caption: "Image 2: Interactive bookable grid with fewer steps.",
    },
  ];

  const brandIterations = [
    { src: iteration1, caption: "Image 1: Iteration 1." },
    { src: iteration2, caption: "Image 2: Iteration 2." },
    { src: iteration3, caption: "Image 3: Iteration 3." },
  ];

  const storyBoard = [
    { src: story1, caption: "Image 1: Storyboard A." },
    { src: story2, caption: "Image 2: Storyboard B." },
  ];

  const sectionLinks = [
    { id: "overview", label: "Overview" },
    { id: "personas", label: "Personas" },
    { id: "journeys", label: "User journeys" },
    { id: "ia", label: "Information architecture" },
    { id: "wireframes", label: "Wireframes" },
    { id: "redesign", label: "Dashboard redesign" },
    { id: "final", label: "Mobile & final design" },
    { id: "extras", label: "Extras" },
    { id: "takeaways", label: "Key takeaways" },
  ];

  const [activeSection, setActiveSection] = useState("overview");
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [showMobileToc, setShowMobileToc] = useState(false);

  /* === Scroll spy for active section === */
React.useEffect(() => {
  const ids = sectionLinks.map((link) => link.id);

  const handleScroll = () => {
    const line = 110; // roughly where your dropdown/header sits
    let current = ids[0];

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const isNearLine = rect.top <= line + 20;  // allow a little buffer
      const isStillOnScreen = rect.bottom >= line;

      if (isNearLine && isStillOnScreen) {
        current = id;
        break; // first section crossing the line wins
      }
    }

    if (current === "final-design") current = "final";
    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // initial

  return () => window.removeEventListener("scroll", handleScroll);
}, [sectionLinks]);


  /* === Toggle mobile TOC + fade header === */
  React.useEffect(() => {
    const header = document.querySelector(".site-header");
    const overview = document.getElementById("overview");
    if (!overview) return;

    const getTriggerY = () => {
      const headerHeight = header?.offsetHeight || 56;
      // show TOC a bit before overview fully reaches under header
      return overview.offsetTop - headerHeight - 40;
    };

    let triggerY = getTriggerY();

    const handleScroll = () => {
      if (window.innerWidth > 1000) {
        setShowMobileToc(false);
        header?.classList.remove("is-hidden");
        return;
      }

      const visible = window.scrollY >= triggerY;
      setShowMobileToc(visible);
      if (header) header.classList.toggle("is-hidden", visible);
    };

    const handleResize = () => {
      triggerY = getTriggerY();
      handleScroll();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      const h = document.querySelector(".site-header");
      h?.classList.remove("is-hidden");
    };
  }, []);

  const currentLabel =
    sectionLinks.find((s) => s.id === activeSection)?.label || "Overview";

  return (
    <article className="cs-article">
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero__inner">
          <div className="cs-hero-header">
            <p className="eyebrow">BookMySpot · Case Study</p>
            <h1 className="cs-title">
              Connecting drivers with parking owners through user-centred design
            </h1>
          </div>
        </div>
      </header>

      {/* HERO VISUAL PANEL */}
      <section className="cs-hero-panel">
        <div className="cs-stage">
          <img src={caseheader} alt="BookMySpot UI" className="case-header" />

          <div className="cs-meta">
            <div>
              <span className="label">My Role</span>
              <span>User Researcher</span>
              <span>UX/UI Designer</span>
              <span>Developer</span>
            </div>
            <div>
              <span className="label">Timeline</span>
              <span>12 weeks</span>
            </div>
            <div>
              <span className="label">Tools</span>
              <span>Figma</span>
              <span>React</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="cs-layout">
        {/* DESKTOP SIDEBAR */}
        <aside className="cs-aside">
          <nav className="cs-toc cs-toc--desktop">
            {sectionLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? "is-active" : ""}
                onClick={() => setActiveSection(link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* MAIN COLUMN */}
        <main className="cs-main">
          {/* MOBILE / TABLET DROPDOWN NAV */}
          <div
            className={`cs-toc-dropdown ${
              showMobileToc ? "is-visible" : ""
            }`}
          >
            <button
              type="button"
              className="cs-toc-toggle"
              onClick={() => setIsTocOpen((open) => !open)}
            >
              <span className="cs-toc-label">{currentLabel}</span>

              <svg
                className={`cs-toc-arrow ${isTocOpen ? "is-open" : ""}`}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 6v8m0 0-4-4m4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

           {isTocOpen && (
  <nav className="cs-toc-sheet">
    {sectionLinks.map((link) => (
      <button
        key={link.id}
        type="button"
        className={activeSection === link.id ? "is-active" : ""}
        onClick={() => {
          const el = document.getElementById(link.id);
          if (el) {
            const headerOffset = 430; 
            const rect = el.getBoundingClientRect();
            const scrollTop = window.scrollY+ rect.top - headerOffset;

            window.scrollTo({
              top: scrollTop,
              behavior: "smooth",
            });
          }

          setIsTocOpen(false);
          setActiveSection(link.id); 
        }}
      >
        {link.label}
      </button>
    ))}
  </nav>
)}

          </div>

          {/* OVERVIEW */}
          <section id="overview" className="cs-section">
            <h2>Project overview</h2>
            <div className="overview-split">
              <div className="row">
                <h3>The problem</h3>
                <p>
                  Drivers often waste time searching for parking, while property
                  owners have unused spaces sitting idle. I set out to design a
                  platform that would solve both problems through thoughtful,
                  user-centered design.
                </p>
              </div>
              <div className="row">
                <h3>The goal</h3>
                <p>
                  The goal was to design a platform that connects drivers and
                  parking owners in a way that works for both sides. Drivers
                  needed to be able to find and book parking quickly, while
                  owners needed an easy way to rent out their spaces and keep
                  track of bookings.
                </p>
              </div>
              <div className="row">
                <h3>My role</h3>
                <p>
                  I worked across the full design process: researching pain
                  points, mapping user journeys, creating wireframes, designing
                  the interface, and running usability tests. My aim throughout
                  was clarity, accessibility, and a seamless experience across
                  both desktop and mobile.
                </p>
              </div>
            </div>
          </section>

          {/* PERSONAS */}
          <section id="personas" className="cs-section">
            <h2>User personas</h2>
            <p className="section-intro">
              To design for real users, I started by understanding their needs.
              Through interviews and surveys, I identified three key user types,
              each with unique goals and challenges. One persona had a visual
              impairment, so I ensured accessibility was applied into the design
              from day one.
            </p>

            <div className="persona-grid">
              {personas.map((p, i) => (
                <figure key={i} className="figure persona-card">
                  <button
                    className="persona-btn"
                    onClick={() => openGallery(personas, i)}
                  >
                    <img src={p.src} alt={p.caption} />
                  </button>
                  <figcaption>{p.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* JOURNEYS */}
          <section id="journeys" className="cs-section">
            <h2>User journey maps</h2>
            <p className="section-intro">
              Walking in your users&apos; shoes reveals friction points you
              might be unaware of. I mapped out three user journeys to identify
              pain points, expectations, and opportunities for improvement.
            </p>

            <div className="journey-grid">
              {journeys.map((j, i) => (
                <figure
                  key={i}
                  className="figure journey-card persona-card"
                  onClick={() => openGallery(journeys, i)}
                >
                  <img src={j.src} alt={j.caption} />
                  <figcaption>{j.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* IA */}
          <section id="ia" className="cs-section">
            <h2>Information architecture</h2>
            <p className="section-intro">
              Good architecture for this platform was extremely important. I
              organised the information of the site in a way that allowed users
              find what they needed quickly, whether they&apos;re booking a
              spot, listing one, or managing the platform.
            </p>

            <figure
              className="figure ia-card persona-card"
              onClick={() =>
                openSingle(
                  sitemap,
                  "Sitemap showing Driver / Owner / Admin dashboards and supporting pages."
                )
              }
            >
              <img src={sitemap} alt="IA diagram / sitemap" />
              <figcaption>
                Image 1: Hierarchical navigation supports multiple user roles.
              </figcaption>
            </figure>
          </section>

          {/* WIREFRAMES */}
          <section id="wireframes" className="cs-section">
            <h2>Low-fidelity wireframes</h2>
            <p className="section-intro">
              These annotated low-fidelity sketches helped validate the
              structure of the BookMySpot site with our users before investing
              in the final visual design.
            </p>

            <div className="wire-masonry">
              {wireframes.map((w, i) => (
                <figure
                  key={i}
                  className="figure wire-piece"
                  onClick={() => openGallery(wireframes, i)}
                >
                  <img src={w.src} alt={w.caption} />
                  <figcaption>{w.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* DASHBOARD REDESIGN */}
          <section id="redesign" className="cs-section">
            <h2>Dashboard redesign</h2>
            <p className="section-intro">
              The dashboard was redesigned to make parking spaces easier to view
              and book at a glance. In the earlier version, users needed to go
              through multiple steps before seeing available spots. The new
              layout introduced a bookable grid which allowed users to compare
              locations, prices, and parking types instantly.
            </p>

            <div className="comparison comparison--simple">
              <figure
                className="figure compare-card persona-card compare-card--before"
                onClick={() => openGallery(redesignPair, 0)}
              >
                <span className="ribbon before">Before</span>
                <img
                  src={redesignPair[0].src}
                  alt={redesignPair[0].caption}
                />
                <figcaption>{redesignPair[0].caption}</figcaption>
              </figure>

              <div className="simple-arrow">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 12h16m-6-6l6 6-6 6" />
                </svg>
              </div>

              <figure
                className="figure compare-card persona-card compare-card--after"
                onClick={() => openGallery(redesignPair, 1)}
              >
                <span className="ribbon after">After</span>
                <img
                  src={redesignPair[1].src}
                  alt={redesignPair[1].caption}
                />
                <figcaption>{redesignPair[1].caption}</figcaption>
              </figure>
            </div>
          </section>

          {/* MOBILE DESIGN */}
          <section id="final" className="cs-section">
            <h2>Mobile design</h2>
            <p className="section-intro">
              The mobile design was refined to minimize steps and make the
              booking process easy. I focused on simplifying navigation and
              interactions for quick parking searches and bookings.
            </p>

            <div className="cs-carousel-row mobile-grid">
              {mobileDesign.map((m, i) => (
                <figure
                  key={i}
                  className="figure compare-card persona-card cs-carousel-item"
                  onClick={() => openGallery(mobileDesign, i)}
                >
                  <img src={m.src} alt={m.caption || "Mobile screen"} />
                  <figcaption>{m.caption || "Mobile screen"}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* FINAL DESIGN */}
          <section id="final-design" className="cs-section">
            <h2>Final design</h2>
            <p className="section-intro">
              The final design focused on clarity, accessibility, and a seamless
              user experience. Key features included a simplified booking flow,
              clear progress indicators, and an easy-to-use dashboard for both
              drivers and parking owners.
            </p>

            <div className="wire-masonry">
              {finalDesign.map((f, i) => (
                <figure
                  key={i}
                  className="figure wire-piece"
                  onClick={() => openGallery(finalDesign, i)}
                >
                  <img src={f.src} alt={f.caption} />
                  <figcaption>{f.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* EXTRAS */}
          <section id="extras" className="extras cs-section">
            <h2>Extras</h2>

            <div className="cs-section">
              <h3>Storyboard creation</h3>
              <p className="section-intro">
                As part of my design exploration, I also created a storyboard to
                visualize the real-world problem BookMySpot aims to solve. It
                highlights the pain points of both drivers searching for parking
                and owners with unused spaces, setting the foundation for the
                product&apos;s purpose.
              </p>

              <div className="cs-carousel-row">
                {storyBoard.map((f, i) => (
                  <figure
                    key={i}
                    className="figure wire-piece cs-carousel-item"
                    onClick={() => openGallery(storyBoard, i)}
                  >
                    <img src={f.src} alt={f.caption} />
                    <figcaption>{f.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* BRAND */}
            <section id="brand" className="cs-section">
              <h3>Logo design</h3>
              <p className="section-intro">
                The logo went through several layout and color explorations.
                After testing different combinations, I chose navy blue
                (#061031) for its professional tone, appearance, and strong
                contrast on both light and dark backgrounds.
              </p>

              <div className="brand-grid logo-grid">
                <figure
                  className="figure brand-card persona-card logo-main"
                  onClick={() =>
                    openSingle(
                      mainLogo,
                      "Final logo – combines locator pin + car symbol."
                    )
                  }
                >
                  <img src={mainLogo} alt="Final BMS logo" />
                  <figcaption>
                    Image 1: Final logo combining a locator pin with a car icon.
                  </figcaption>
                </figure>

                <div className="logo-iterations">
                  {brandIterations.map((b, i) => (
                    <figure
                      key={i}
                      className="figure brand-card persona-card"
                      onClick={() => openGallery(brandIterations, i)}
                    >
                      <img src={b.src} alt={b.caption} />
                      <figcaption>{b.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          </section>

          {/* LEARNINGS */}
          <section id="takeaways" className="takeaways cs-section">
            <h2>Key takeaways</h2>
            <p className="section-intro">
              Three important lessons from this project that shaped how I
              approach design:
            </p>

            <div className="tw-grid">
              <article className="tw-card">
                <div className="tw-card-head">
                  <span className="tw-step">01</span>
                  <h3>Accessibility from day one</h3>
                </div>
                <p>
                  Designing with contrast, structure and readability in mind
                  from the start ensured the platform was usable for everyone,
                  including those with visual impairments. <br />
                  Early accessibility checks prevented costly redesigns later.
                </p>
              </article>

              <article className="tw-card">
                <div className="tw-card-head">
                  <span className="tw-step">02</span>
                  <h3>Less is more</h3>
                </div>
                <p>
                  Replacing the static hero with an interactive booking grid let
                  users discover and reserve nearby spots directly from the
                  landing view. <br />
                  This reduced the number of steps to complete a booking,
                  improved feature discoverability during testing, and increased
                  engagement.
                </p>
              </article>

              <article className="tw-card">
                <div className="tw-card-head">
                  <span className="tw-step">03</span>
                  <h3>Test early and often</h3>
                </div>
                <p>
                  Small refinements based on user feedback made a big
                  difference. Regular usability tests helped identify pain
                  points and areas for improvement, ensuring the final design
                  truly met user needs.
                </p>
              </article>
            </div>
          </section>
        </main>
      </div>

      {/* MODAL */}
      <ImageModal
        key={modal.id}
        open={modal.open}
        onClose={closeModal}
        items={modal.items}
        index={modal.index}
        onPrev={prev}
        onNext={next}
      />
    </article>
  );
}
