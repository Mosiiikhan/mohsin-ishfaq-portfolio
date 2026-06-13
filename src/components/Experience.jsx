import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
  Professional Experience
</h2>
      <div className="timeline">
        <div className="timeline-item">

          {/* Top Accent Bar */}
          <div className="card-accent-bar"></div>

          <div className="card-body">

            {/* Header Row */}
            <div className="job-header">
              <h3 className="job-title">FullStack Web Developer</h3>
              <div className="live-badge">
                <span className="live-dot"></span>
                <span>Live</span>
              </div>
            </div>

            <p className="company">
              MoroSoft Technologies — Rawalpindi, Pakistan
            </p>

            <div className="card-divider"></div>

            {/* Date Row */}
            <div className="date-row">
              <span className="duration">Jan 2026 – Present</span>
              <span className="date-right">Jan 2026 – Present</span>
            </div>

            {/* Tech Tags */}
            <div className="tech-row">
              <span className="tech-tag tag-react">React.js</span>
              <span className="tech-tag tag-node">Node.js</span>
              <span className="tech-tag tag-mongo">MongoDB</span>
              <span className="tech-tag tag-express">Express</span>
            </div>

            {/* Two-Column Description */}
            <ul className="job-description">
              <li>Developed responsive web apps using React.js and modern JavaScript</li>
              <li>Built scalable RESTful APIs using Node.js and Express</li>
              <li>Designed mobile-first UIs with Tailwind CSS, Bootstrap, and MUI</li>
              <li>Implemented Redux Toolkit / Context API state management</li>
              <li>Managed MongoDB, MySQL and PostgreSQL databases</li>
              <li>Integrated JWT/OAuth auth systems and payment gateways</li>
              <li>Optimized performance with lazy loading and API caching</li>
              <li>Collaborated via Git/GitHub using Agile/Scrum methodologies</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;