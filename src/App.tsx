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
  return (
    <aside className="sidebar">

    
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
    </aside>
    
  );
}