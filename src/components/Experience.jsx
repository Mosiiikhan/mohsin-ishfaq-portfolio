import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    return (
        <section className="experience-section container" id="experience">
            <h2 className="section-title gradient-text">Professional Experience</h2>

            <div className="timeline">
                <div className="timeline-item glass-card animate-fade-in">
                    <div className="timeline-icon">
                        <Briefcase size={20} />
                    </div>
                    <div className="timeline-content">
                        <h3 className="job-title">FullStack Web Developer</h3>
                        <h4 className="company">MoroSoft Technologies — Rawalpindi, Pakistan</h4>
                        <span className="duration text-muted">Jan 2026 – Present</span>

                        <ul className="job-description">
    <li>Developed and maintained responsive web applications using React.js and modern JavaScript</li>
    <li>Built robust and scalable server-side logic and RESTful APIs using Node.js and Express.</li>
    <li>Designed intuitive, mobile-first user interfaces using Tailwind CSS, Bootstrap, and Material-UI (MUI).</li>
    <li>Implemented state management using Redux Toolkit / Context API for seamless data flow across components.</li>
    <li>Managed data persistence by designing and optimizing database schemas in MongoDB / MySQL / PostgreSQL.</li>
    <li>Integrated third-party APIs, authentication systems (JWT/OAuth), and payment gateways.</li>
    <li>Optimized frontend performance, including lazy loading, API caching, and reducing bundle sizes for faster page loads.</li>
    <li>Utilized Git/GitHub for version control and collaborated with team members using Agile/Scrum methodologies.</li>
    <li>Followed clean code practices, wrote reusable components, and ensured a scalable project architecture.</li>
</ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
