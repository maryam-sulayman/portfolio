import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Copy, Check, MapPin } from "lucide-react";
import "../styles/Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const email = "muhammedmariam80@yahoo.co.uk";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h1>Contact</h1>
        <p className="muted">
          I’m currently open to UX/UI roles and freelance work. Prefer email or LinkedIn -
          I usually reply within 24 hours.
        </p>
      </div>

      <div className="contact-grid">
        {/* LEFT – Info card */}
        <motion.aside
          className="card info-card info-card-contact"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Let’s connect 😊</h3>

          <ul className="info-list">
            <li>
              <Mail size={18} />
              <a href={`mailto:${email}`}>{email}</a>
              <button className="copy-btn" onClick={copyEmail} aria-label="Copy email">
                {copied ? <Check size={16} className="copy-icon"/> : <Copy size={16} className="copy-icon"/>}
              </button>
            </li>
            <li>
              <Phone size={18} />
              <a href="tel:+447514853298">+44 7514 853 298</a>
            </li>
            <li>
              <MapPin size={18} />
              <span>London, UK • GMT</span>
            </li>
          </ul>

          <div className="socials">
            <a
              className="social-btn"
              href="https://www.linkedin.com/in/maryam-sulayman-4484601b3/"
              target="_blank" rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} /> <span>LinkedIn</span>
            </a>
            <a
              className="social-btn"
              href="https://github.com/maryam-sulayman?tab=repositories"
              target="_blank" rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} /> <span>GitHub</span>
            </a>
            <a className="social-btn" href={`mailto:${email}`} aria-label="Email">
              <Mail size={18} /> <span>Email</span>
            </a>
          </div>

          <div className="availability">
            <span className="dot" /> Available for roles & collaborations
          </div>
        </motion.aside>

        {/* RIGHT – Contact form */}
        <motion.form
          className="card form-card"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >


          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: "none" }}>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
                </p>

              <input id="name" name="name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">Subject (optional)</label>
            <input id="subject" name="subject" type="text"  />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Tell me about your project…" required />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">Send message</button>
            <a className="btn-ghost" href={`mailto:${email}?subject=Hello%20Maryam`}>
              Email instead
            </a>
          </div>

          {sent && <div className="toast success">Thanks! I’ll get back to you soon.</div>}
        </motion.form>
      </div>
    </section>
  );
}
