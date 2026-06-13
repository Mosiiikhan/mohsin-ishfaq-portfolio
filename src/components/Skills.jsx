import './Skills.css';

const categories = [
    {
        title: 'Frontend',
        color: '#a78bfa',
        bg: 'rgba(139,92,246,0.1)',
        border: 'rgba(139,92,246,0.25)',
        badgeBg: 'rgba(139,92,246,0.12)',
        badgeBorder: 'rgba(139,92,246,0.3)',
        skills: [
            { name: 'React.js',    emoji: '⚛️', level: 'Expert' },
            { name: 'JavaScript',  emoji: '🟨', level: 'Expert' },
            { name: 'Tailwind CSS',emoji: '🎨', level: 'Expert' },
            { name: 'Redux',       emoji: '🔄', level: 'Mid'    },
            { name: 'HTML5/CSS3',  emoji: '🌐', level: 'Expert' },
            { name: 'Context API', emoji: '🧠', level: 'Mid'    },
        ]
    },
    {
        title: 'Backend',
        color: '#34d399',
        bg: 'rgba(16,185,129,0.1)',
        border: 'rgba(16,185,129,0.25)',
        badgeBg: 'rgba(16,185,129,0.12)',
        badgeBorder: 'rgba(16,185,129,0.3)',
        skills: [
            { name: 'Node.js',    emoji: '🟩', level: 'Expert' },
            { name: 'Express.js', emoji: '⚡', level: 'Expert' },
            { name: 'REST API',   emoji: '🔌', level: 'Expert' },
            { name: 'JWT Auth',   emoji: '🔑', level: 'Mid'    },
        ]
    },
    {
        title: 'Database',
        color: '#fb923c',
        bg: 'rgba(249,115,22,0.1)',
        border: 'rgba(249,115,22,0.25)',
        badgeBg: 'rgba(249,115,22,0.12)',
        badgeBorder: 'rgba(249,115,22,0.3)',
        skills: [
            { name: 'MongoDB',  emoji: '🍃', level: 'Expert' },
            { name: 'Mongoose', emoji: '🍀', level: 'Expert' },
            { name: 'MySQL',    emoji: '🗄️', level: 'Mid'    },
        ]
    },
    {
        title: 'Dev Tools',
        color: '#60a5fa',
        bg: 'rgba(59,130,246,0.1)',
        border: 'rgba(59,130,246,0.25)',
        badgeBg: 'rgba(59,130,246,0.12)',
        badgeBorder: 'rgba(59,130,246,0.3)',
        skills: [
            { name: 'Git/GitHub', emoji: '🐙', level: 'Expert' },
            { name: 'Postman',    emoji: '📮', level: 'Mid'    },
            { name: 'Vite',       emoji: '⚡', level: 'Mid'    },
            { name: 'NPM/Yarn',   emoji: '📦', level: 'Mid'    },
        ]
    },
];

function Skills() {
    return (
        <section className="skills-section container" id="skills" style={{ textAlign: 'center' }}>
            <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
  Technical Skills
</h2>

            <div className="skills-categories">
                {categories.map((cat, ci) => (
                    <div key={ci} className="skill-category">

                        {/* Category header */}
                        <div className="cat-header">
                            <span className="cat-title" style={{ color: cat.color }}>
                                {cat.title}
                            </span>
                            <div
                                className="cat-line"
                                style={{ background: `linear-gradient(90deg, ${cat.color}66, transparent)` }}
                            ></div>
                            <span
                                className="cat-count"
                                style={{ color: cat.color, background: cat.badgeBg, borderColor: cat.border }}
                            >
                                {cat.skills.length} skills
                            </span>
                        </div>

                        {/* Skill cards */}
                        <div className="skills-grid">
                            {cat.skills.map((skill, si) => (
                                <div
                                    key={si}
                                    className="skill-card"
                                    style={{
                                        background: cat.bg,
                                        borderColor: cat.border,
                                        animationDelay: `${(ci * 0.1) + (si * 0.05)}s`
                                    }}
                                >
                                    <div className="skill-emoji">{skill.emoji}</div>
                                    <div className="skill-name">{skill.name}</div>
                                    <div
                                        className="skill-badge"
                                        style={{
                                            color: cat.color,
                                            background: cat.badgeBg,
                                            borderColor: cat.badgeBorder
                                        }}
                                    >
                                        {skill.level}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;