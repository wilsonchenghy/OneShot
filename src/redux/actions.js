export const timelineAddAction = (timelineData) => ({
    type: 'TIMELINE_ADD_ACTION',
    payload: timelineData,
});

export const previewMediaAction = (mediaUrl) => ({
    type: 'PREVIEW_MEDIA_ACTION',
    payload: {mediaUrl: mediaUrl},
});

export const setPreviewerLoadingAction = (isLoading) => ({
    type: 'SET_PREVIEWER_LOADING_ACTION',
    payload: {isLoading: isLoading},
});