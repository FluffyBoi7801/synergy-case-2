import { RefObject, useEffect } from "react";

export const useClickOutside = <TElement extends HTMLElement>(
  ref: RefObject<TElement | null>,
  callback: Function
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
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
