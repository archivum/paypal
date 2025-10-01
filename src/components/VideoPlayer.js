import React, { forwardRef, useImperativeHandle } from 'react';
import './VideoPlayer.css';

const VideoPlayer = forwardRef(({ onTimeUpdate }, ref) => {
  const videoRef = React.useRef(null);

  useImperativeHandle(ref, () => ({
    get currentTime() {
      return videoRef.current ? videoRef.current.currentTime : 0;
    },
    set currentTime(time) {
      if (videoRef.current) {
        videoRef.current.currentTime = time;
        // Play the video after setting time
        videoRef.current.play().catch(console.error);
        // Trigger time update after setting time
        setTimeout(() => {
          if (onTimeUpdate) {
            onTimeUpdate(videoRef.current.currentTime);
          }
        }, 100);
      }
    }
  }));

  const handleTimeUpdate = () => {
    if (videoRef.current && onTimeUpdate) {
      onTimeUpdate(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    console.log('Video loaded, duration:', videoRef.current?.duration);
  };

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-player"
          controls
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          preload="metadata"
        >
          <source 
            src={require('../venmo.mp4')} 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-info">
        <h3>Venmo Video Player</h3>
        <p>Click the menu items on the left to jump to different time codes in the video.</p>
        <div className="video-controls-info">
          <p><strong>Video:</strong> venmo.mp4</p>
          <p>Use the menu on the left to navigate to specific sections of the video.</p>
        </div>
      </div>
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
