import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import './Profile.css';

const roles = [
  'Full Stack Developer',
  'React.js Developer',
  'Node.js Developer',
  'UI/UX Enthusiast',
];

function Profile() {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="profile-section container animate-fade-in" id="profile">

      {/* ── Left Content ── */}
      <div className="profile-content">
        <p className="profile-eyebrow">Full Stack Developer</p>
        <h1 className="name">Mohsin <em>Ishfaq</em></h1>
        <div className="profile-divline"></div>

        {/* Typing Role */}
        <h3 className="role">
          {displayed}
          <span className="cursor-blink">|</span>
        </h3>

        <p className="bio text-muted">
          Highly motivated Full-Stack Web Developer with hands-on experience in
          building scalable, responsive, and user-focused web applications.
          Proficient in React.js for crafting dynamic frontends and Node.js for
          robust backend logic. Solid understanding of database architecture,
          RESTful API integration, and clean code principles. Backed by practical
          industry experience through a professional internship, I am passionate
          about turning complex problems into seamless digital solutions.
        </p>

        {/* Tech Tags */}
        <div className="profile-tags">
          <span className="profile-tag">React.js</span>
          <span className="profile-tag">Node.js</span>
          <span className="profile-tag">MongoDB</span>
          <span className="profile-tag">Express</span>
          <span className="profile-tag">Tailwind CSS</span>
          <span className="profile-tag">REST API</span>
        </div>

        {/* Buttons & Icons */}
        <div className="social-links">
          <a href="#contact" className="social-btn primary">
            <Mail size={18} /> Contact Me
          </a>
          <a href="/Mohsin_CV.pdf" download className="social-btn secondary">
            ↓ Download CV
          </a>
          <a href="https://github.com/Mosiiikhan" className="social-icon" target="_blank" rel="noreferrer">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/mohsin-ishfaq-2226b6299" className="social-icon" target="_blank" rel="noreferrer">
            <Linkedin size={22} />
          </a>
          <a href="tel:+923435520230" className="social-icon">
            <Smartphone size={22} />
          </a>
        </div>
      </div>

      {/* ── Right — Circular Image ── */}
      <div className="profile-image-container animate-float">
        <div className="image-wrapper glow-effect">
          <div className="animated-border"></div>
          <div className="avatar-placeholder" style={{ padding: '6px' }}>
            <img
              src="/Mohsin.jpeg"
              alt="Mohsin Ishfaq"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </div>
        <div className="floating-badge badge-1 glass-card">
          <span>🌐</span> Web Developer
        </div>
        <div className="floating-badge badge-2 glass-card">
          <span>⚡</span> React.js
        </div>
      </div>

    </section>
  );
}

export default Profile;