const initialState = {
    mediaUrl: null
}

const mediaPreviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PREVIEW_MEDIA_ACTION':
            return action.payload;
        default:
            return state;
    }
}

export default mediaPreviewReducer;