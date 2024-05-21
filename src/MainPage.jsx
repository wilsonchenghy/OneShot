import { useState, useEffect } from 'react';
import UserTab from './UserTab';
import MediaPreviewer from './MediaPreviewer';
import TimelineEditor from './TimelineEditor';
import './css/MainPage.css'



const MainPage = () => {

  const [selectedOption, setSelectedOption] = useState('video');
  const [isDark, setIsDark] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleCheckboxChange = () => {
    setIsDarkMode(!isDarkMode);
  };


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  

  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      
      <div className="ICON">
        <img src="../picture/icon.jpg" alt="OneShot 🚀💫" />
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', width: '80%'}}>
        <div className="panel">
          <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
          </select>
          <UserTab />
        </div>
        <div className="Upload">
          <MediaPreviewer mediaType={selectedOption} />
        </div>
        <div className="Timeline">
          <TimelineEditor />
        </div>
        
        <div className='checkbox-container'>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={isDarkMode}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className="ball"></span>
          </label>
        </div>

      </div>
      <div className="top-rectangle"></div>
    </div>
  );
}



export default MainPage