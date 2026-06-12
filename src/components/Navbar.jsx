import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { label: 'Home',       id: 'profile'    },
    { label: 'Skills',     id: 'skills'     },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects',   id: 'projects'   },
    { label: 'Education',  id: 'education'  },
    { label: 'Contact',    id: 'contact'    },
];

function Navbar() {
    const [scrolled, setScrolled]         = useState(false);
    const [menuOpen, setMenuOpen]         = useState(false);
    const [activeId, setActiveId]         = useState('profile');

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 20);

            for (let i = navLinks.length - 1; i >= 0; i--) {
                const el = document.getElementById(navLinks[i].id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveId(navLinks[i].id);
                    break;
                }
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function goTo(id) {
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className={scrolled ? 'navbar navbar-scrolled' : 'navbar'}>
            <div className="navbar-container">

                <button className="navbar-logo gradient-text" onClick={() => goTo('profile')}>
                    Mohsin<span className="logo-dot">.</span>
                </button>

                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                className={activeId === link.id ? 'nav-link active' : 'nav-link'}
                                onClick={() => goTo(link.id)}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <button className="hire-btn" onClick={() => goTo('contact')}>
                    Hire Me
                </button>

                <button
                    className={menuOpen ? 'hamburger open' : 'hamburger'}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className={menuOpen ? 'mobile-menu mobile-menu-open' : 'mobile-menu'}>
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        className={activeId === link.id ? 'mobile-link active' : 'mobile-link'}
                        onClick={() => goTo(link.id)}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;