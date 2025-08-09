import { useEffect } from 'react';

export function useAutoScrollAnimation(threshold = 0.3) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const animationName = el.dataset.animate || 'fadeInUp';
            el.classList.add('visible', animationName);
            observer.unobserve(el);
          }
        });
      },
      {
        threshold
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);
}