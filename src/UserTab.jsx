import { useState, useEffect } from 'react';
import AICommandBox from './AICommandBox';
import StockMediaBox from './StockMediaBox';
import './css/UserTab.css';



const UserTab = () => {

  const [activeTab, setActiveTab] = useState(2);

  const switchTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };


  const [selectedOption, setSelectedOption] = useState('video');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const tabs = document.querySelector('.tabs');
    if (tabs) {
      const tabsHeader = tabs.querySelector('.tabs-header');
      const tabsPanel = tabs.querySelectorAll('.tabs-panel');
      let activeTab = tabsHeader.children[0];
      let activePanel = tabsPanel[0];
      const activeTabIndicator = document.createElement('span');
      activeTabIndicator.className = 'active-tab-indicator';

      tabs.appendChild(activeTabIndicator);

      const activateTab = (tab, i) => {
        tabsHeader.querySelectorAll('button').forEach((button) => {
          button.removeAttribute('aria-selected');
          button.style.color = '#555';
        });

        tab.setAttribute('aria-selected', true);
        tab.style.color = '#0084b5';
        activeTab = tab;

        tabsPanel.forEach((panel) => {
          panel.setAttribute('hidden', true);
        });

        tabsPanel[i].removeAttribute('hidden');
        activePanel = tabsPanel[i];

        activeTab.focus();

        activeTabIndicator.style.width = activeTab.offsetWidth + 'px';
        activeTabIndicator.style.left = activeTab.offsetLeft + 80 + 'px';

      };

      activateTab(activeTab, 0);

      tabs.addEventListener('keydown', (e) => {
        const i = Array.from(tabsHeader.children).indexOf(activeTab);

        if (e.keyCode === 39) {
          if (activeTab.nextElementSibling) {
            activateTab(activeTab.nextElementSibling, i + 1);
          } else {
            activateTab(tabsHeader.children[0], 0);
          }
        }

        if (e.keyCode === 37) {
          if (activeTab.previousElementSibling) {
            activateTab(activeTab.previousElementSibling, i - 1);
          } else {
            const lastIndex = tabsHeader.children.length - 1;
            activateTab(tabsHeader.children[lastIndex], lastIndex);
          }
        }
      });

      Array.from(tabsHeader.children).forEach((tab, i) => {
        tab.addEventListener('click', () => activateTab(tab, i));
      });
    }
  }, []);

  return (

    <div>

      <div className="tabs">
        <div className="tabs-header" role="tablist" aria-label="my-tabs">
          <button role="tab" aria-selected="true" tabIndex="0">
            Tab 1
          </button>
          <button role="tab" aria-selected="false" tabIndex="-1">
            Tab 2
          </button>
        </div>

        <div className="tabs-panel" tabIndex="0" role="tabpanel">
          <div className="panel">
            <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
              <option value="video">Video</option>
              <option value="audio">Audio</option>
            </select>
            
            <div>
              <div className="selection-result-bar">
                {activeTab === 1 && <AICommandBox />}
                {activeTab === 2 && <StockMediaBox />}
              </div>
              <br />
              <div className="feature-select">
                <button className="button-4" onClick={() => switchTab(1)}>AICommandBox</button>
                <button className="button-4" onClick={() => switchTab(2)}>StockMediaBox</button>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs-panel" tabIndex="-1" role="tabpanel">
          <div className="panel">
            <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
              <option value="video">Video</option>
              <option value="audio">Audio</option>
            </select>
            
            <div>
              <div className="selection-result-bar">
                {activeTab === 1 && <AICommandBox />}
                {activeTab === 2 && <StockMediaBox />}
              </div>
              <br />
              <div className="feature-select">
                <button className="button-4" onClick={() => switchTab(1)}>AICommandBox</button>
                <button className="button-4" onClick={() => switchTab(2)}>StockMediaBox</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}



export default UserTab;
