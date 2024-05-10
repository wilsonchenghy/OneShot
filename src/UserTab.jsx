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
      <div>
        <button onClick={() => switchTab(1)}>AICommandBox</button>
        <button onClick={() => switchTab(2)}>StockMediaBox</button>
      </div>
      {activeTab === 1 && <AICommandBox />}
      {activeTab === 2 && <StockMediaBox />}
    </div>
  );
}



export default UserTab;
