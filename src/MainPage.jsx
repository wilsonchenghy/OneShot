// // import React, { useState, useEffect } from 'react';
// // import UserTab from './UserTab';
// // import MediaPreviewer from './MediaPreviewer';
// // import TimelineEditor from './TimelineEditor';
// // import './css/MainPage.css';

// // const MainPage = () => {
// //   const [selectedOption, setSelectedOption] = useState('video');
// //   const [isDark, setIsDark] = useState(false);

// //   const handleSelectChange = (event) => {
// //     setSelectedOption(event.target.value);
// //   };

// //   const toggleTheme = () => {
// //     setIsDark(!isDark);
// //     document.body.classList.toggle('dark');
// //   };

// //   useEffect(() => {
// //     const tabs = document.querySelector('.tabs');
// //     if (tabs) {
// //       const tabsHeader = tabs.querySelector('.tabs-header');
// //       const tabsPanel = tabs.querySelectorAll('.tabs-panel');
// //       let activeTab = tabsHeader.children[0];
// //       let activePanel = tabsPanel[0];
// //       const activeTabIndicator = document.createElement('span');
// //       activeTabIndicator.className = 'active-tab-indicator';
  
// //       tabs.appendChild(activeTabIndicator);
  
// //       const activateTab = (tab, i) => {
// //         tabsHeader.querySelectorAll('button').forEach((button) => {
// //           button.removeAttribute('aria-selected');
// //           button.style.color = '#555'; 
// //         });

// //         tab.setAttribute('aria-selected', true);
// //         tab.style.color = '#0084b5'; 
// //         activeTab = tab;
  
// //         // Hide all panels
// //         tabsPanel.forEach((panel) => {
// //           panel.setAttribute('hidden', true);
// //         });
// //         // Show the corresponding panel
// //         tabsPanel[i].removeAttribute('hidden');
// //         activePanel = tabsPanel[i];
  
// //         activeTab.focus();
  
// //         activeTabIndicator.style.width = activeTab.offsetWidth + 'px';
// //         activeTabIndicator.style.left = activeTab.offsetLeft + 'px';
// //       };
  
// //       activateTab(activeTab, 0);
  
// //       tabs.addEventListener('keydown', (e) => {
// //         const i = Array.from(tabsHeader.children).indexOf(activeTab);
  
// //         if (e.keyCode === 39) {
// //           if (activeTab.nextElementSibling) {
// //             activateTab(activeTab.nextElementSibling, i + 1);
// //           } else {
// //             activateTab(tabsHeader.children[0], 0);
// //           }
// //         }
  
// //         if (e.keyCode === 37) {
// //           if (activeTab.previousElementSibling) {
// //             activateTab(activeTab.previousElementSibling, i - 1);
// //           } else {
// //             const lastIndex = tabsHeader.children.length - 1;
// //             activateTab(tabsHeader.children[lastIndex], lastIndex);
// //           }
// //         }
// //       });
  
// //       Array.from(tabsHeader.children).forEach((tab, i) => {
// //         tab.addEventListener('click', () => activateTab(tab, i));
// //       });
// //     }
// //   }, []);
  

// //   return (
// //     <div>
// //       <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
// //         <div className="color"></div>
// //         <div className="color"></div>
// //         <div className="color"></div>

// //         <div className="ICON">
// //           <img src="../picture/icon.jpg" alt="OneShot 🚀💫" />
// //         </div>

// //         {/* main content */}
// //         <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', width: '80%' }}>
// //           <div className="panel">

// //             {/* tabs */}
// //             <div className="tabs">
// //               <div className="tabs-header" role="tablist" aria-label="my-tabs">
// //                 <button role="tab" aria-selected="true" tabIndex="0">
// //                   Tab 1
// //                 </button>
// //                 <button role="tab" aria-selected="false" tabIndex="-1">
// //                   Tab 2
// //                 </button>
// //                 <button role="tab" aria-selected="false" tabIndex="-1">
// //                   Tab 3
// //                 </button>
// //               </div>
// //               <div className="tabs-panel" tabIndex="0" role="tabpanel">
// //                 <p>
// //                   Hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
// //                 </p>
// //               </div>
// //               <div className="tabs-panel" tabIndex="0" role="tabpanel" hidden>
// //                 <p>
// //                   World world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world 
// //                 </p>
// //               </div>
// //               <div className="tabs-panel" tabIndex="0" role="tabpanel" hidden>
// //                 <p>
// //                   Happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy 
// //                 </p>
// //               </div>
// //             </div>

// //             {/* contents in panel */}
// //             <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
// //               <option value="video">Video</option>
// //               <option value="audio">Audio</option>
// //             </select>
// //             <UserTab />
// //           </div>

// //           {/* Upload */}
// //           <div className="Upload">
// //             <MediaPreviewer mediaType={selectedOption} />
// //           </div>
// //           <div className="Timeline">
// //             <TimelineEditor />
// //           </div>
// //           <button className="button" id="button" role="button" onClick={toggleTheme}>Light/Dark</button>
// //         </div>
// //         <div className="top-rectangle"></div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default MainPage;




// import React, { useState, useEffect } from 'react';
// import UserTab from './UserTab';
// import MediaPreviewer from './MediaPreviewer';
// import TimelineEditor from './TimelineEditor';
// import './css/MainPage.css';

// const MainPage = () => {
//   const [selectedOption, setSelectedOption] = useState('video');
//   const [isDark, setIsDark] = useState(false);

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.body.classList.toggle('dark');
//   };

//   useEffect(() => {
//     const tabs = document.querySelector('.tabs');
//     if (tabs) {
//       const tabsHeader = tabs.querySelector('.tabs-header');
//       const tabsPanel = tabs.querySelectorAll('.tabs-panel');
//       let activeTab = tabsHeader.children[0];
//       let activePanel = tabsPanel[0];
//       const activeTabIndicator = document.createElement('span');
//       activeTabIndicator.className = 'active-tab-indicator';

//       tabs.appendChild(activeTabIndicator);

//       const activateTab = (tab, i) => {
//         tabsHeader.querySelectorAll('button').forEach((button) => {
//           button.removeAttribute('aria-selected');
//           button.style.color = '#555';
//         });

//         tab.setAttribute('aria-selected', true);
//         tab.style.color = '#0084b5';
//         activeTab = tab;

//         tabsPanel.forEach((panel) => {
//           panel.setAttribute('hidden', true);
//         });

//         tabsPanel[i].removeAttribute('hidden');
//         activePanel = tabsPanel[i];

//         activeTab.focus();

//         activeTabIndicator.style.width = activeTab.offsetWidth + 'px';
//         activeTabIndicator.style.left = activeTab.offsetLeft + 'px';
//       };

//       activateTab(activeTab, 0);

//       tabs.addEventListener('keydown', (e) => {
//         const i = Array.from(tabsHeader.children).indexOf(activeTab);

//         if (e.keyCode === 39) {
//           if (activeTab.nextElementSibling) {
//             activateTab(activeTab.nextElementSibling, i + 1);
//           } else {
//             activateTab(tabsHeader.children[0], 0);
//           }
//         }

//         if (e.keyCode === 37) {
//           if (activeTab.previousElementSibling) {
//             activateTab(activeTab.previousElementSibling, i - 1);
//           } else {
//             const lastIndex = tabsHeader.children.length - 1;
//             activateTab(tabsHeader.children[lastIndex], lastIndex);
//           }
//         }
//       });

//       Array.from(tabsHeader.children).forEach((tab, i) => {
//         tab.addEventListener('click', () => activateTab(tab, i));
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//         <div className="color"></div>
//         <div className="color"></div>
//         <div className="color"></div>

//         <div className="ICON">
//           <img src="../picture/icon.jpg" alt="OneShot 🚀💫" />
//         </div>

//         <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', width: '80%' }}>


//           {/* <div className="panel">
//             <div className="tabs">

//               <div className="tabs-header" role="tablist" aria-label="my-tabs">
//                 <button role="tab" aria-selected="true" tabIndex="0">
//                   Tab 1
//                 </button>
//                 <button role="tab" aria-selected="false" tabIndex="-1">
//                   Tab 2
//                 </button>
//                 <button role="tab" aria-selected="false" tabIndex="-1">
//                   Tab 3
//                 </button>
//               </div>



//               <div className="tabs-panel" tabIndex="0" role="tabpanel">
//                 <p>
//                   Hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
//                 </p>
//               </div>



//               <div className="tabs-panel" tabIndex="0" role="tabpanel" hidden>
//                 <p>
//                   World world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world 
//                 </p>
//               </div>



//               <div className="tabs-panel" tabIndex="0" role="tabpanel" hidden>
//                 <p>
//                   Happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy 
//                 </p>
//               </div>



//             </div>

//             <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
//               <option value="video">Video</option>
//               <option value="audio">Audio</option>
//             </select>
//             <UserTab />
//           </div> */}






          
//             <div className="tabs">

//               <div className="tabs-header" role="tablist" aria-label="my-tabs">
//                 <button role="tab" aria-selected="true" tabIndex="0">
//                   Tab 1
//                 </button>
//                 <button role="tab" aria-selected="false" tabIndex="-1">
//                   Tab 2
//                 </button>
//                 <button role="tab" aria-selected="false" tabIndex="-1">
//                   Tab 3
//                 </button>
//               </div>



//               <div className="tabs-panel" tabIndex="0" role="tabpanel">
//                 <div className="panel">
//                   <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
//                     <option value="video">Video</option>
//                     <option value="audio">Audio</option>
//                   </select>
//                   <UserTab />
//                 </div>
//               </div>


//               <div className="tabs-panel" tabIndex="0" role="tabpanel" hidden>
//                 <div className="panel">
//                   <p>
//                   World world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world 
//                   </p>
//                   <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
//                     <option value="video">Video</option>
//                     <option value="audio">Audio</option>
//                   </select>
//                   <UserTab />
//                 </div>
//               </div>


//               <div className="tabs-panel" tabIndex="0" role="tabpanel" hidden>
//                 <div className="panel">
//                   <p>
//                   Happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy 
//                   </p>
//                   <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
//                     <option value="video">Video</option>
//                     <option value="audio">Audio</option>
//                   </select>
//                   <UserTab />
//                 </div>
//               </div>

//             </div>



//           <div className="Upload">
//             <MediaPreviewer mediaType={selectedOption} />
//           </div>
//           <div className="Timeline">
//             <TimelineEditor />
//           </div>
//           <button className="button" id="button" role="button" onClick={toggleTheme}>Light/Dark</button>
//         </div>
//         <div className="top-rectangle"></div>
//       </div>
//     </div>
//   );
// }

// export default MainPage;






// MainPage.js

import React, { useState, useEffect } from 'react';
import UserTab from './UserTab';
import MediaPreviewer from './MediaPreviewer';
import TimelineEditor from './TimelineEditor';
import './css/MainPage.css';

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
        activeTabIndicator.style.left = activeTab.offsetLeft + 'px';
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
          <div className="tabs">
            <div className="tabs-header" role="tablist" aria-label="my-tabs">
              <button role="tab" aria-selected="true" tabIndex="0">
                Tab 1
              </button>
              <button role="tab" aria-selected="false" tabIndex="-1">
                Tab 2
              </button>
              <button role="tab" aria-selected="false" tabIndex="-1">
                Tab 3
              </button>
            </div>
            <div className="tabs-panel" tabIndex="0" role="tabpanel">
              <div className="panel">
                <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
                  <option value="video">Video</option>
                  <option value="audio">Audio</option>
                </select>
                <UserTab />
              </div>
            </div>
            <div className="tabs-panel" tabIndex="0" role="tabpanel" hidden>
              <div className="panel">
                <p>
                  World world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world
                </p>
                <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
                  <option value="video">Video</option>
                  <option value="audio">Audio</option>
                </select>
                <UserTab />
              </div>
            </div>
            <div className="tabs-panel" tabIndex="0" role="tabpanel" hidden>
              <div className="panel">
                <p>
                  Happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy
                </p>
                <select className="Video-audio-Select" value={selectedOption} onChange={handleSelectChange}>
                  <option value="video">Video</option>
                  <option value="audio">Audio</option>
                </select>
                <UserTab />
              </div>
            </div>
          </div>

          <div className="Upload">
            <MediaPreviewer mediaType={selectedOption} />
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
