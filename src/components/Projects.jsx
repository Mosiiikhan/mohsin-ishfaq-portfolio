import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
    {
        id: 1,
        title: 'Al-Quran Islamic Institute Website',
        description: 'A complete, responsive web platform built for an Islamic institute. Features dynamic course enrollment, event management, integrated prayer timings, and a clean user dashboard for students and admins.',
        tags: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
        link: '#',
        github: '#'
    },
    {
        id: 2,
        title: 'BIIT Academic Calendar & Scheduler',
        description: 'An academic management tool featuring automated event scheduling, exam/holiday tracking, and role-based access control for students and faculty with strict version and flow management.',
        tags: ['React.js', 'Node.js', 'Express', 'SQL / Database Design'],
        link: '#',
        github: '#'
    },
    {
        id: 3,
        title: 'Pharmacy Management System',
        description: 'A robust web application designed to track medicine stock, expiry dates, and billing. Features real-time inventory updates, search/filter algorithms, and low-stock alerts.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Context API / Redux'],
        link: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'Sports Inventory Management System',
        description: 'A web-based system for tracking and managing sports equipment issuance, returns, and stock status. Includes comprehensive data logging and analytical reporting for inventory audits.',
        tags: ['React.js', 'Node.js', 'Express', 'Bootstrap / Material-UI'],
        link: '#',
        github: '#'
    }
];






    return (
        <section className="projects-section container" id="projects">
            <h2 className="section-title gradient-text">Technical Projects</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card glass-card">
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc text-muted">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-links">
                            <a href={project.github} className="icon-link" aria-label="GitHub Repository">
                                <Github size={20} />
                            </a>
                            <a href={project.link} className="icon-link" aria-label="Live Demo">
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
