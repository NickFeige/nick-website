import { useState } from 'react';
import Sidebar from './Sidebar';
import './App.css';

export default function App() {
  const [active, setActive] = useState('About Me');
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app ${darkMode ? 'app--dark' : 'app--light'}`}>
      <Sidebar
        active={active}
        setActive={setActive}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="main">
        <h1>Welcome back </h1>
        <p>Select a section from the sidebar to get started.</p>
      </main>
    </div>
  );
}