export const timeOut = (callback, duration) => {
  setTimeout(() => {
    callback();
  }, duration);
};
