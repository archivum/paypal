import React from 'react';
import './Menu.css';

const Menu = ({ items, onTimeCodeClick, currentTime }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isActive = (timeCode) => {
    // Check if current time is within 2 seconds of the time code
    return Math.abs(currentTime - timeCode) < 2;
  };

  return (
    <div className="menu">
      <h2 className="menu-title">Venmo App</h2>
      <nav className="menu-nav">
        {items.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${isActive(item.timeCode) ? 'active' : ''}`}
            onClick={() => onTimeCodeClick(item.timeCode)}
          >
            <span className="menu-item-label">{item.label}</span>
            <span className="menu-item-time">{formatTime(item.timeCode)}</span>
          </button>
        ))}
      </nav>
      <div className="current-time">
        <span>Current Time: {formatTime(currentTime)}</span>
      </div>
    </div>
  );
};

export default Menu;
