import { useState } from 'react';
import AICommandBox from './AICommandBox';
import StockMediaBox from './StockMediaBox';



const UserTab = () => {

  const [activeTab, setActiveTab] = useState(2);

  const switchTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div class="result-bar">
        {activeTab === 1 && <AICommandBox />}
        {activeTab === 2 && <StockMediaBox />}
      </div>
      <br />
      <div class="feature-select">
        <button class="button-4" onClick={() => switchTab(1)}>AICommandBox</button>
        <button class="button-4" onClick={() => switchTab(2)}>StockMediaBox</button>
      </div>
    </div>
  );
}



export default UserTab;
