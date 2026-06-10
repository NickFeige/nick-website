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
        <p className="sidebar-title">Junior full-stack developer</p>

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
