import { useState } from 'react';
import Sidebar from './Sidebar';
import './App.css';

export default function App() {
  const [active, setActive] = useState('About Me');
  const [darkMode, setDarkMode] = useState(false);

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
              <span className="tag">TypeScript</span>
              <span className="tag">AI Tools</span>
            </div>
          </section>
        )}

        {/* ── Resume ── */}
        {active === 'Resume' && (
          <section className="resume">
            <h1 className="about-title">Resume</h1>

            {/* Contact */}
            <p className="resume-contact">
              Oranmore, Co. Galway &nbsp;·&nbsp; (085) 219-6601 &nbsp;·&nbsp;
              <a href="mailto:nfeige7@gmail.com">nfeige7@gmail.com</a> &nbsp;·&nbsp;
              <a href="https://github.com/NickFeige" target="_blank" rel="noreferrer">github.com/NickFeige</a> &nbsp;·&nbsp;
              <a href="https://linkedin.com/in/nick-feige" target="_blank" rel="noreferrer">linkedin.com/in/nick-feige</a>
            </p>

            {/* Experience */}
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
                <li>Led a small team to design and build a travel assistant app, managing tasks and keeping everyone on track.</li>
                <li>Built the frontend in React Native with a Python/Flask API on the backend, with location and mapping integrations.</li>
                <li>Ran stand-ups, sprint planning and retros to keep the team moving.</li>
              </ul>
            </div>

            {/* Education */}
            <h2 className="resume-section-title">Education</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <span className="resume-company">Atlantic Technological University — Galway</span>
                <span className="resume-date">Sep 2021 – Apr 2024</span>
              </div>
              <p className="resume-role">B.Sc. Software Development</p>
            </div>

            {/* Technical Skills */}
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

            {/* Languages */}
            <h2 className="resume-section-title">Languages</h2>
            <p className="resume-role">Fluent: English &amp; Hungarian</p>
          </section>
        )}

        {/* ── Other sections ── */}
        {active !== 'About Me' && active !== 'Resume' && (
          <section className="placeholder">
            <h1 className="about-title">{active}</h1>
            <p>This section is coming soon.</p>
          </section>
        )}

      </main>
    </div>
  );
}
