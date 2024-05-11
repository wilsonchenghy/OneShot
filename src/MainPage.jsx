import { useState } from 'react';
import UserTab from './UserTab';
import MediaPlayer from './MediaPlayer';
import TimelineEditor from './TimelineEditor';
import './MainPage.css'



function MainPage() {

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
      <div class="ICON">
        <img src="../picture/icon.jpg" alt="OneShot 🚀💫" />
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', width: '80%'}}>
        <div class="panel">
          <select class="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
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
        <button class="button" id="button" role="button" onClick={toggleTheme}>Light/Dark</button>
      </div>
      <div class="top-rectangle"></div>
    </div>
  );
}



export default MainPage