import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="edu-section" id="education">
      <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
        Education
      </h2>

      <div className="edu-wrapper">
        <div className="edu-card">

          {/* Top Accent Bar */}
          <div className="edu-accent-bar"></div>

          <div className="edu-body">

            {/* Icon + Degree */}
            <div className="edu-icon-wrap">
              <div className="edu-icon-box">
                <i className="ti ti-school" aria-hidden="true"></i>
              </div>
              <h3 className="edu-degree">
                Bachelor of Science in Computer Science
              </h3>
            </div>

            {/* Year Badge */}
            <span className="edu-year-badge">2022 – 2026</span>

            {/* University */}
            <p className="edu-uni">
              Arid Agriculture University, Rawalpindi, Pakistan
            </p>

            <div className="edu-divider"></div>

            {/* Coursework */}
            <p className="edu-cw-label">Relevant Coursework</p>
            <div className="edu-tags">
              <span className="edu-tag">Web Technology</span>
              <span className="edu-tag">Web Engineering</span>
              <span className="edu-tag">Data Structures & Algorithms</span>
              <span className="edu-tag">Object-Oriented Programming</span>
              <span className="edu-tag">Database Systems</span>
              <span className="edu-tag">Software Engineering</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;