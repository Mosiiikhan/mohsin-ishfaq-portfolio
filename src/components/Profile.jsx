import React from 'react';
import { Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import './Profile.css';

const Profile = () => {
    return (
        <section className="profile-section container animate-fade-in" id="profile">
            <div className="profile-content">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name gradient-text">Mohsin Ishfaq</h1>
                <h3 className="role">Full Stack Developer</h3>
                <p className="bio text-muted">
                    Highly motivated Full-Stack Web Developer with hands-on experience in
                     building scalable, responsive, and user-focused web applications.
                      Proficient in React.js for crafting dynamic frontends and Node.js for robust backend logic.
                       Solid understanding of database architecture, RESTful API integration,
                        and clean code principles. Backed by practical industry experience through a professional internship, 
                        I am passionate about turning complex problems into seamless digital solutions.
                </p>

                <div className="social-links">
                    <a href="#contact" className="social-btn primary">
                        <Mail size={20} /> Contact Me
                    </a>
                    <a href="https://github.com/Mosiiikhan" className="social-icon" target="_blank" rel="noreferrer">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/mohsin-ishfaq-2226b6299?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="social-icon" target="_blank" rel="noreferrer">
                        <Linkedin size={24} />
                    </a>
                    <a href="tel:+923435520230" className="social-icon">
                        <Smartphone size={24} />
                    </a>
                </div>
            </div>

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
                    <span className="badge-icon"></span> Web Developer
                </div>
                <div className="floating-badge badge-2 glass-card">
                    <span className="badge-icon">⚡</span> React.Js
                </div>
            </div>
        </section>
    );
};

export default Profile;
