import { Howl } from 'howler';

class AudioControl {
  constructor() {
    this.cacheMap = {};
    this.listenerMap = {};
  }

  start({ id, src, startTime, time, engine }) {
    let item;
    if (this.cacheMap[id]) {
      item = this.cacheMap[id];
      item.rate(engine.getPlayRate());
      item.seek((time - startTime) % item.duration());
      item.play();
    } else {
      item = new Howl({ src, loop: true, autoplay: true });
      this.cacheMap[id] = item;
      item.on('load', () => {
        item.rate(engine.getPlayRate());
        item.seek((time - startTime) % item.duration());
      });
    }

    const timeListener = ({ time }) => {
      item.seek(time);
    };
    const rateListener = ({ rate }) => {
      item.rate(rate);
    };
    this.listenerMap[id] = { time: timeListener, rate: rateListener };
    engine.on('afterSetTime', timeListener);
    engine.on('afterSetPlayRate', rateListener);
  }

  stop({ id, engine }) {
    if (this.cacheMap[id]) {
      const item = this.cacheMap[id];
      item.stop();
      const { time, rate } = this.listenerMap[id] || {};
      if (time) engine.off('afterSetTime', time);
      if (rate) engine.off('afterSetPlayRate', rate);
      delete this.listenerMap[id];
    }
  }
}

export default new AudioControl();
