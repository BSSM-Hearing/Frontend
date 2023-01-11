import { useRef } from "react";

const useDebounce = () => {
  const timer = (useRef < null) | (NodeJS.TimeOut > null);
  const debounce = (callback, timeMS) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      callback();
      timer.current = null;
    }, timeMS);
  };
  return { debounce };
};
export default useDebounce;
