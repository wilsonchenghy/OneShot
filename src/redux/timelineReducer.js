import backgroundMusic from '../assets/backgroundMusic.mp3';
import backgroundMusic2 from '../assets/backgroundMusic2.mp3';

const initialState = {
    timelineData: [
      {
        id: "0",
        actions: [
          {
            id: "action00",
            start: 0,
            end: 2,
            effectId: "effect00",
          },
          {
            id: "action01",
            start: 3,
            end: 5,
            effectId: "effect01",
          },
        ],
      },
      {
        id: "1",
        actions: [
          {
            id: "action10",
            start: 1.5,
            end: 5,
            effectId: "effect1",
          }
        ],
      },
      {
        id: '2',
        actions: [
          {
            id: 'action2',
            start: 0,
            end: 30,
            effectId: 'audioEffect1',
            data: {
              src: backgroundMusic,
              name: 'backgroundMusic',
            },
          },
        ],
      },
      {
        id: '3',
        actions: [
          {
            id: 'action3',
            start: 30,
            end: 60,
            effectId: 'audioEffect2',
            data: {
              src: backgroundMusic2,
              name: 'backgroundMusic2',
            },
          },
        ],
      },
    ],
};

const timelineReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TIMELINE_ADD_ACTION':
            return {
                ...state,
                timelineData: [...state.timelineData, action.payload],
            }
        default:
            return state;
    }
};

export default timelineReducer;