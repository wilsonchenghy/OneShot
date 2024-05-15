const initialState = {
    mediaUrl: null,
    isLoading: false
}

const mediaPreviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PREVIEW_MEDIA_ACTION':
            return action.payload;
        case 'SET_PREVIEWER_LOADING_ACTION':
            return action.payload;
        default:
            return state;
    }
}

export default mediaPreviewReducer;