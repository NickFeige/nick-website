import React from "react";
import { useState } from 'react';
import "./App.css";
interface NavItem {
  label: string;
  icon: string;
  href: string;
}
const navItems: NavItem[] = [
  { label: 'About Me',  icon: '👤', href: '#about'     },
  { label: 'Portfolio', icon: '💼', href: '#portfolio'  },
  { label: 'Services',  icon: '🛠️', href: '#services'   },
  { label: 'Resume',    icon: '📄', href: '#resume'     },
  { label: 'Blog',      icon: '✍️', href: '#blog'       },
  { label: 'Contact',   icon: '✉️', href: '#contact'    },
];


export default function HomePage() {
  const [active, setActive] = useState('About Me');
  return (
    <aside className="sidebar">

    
    <div className="title">
      <h1  className="sidebar-name">Nick Feige</h1>
      <p className="sidebar-title">Junior full-stack developer </p>
    </div>
    <nav className="sidebar-nav">
      {navItems.map((item) => (
       <a
            key={item.label}
            href={item.href}
            className={`sidebar-link ${active === item.label ? 'sidebar__link--active' : ''}`}
            onClick={() => setActive(item.label)}
          >
            <span className="sidebar__icon">{item.icon}</span>
            {item.label}
          </a>
        ))}

    </nav>
    </aside>
    
  );
}