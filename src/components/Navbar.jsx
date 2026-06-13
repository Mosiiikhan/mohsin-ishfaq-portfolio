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
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState('profile');

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 20);

            // Sabse neeche wala section check karo jo viewport mein hai
            let currentId = navLinks[0].id;

            for (let i = 0; i < navLinks.length; i++) {
                const el = document.getElementById(navLinks[i].id);
                if (!el) continue;

                const rect = el.getBoundingClientRect();
                // Jab section ka top viewport ke 50% se upar ho
                if (rect.top <= window.innerHeight * 0.5) {
                    currentId = navLinks[i].id;
                }
            }

            setActiveId(currentId);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // initial call
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function goTo(id) {
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            const offset = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
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