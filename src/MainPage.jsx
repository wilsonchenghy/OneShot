import React, { useState, useEffect } from 'react';
import UserTab from './UserTab';
import MediaPreviewer from './MediaPreviewer';
import TimelineEditor from './TimelineEditor';
import './css/MainPage.css';

const MainPage = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };


  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className='square' style={{'--i':3}}></div>
        <div className='square' style={{'--i':8}}></div>
        <div className='square' style={{'--i':2}}></div>

        <div className="ICON">
          <img src="../picture/icon.jpg" alt="OneShot 🚀💫" />
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', width: '80%' }}>

          <div>
            <UserTab />
          </div>

          <div className="Upload">
            <MediaPreviewer mediaType={'video'} />
          </div>
          <div className="Timeline">
            <TimelineEditor />
          </div>
          <button className="button" id="button" role="button" onClick={toggleTheme}>Light/Dark</button>
        </div>
        <div className="top-rectangle"></div>
      </div>
    </div>
  );
}

export default MainPage;