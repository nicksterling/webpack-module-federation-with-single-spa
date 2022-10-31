import { ReplaySubject } from 'rxjs';

const PubSubMFE = (function () {
  //Let's add this to the window scope
  window.PubSubMFE =
    window.PubSubMFE ||
    (() => {
      /**
       * Let's register all of our observables in a central place so we can pull them from anywhere
       */
      let handlers = {};

      /**
       * Let's also add an event listener so we can return observables via Events
       * NOTE: DISABLED FOR NOW... I'm not sure I like the flow
       */
      // window.addEventListener('getMfeObservable', (e) => {
      //   if (!handlers[e.detail.name]) {
      //     generateObservable(e.detail.name);
      //   }
      //   e.detail.value(handlers[e.detail.name]);
      // });

      const generateObservable = (channel) => {
        if (!handlers[channel]) {
          handlers[channel] = new ReplaySubject(1);
        }
      };
      return {
        get: (channel) => {
          generateObservable(channel);
          if (handlers[channel]) {
            return handlers[channel];
          }
        },
      };
    })();
  return window.PubSubMFE;
})();

export { PubSubMFE };
