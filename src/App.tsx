import { useState } from 'react';
import Sidebar from './Sidebar';
import './App.css';

interface Project {
  emoji: string;
  title: string;
  desc: string;
  detail: string;
  tags: string[];
  repo: string;
}

const projects: Project[] = [
  {
    emoji: '☕',
    title: 'Coffee at Dawn',
    desc: "Built a full café website from scratch — the business's very first online presence. Responsive across mobile and desktop.",
    detail: "This was a freelance project for a local Galway café. I handled everything from design to deployment — building the site in React Native so it works seamlessly on both mobile and desktop. I worked closely with the owner to match their brand, set up a menu showcase, contact form, and Google Maps integration.",
    tags: ['React', 'TypeScript', 'css'],
    repo: 'https://github.com/NickFeige/coffee-atdawns',
  },
  {
    emoji: '🛒',
    title: 'Crisp E-Commerce',
    desc: 'Cross-platform e-commerce store built with Flutter & Firebase. Single codebase shipping to both web and mobile.',
    detail: "Built during my time in New Zealand with Crisp. Using Flutter meant one codebase covered both web and mobile. I implemented user authentication, a product catalogue backed by Firebase Firestore, and a full order management flow with Firebase as the backend.",
    tags: ['Flutter', 'Firebase'],
    repo: 'https://github.com/NickFeige',
  },
  {
    emoji: '✈️',
    title: 'Travel Assistant App',
    desc: 'Full-stack travel app with real-time location services. Led a team of developers using Agile & Scrum as Group Lead.',
    detail: "My final year project at ATU Galway. I led a team of developers through the full project lifecycle — running stand-ups, sprint planning and retros. The frontend was built in React Native and connected to a Python/Flask REST API with real-time location and mapping integrations.",
    tags: ['React Native','TypeScript', 'Flask', 'Python'],
    repo: 'https://github.com/NickFeige/Professional-PracticeProject',
  },
  {
    emoji: '🧗',
    title: 'Grip Climbing E-Commerce',
    desc: 'TypeScript e-commerce site built for Grip Climbing LTD — product listings and checkout flow.',
    detail: "A TypeScript-based e-commerce site built for Grip Climbing LTD. Features include a full product listing page, individual product detail views, a shopping cart, and a checkout flow. Focused on clean component architecture and type safety throughout.",
    tags: ['TypeScript'],
    repo: 'https://github.com/NickFeige',
  },
];

export default function App() {
  const [active, setActive] = useState('About Me');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={`app ${darkMode ? 'app--dark' : 'app--light'}`}>
      <Sidebar
        active={active}
        setActive={setActive}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="main">

        {/* ── About Me ── */}
        {active === 'About Me' && (
          <section className="about">
            <h1 className="about-title">About Me</h1>
            <p className="about-bio">
              Junior developer with hands-on experience across the full stack, from building
              ecommerce sites with Flutter and Firebase to leading a team through a full project
              lifecycle at university. I pick up new technologies quickly, have worked across
              multiple countries, and use AI tools day-to-day to write better code faster.
              Looking to join a team where I can keep growing and contribute from day one.
            </p>
            <div className="about-tags">
              <span className="tag">Flutter</span>
              <span className="tag">Firebase</span>
              <span className="tag">Full Stack</span>
              <span className="tag">React</span>
               <span className="tag">React-Native</span>
              <span className="tag">TypeScript</span>
              <span className="tag">AI Tools</span>
            </div>
          </section>
        )}

        {/* ── Resume ── */}
        {active === 'Resume' && (
          <section className="resume">
            <h1 className="about-title">Resume</h1>
            <p className="resume-contact">
              <a href="mailto:nfeige7@gmail.com">nfeige7@gmail.com</a> &nbsp;·&nbsp;
              <a href="https://github.com/NickFeige" target="_blank" rel="noreferrer">github.com/NickFeige</a> &nbsp;·&nbsp;
              <a href="https://linkedin.com/in/nick-feige" target="_blank" rel="noreferrer">linkedin.com/in/nick-feige</a>
            </p>
            <h2 className="resume-section-title">Experience</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <span className="resume-company">Crisp — New Zealand</span>
                <span className="resume-date">Dec 2025 – Present</span>
              </div>
              <p className="resume-role">Web Developer</p>
              <ul className="resume-bullets">
                <li>Built an e-commerce website using Flutter, working across web and mobile from a single codebase.</li>
                <li>Added user authentication and hooked up Firebase as the backend database for products and orders.</li>
              </ul>
            </div>
            <div className="resume-item">
              <div className="resume-item-header">
                <span className="resume-company">Coffee at Dawn — Galway, Ireland</span>
                <span className="resume-date">Dec 2025 – Present</span>
              </div>
              <p className="resume-role">Freelance Web Developer</p>
              <ul className="resume-bullets">
                <li>Built the café's website from scratch, giving the business its first online presence.</li>
                <li>Used React Native to make the site work well on both mobile and desktop.</li>
                <li>Worked closely with the owner to get the look and feel right.</li>
              </ul>
            </div>
            <div className="resume-item">
              <div className="resume-item-header">
                <span className="resume-company">Final Year Project — ATU Galway</span>
                <span className="resume-date">Feb 2024 – Apr 2024</span>
              </div>
              <p className="resume-role">Full-Stack Developer (Group Lead)</p>
              <ul className="resume-bullets">
                <li>Led a small team to design and build a travel assistant app.</li>
                <li>Built the frontend in React Native with a Python/Flask API on the backend.</li>
                <li>Ran stand-ups, sprint planning and retros to keep the team moving.</li>
              </ul>
            </div>
            <h2 className="resume-section-title">Education</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <span className="resume-company">Atlantic Technological University — Galway</span>
                <span className="resume-date">Sep 2021 – Apr 2024</span>
              </div>
              <p className="resume-role">B.Sc. Software Development</p>
            </div>
            <h2 className="resume-section-title">Technical Skills</h2>
            <div className="resume-skills">
              {[
                { label: 'Languages', value: 'TypeScript, JavaScript, Java, C#, C++' },
                { label: 'Frontend',  value: 'React, React Native, HTML5, CSS3, Bootstrap' },
                { label: 'Backend',   value: 'Node.js, Spring Boot, MySQL, MongoDB, Flask' },
                { label: 'Testing',   value: 'Cucumber, Selenium' },
                { label: 'AI & Tools',value: 'GitHub Copilot, Claude AI, Cursor' },
                { label: 'DevOps',    value: 'GitHub, Azure, NPM, Notion, Unity' },
                { label: 'Process',   value: 'Agile, Scrum, VS Code' },
              ].map(({ label, value }) => (
                <div className="resume-skill-row" key={label}>
                  <span className="resume-skill-label">{label}</span>
                  <span className="resume-skill-value">{value}</span>
                </div>
              ))}
            </div>
            <h2 className="resume-section-title">Languages</h2>
            <p className="resume-role">Fluent: English &amp; Hungarian</p>
          </section>
        )}

        {/* ── Portfolio ── */}
        {active === 'Portfolio' && (
          <section className="portfolio">
            <h1 className="about-title">Portfolio</h1>
            <p className="portfolio-hint">Click a project to learn more</p>
            <div className="portfolio-grid">
              {projects.map((project) => (
                <div
                  className="portfolio-card"
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                >
                  <h2 className="portfolio-card-title">
                    <span>{project.emoji}</span> {project.title}
                  </h2>
                  <p className="portfolio-card-desc">{project.desc}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag) => (
                      <span className="portfolio-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="portfolio-link">View Details →</span>
                </div>
              ))}
            </div>

            {/* ── Modal ── */}
            {selectedProject && (
              <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                <div
                  className={`modal ${darkMode ? 'modal--dark' : 'modal--light'}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
                  <div className="modal-emoji">{selectedProject.emoji}</div>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <div className="modal-tags">
                    {selectedProject.tags.map((tag) => (
                      <span className="portfolio-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p className="modal-detail">{selectedProject.detail}</p>
                  <a
                    className="modal-repo-btn"
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repo →
                  </a>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ── Contact ── */}
        {active === 'Contact' && (
          <section className="contact">
            <h1 className="about-title">Contact</h1>
            <p className="contact-intro">
              Feel free to reach out via email or connect with me on LinkedIn or GitHub. I'm always open to discussing new projects, opportunities, or collaborations.
            </p>
            <div className="contact-cards">
              <a href="mailto:nfeige7@gmail.com" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">nfeige7@gmail.com</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/nick-feige" target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.07V24h-4v-8.6c0-2.05-.04-4.69-2.86-4.69-2.86 0-3.3 2.24-3.3 4.55V24H8V8.5z"/>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-value">linkedin.com/in/nick-feige</span>
                </div>
              </a>
              <a href="https://github.com/NickFeige" target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">GitHub</span>
                  <span className="contact-card-value">github.com/NickFeige</span>
                </div>
              </a>
            </div>
          </section>
        )}

        {/* ── Other sections ── */}
        {active !== 'About Me' && active !== 'Resume' && active !== 'Portfolio' && active !== 'Contact' && (
          <section className="placeholder">
            <h1 className="about-title">{active}</h1>
            <p>This section is coming soon.</p>
          </section>
        )}

      </main>
    </div>
  );
}
