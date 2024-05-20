import { useState } from 'react';
import UserTab from './UserTab';
import MediaPreviewer from './MediaPreviewer';
import TimelineEditor from './TimelineEditor';
import './css/MainPage.css'



const MainPage = () => {

  const [selectedOption, setSelectedOption] = useState('video');
  const [isDark, setIsDark] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
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
        <div className="content">
          <MediaPreviewer mediaType={selectedOption} />
        </div>
        <div className="bottom">
          <TimelineEditor />
        </div>
        <button className="button" id="button" role="button" onClick={toggleTheme}>Light/Dark</button>
      </div>
      <div className="top-rectangle"></div>
    </div>
  );
}



export default MainPage