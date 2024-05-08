const initialState = {
    timelineData: [
        {
            id: "0",
            actions: [
              {
                id: "action00",
                start: 0,
                end: 2,
                effectId: "effect0",
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
        }
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