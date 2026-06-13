import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Al-Quran Islamic Institute Website',
        description: 'A complete, responsive web platform built for an Islamic institute. Features dynamic course enrollment, event management, integrated prayer timings, and a clean user dashboard for students and admins.',
        tags: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        accent: '#3b82f6',
        iconBg: 'linear-gradient(135deg, #1e40af, #3b82f6)',
        iconShadow: '#3b82f6',
        iconEmoji: '🕌',
        link: '#',
        github: '#'
    },
    {
        id: 2,
        title: 'BIIT Academic Calendar & Scheduler',
        description: 'An academic management tool featuring automated event scheduling, exam/holiday tracking, and role-based access control for students and faculty with strict version and flow management.',
        tags: ['React.js', 'Node.js', 'Express', 'SQL / Database Design'],
        gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #4c1d95 100%)',
        accent: '#8b5cf6',
        iconBg: 'linear-gradient(135deg, #4c1d95, #8b5cf6)',
        iconShadow: '#8b5cf6',
        iconEmoji: '📅',
        link: '#',
        github: '#'
    },
    {
        id: 3,
        title: 'Pharmacy Management System',
        description: 'A robust web application designed to track medicine stock, expiry dates, and billing. Features real-time inventory updates, search/filter algorithms, and low-stock alerts.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Context API / Redux'],
        gradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #0d9488 100%)',
        accent: '#10b981',
        iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
        iconShadow: '#10b981',
        iconEmoji: '💊',
        link: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'Sports Inventory Management System',
        description: 'A web-based system for tracking and managing sports equipment issuance, returns, and stock status. Includes comprehensive data logging and analytical reporting for inventory audits.',
        tags: ['React.js', 'Node.js', 'Express', 'Bootstrap / Material-UI'],
        gradient: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #c2410c 100%)',
        accent: '#f97316',
        iconBg: 'linear-gradient(135deg, #7c2d12, #f97316)',
        iconShadow: '#f97316',
        iconEmoji: '🏆',
        link: '#',
        github: '#'
    }
];

function Projects() {
    return (
        <section className="projects-section container" id="projects">
            <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
  Technical Projects
</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">

                        <div className="project-banner" style={{ background: project.gradient }}>
                            <div
                                className="project-icon-wrapper"
                                style={{
                                    background: project.iconBg,
                                    boxShadow: `0 8px 32px ${project.iconShadow}80, 0 0 0 1px ${project.iconShadow}30`,
                                }}
                            >
                                <span className="project-icon">{project.iconEmoji}</span>
                            </div>
                            <div className="banner-glow" style={{ background: project.accent }}></div>
                        </div>

                        <div className="project-body">
                            <h3 className="project-title" style={{ '--accent': project.accent }}>
                                {project.title}
                            </h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag" style={{ '--accent': project.accent }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="project-links" style={{ '--accent': project.accent }}>
                            <a
                                href={project.github}
                                className="proj-btn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github size={16} />
                                Code
                            </a>
                            <a
                                href={project.link}
                                className="proj-btn proj-btn-primary"
                                style={{ background: project.accent, boxShadow: `0 4px 14px ${project.accent}40` }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;