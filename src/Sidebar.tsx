import { useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import "./Sidebar.css";

interface NavItem {
  label: string;
}

const navItems: NavItem[] = [
  { label: 'About Me' },
  { label: 'Portfolio' },
  { label: 'Services' },
  { label: 'Resume' },
  { label: 'Contact' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nick-feige',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.07V24h-4v-8.6c0-2.05-.04-4.69-2.86-4.69-2.86 0-3.3 2.24-3.3 4.55V24H8V8.5z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/NickFeige',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:nfeige7@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    href: 'tel:0852196601',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
      </svg>
    ),
  },
  {
    label: 'Resume',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
  },
];

interface SidebarProps {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ active, setActive, darkMode, setDarkMode }: SidebarProps) {

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <aside className={`sidebar ${darkMode ? 'sidebar--dark' : 'sidebar--light'}`}>

      <div className="sidebar-profile">
        <h1 className="sidebar-name">Nick Feige</h1>
        <p className='sidebar-avatar'></p>
        <p className="sidebar-title">Hi my name is Nick Feige and I'm a
          Junior full-stack developer. Welcome to my personal website!</p>

        {/* Social icons */}
        <div className="sidebar-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="sidebar-social-btn"
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={`sidebar-link ${active === item.label ? 'sidebar-link--active' : ''}`}
            onClick={() => setActive(item.label)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-darkmode">
        <span className="sidebar-darkmode-label">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
        <label className="sidebar-toggle">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="sidebar-toggle-slider" />
        </label>
      </div>

    </aside>
  );
}
