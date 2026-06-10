import React from "react";
import { useState } from 'react';
import "./App.css";
interface NavItem {
  label: string;
  
}
const navItems: NavItem[] = [
  { label: 'About Me'},
  { label: 'Portfolio'},
  { label: 'Services'},
  { label: 'Resume'},
  { label: 'Contact'},
];


export default function HomePage() {
  const [active, setActive] = useState('About Me');
   const [darkMode, setDarkMode] = useState(true);

  return (
    <aside className={`sidebar ${darkMode ? "sidebar--dark" : "sidebar--light"}`}>


    
    <div>
      <h1  className="sidebar-name">Nick Feige</h1>
      <p className="sidebar-title">Junior full-stack developer </p>
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
          {darkMode ? ' Dark Mode' : ' Light Mode'}
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