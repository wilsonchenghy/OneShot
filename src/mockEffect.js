import audioControl from './audioControl';

export const mockEffect = {
    effect00: {
        id: "effect00",
        name: "效果00",
    },
    effect01: {
        id: "effect01",
        name: "效果01",
    },
    effect1: {
        id: "effect1",
        name: "效果1",
    },
    audioEffect1: {
        id: 'audioEffect1',
        name: 'audioEffect1',
        source: {
            start: ({ action, engine, isPlaying, time }) => {
            if (isPlaying) {                
                const src = action.data.src;
                audioControl.start({ id: src, src, startTime: action.start, engine, time });
            }
            },
            enter: ({ action, engine, isPlaying, time }) => {
            if (isPlaying) {
                const src = action.data.src;
                audioControl.start({ id: src, src, startTime: action.start, engine, time });
            }
            },
            leave: ({ action, engine }) => {
                const src = action.data.src;
                audioControl.stop({ id: src, engine });
            },
            stop: ({ action, engine }) => {
                const src = action.data.src;
                audioControl.stop({ id: src, engine });
            },
        },
    },
    audioEffect2: {
        id: 'audioEffect2',
        name: 'audioEffect2',
        source: {
            start: ({ action, engine, isPlaying, time }) => {
            if (isPlaying) {                
                const src = action.data.src;
                audioControl.start({ id: src, src, startTime: action.start, engine, time });
            }
            },
            enter: ({ action, engine, isPlaying, time }) => {
            if (isPlaying) {
                const src = action.data.src;
                audioControl.start({ id: src, src, startTime: action.start, engine, time });
            }
            },
            leave: ({ action, engine }) => {
                const src = action.data.src;
                audioControl.stop({ id: src, engine });
            },
            stop: ({ action, engine }) => {
                const src = action.data.src;
                audioControl.stop({ id: src, engine });
            },
        },
    },
};