import { useRef, useEffect } from "react";

export const useFlasher = () => {
  const ref = useRef();

  useEffect(() => {
    console.log(ref);
    ref.current.classList.add("flash");
    setTimeout(() => {
      ref.current.classList.remove("flash");
    }, 300);
  });

  return ref;
};
