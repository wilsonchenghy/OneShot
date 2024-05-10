import { useState } from 'react';
import UserTab from './UserTab';
import MediaPlayer from './MediaPlayer';
import TimelineEditor from './TimelineEditor';
import './MainPage.css'



function MainPage() {

  const [selectedOption, setSelectedOption] = useState('video');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  

  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <div class="ICON">
        <img src="../picture/icon.jpg" alt="OneShot 🚀💫" />
        <p>OneShot 🚀💫</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', width: '80%'}}>
        <div class="panel">
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
          </select>
          <UserTab />
        </div>
        <div class="content">
          <MediaPlayer mediaType={selectedOption} />
        </div>
        <div class="bottom">
          <TimelineEditor />
        </div>
      </div>
      <div class="top-rectangle"></div>
    </div>
  );
}



export default MainPage