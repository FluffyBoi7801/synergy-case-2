import { RefObject, useEffect } from "react";

export const useClickOutside = <TElement extends HTMLElement>(
  ref: RefObject<TElement>,
  callback: Function
) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      event.preventDefault();
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
      return;
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, callback]);
};
