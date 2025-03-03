import { useState, useEffect } from "react";

const useIntersectionObserver = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only update state if the visibility changes
        if (entry.isIntersecting !== isVisible) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const currentRef = ref.current; // Store the current ref value

    if (currentRef) {
      observer.observe(currentRef); // Observe the target element
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup on unmount
      }
    };
  }, [ref, isVisible]); // Add `isVisible` to dependencies to avoid unnecessary updates

  return isVisible;
};

export default useIntersectionObserver;