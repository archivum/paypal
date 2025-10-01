import React, { useState, useRef } from 'react';
import './App.css';
import Menu from './components/Menu';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const menuItems = [
    { id: 1, label: 'Loader', timeCode: 0 },
    { id: 2, label: 'Home', timeCode: 2 },
    { id: 3, label: 'Cards', timeCode: 24 },
    { id: 4, label: 'Crypto', timeCode: 31 },
    { id: 5, label: 'Settings', timeCode: 55 }
  ];

  const handleTimeCodeClick = (timeCode) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeCode;
      setCurrentTime(timeCode);
    }
  };

  const handleTimeUpdate = (time) => {
    setCurrentTime(time);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <Menu 
          items={menuItems} 
          onTimeCodeClick={handleTimeCodeClick}
          currentTime={currentTime}
        />
      </div>
      <div className="main-content">
        <VideoPlayer 
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    </div>
  );
};

export default App;
