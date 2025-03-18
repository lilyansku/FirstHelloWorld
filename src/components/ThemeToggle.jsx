import React, { useState } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`theme-toggle ${isDark ? 'dark' : 'light'}`}>
      <div className="theme-message">
        {isDark ? "It's now dark theme" : "It's now light theme"}
      </div>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "light" : "dark"} theme
      </button>
    </div>
  );
}

export default ThemeToggle;