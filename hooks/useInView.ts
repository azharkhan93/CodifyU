"use client"
import { useState, useEffect, useRef, RefObject } from "react";

type UseInViewOptions = IntersectionObserverInit;
type UseInViewReturn = [RefObject<HTMLDivElement>, boolean];

export const useInView = (options: UseInViewOptions): UseInViewReturn => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref as RefObject<HTMLDivElement>, isInView];
};
