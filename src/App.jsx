import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <Navbar />
            <Profile />
            <div className="fade-in"><Skills /></div>
            <div className="fade-in"><Experience /></div>
            <div className="fade-in"><Projects /></div>
            <div className="fade-in"><Education /></div>
            <div className="fade-in"><ContactForm /></div>
            <WhatsAppButton />
        </div>
    );
}

export default App;