import audioControl from './audioControl';
import lottieControl from './lottieControl';

export const mockEffect = {
    audioEffect: {
        id: 'audioEffect',
        name: 'playAudio',
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
    visualEffect: {
        id: 'visualEffect',
        name: '播放动画',
        source: {
          enter: ({ action, time }) => {
            const src = action.data.src;
            lottieControl.enter({ id: src, src, startTime: action.start, endTime: action.end, time });
          },
          update: ({ action, time }) => {
            const src = action.data.src;
            lottieControl.update({ id: src, src, startTime: action.start, endTime: action.end, time });
          },
          leave: ({ action, time }) => {
            const src = action.data.src;
            lottieControl.leave({ id: src, startTime: action.start, endTime: action.end, time });
          },
        },
      },
};