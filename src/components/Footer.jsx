import "../styles/Footer.css";

export default function Footer() {
  return (
   <footer className="site-footer">
  <div className="footer-inner">
    <div className="brand">© {new Date().getFullYear()} Maryam Sulayman</div>

    <nav className="footer-links">
      <a href="mailto:muhammedmariam80@yahoo.co.uk">Email</a>
      <a href="https://www.linkedin.com/in/maryam-sulayman-4484601b3/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </nav>
  </div>
</footer>

  );
}
