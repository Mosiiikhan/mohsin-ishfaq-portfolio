import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["JavaScript (ES6+)", "HTML5 / CSS3", "Python", "C++", "SQL"]
    },
    {
        title: "Frontend Development",
        skills: ["React.js", "Redux Toolkit", "Context API", "Tailwind CSS", "Bootstrap", "Material-UI"]
    },
    {
        title: "Backend Development",
        skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT / OAuth)", "Middleware Logic"]
    },
    {
        title: "Databases & Architecture",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Database Design (ERD / Cardinality)", "Mongoose ORM"]
    },
    {
        title: "Dev Tools & Testing",
        skills: ["Git", "GitHub", "Postman", "NPM / Yarn", "Vite", "Chrome DevTools"]
    },
    {
        title: "Workflow & Engineering",
        skills: ["Clean Code Standards", "Agile / Scrum Methodologies", "Component Lifecycle", "Performance Optimization"]
    }
];
    return (
        <section className="skills-section container" id="skills">
            <h2 className="section-title gradient-text">Technical Skills</h2>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-card glass-card">
                        <h3 className="skill-category-title">{category.title}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, sIndex) => (
                                <span key={sIndex} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
