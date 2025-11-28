import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState, RefObject } from "react";

/**
 * Utility function để merge Tailwind CSS classes
 * Kết hợp clsx và tailwind-merge để xử lý conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Custom hook để trigger khi element vào viewport
 * @param ref - React ref đến element cần observe
 * @param options - IntersectionObserver options
 * @returns boolean - true nếu element đã vào viewport
 */
export function useScrollTrigger<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>, options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // chỉ trigger 1 lần
          }
        });
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}