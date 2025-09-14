import { useEffect } from "react";

export function useAutoScrollAnimation(threshold = 0.3) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".animate-on-scroll");

    // Observer chung
    const defaultObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const animationName = el.dataset.animate || "fadeInUp";
            el.classList.add("visible", animationName);
            defaultObserver.unobserve(el);
          }
        });
      },
      {
        threshold
      }
    );

    // Observer riêng cho element thứ 2 LOGO
    const secondObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const animationName = el.dataset.animate || "fadeInUp";
            el.classList.add("visible", animationName);
            secondObserver.unobserve(el);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -360px 0px", // rootMargin riêng cho element thứ 2 LOGO
      }
    );

    // Observer riêng cho element thứ 3
    const thirdObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const animationName = el.dataset.animate || "fadeInUp";
            el.classList.add("visible", animationName);
            thirdObserver.unobserve(el);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -190px 0px", // rootMargin riêng cho element thứ 3
      }
    );

    elements.forEach((el, index) => {
      if (index === 1) {
        secondObserver.observe(el);
      } else if (index === 2) {
        thirdObserver.observe(el);
      } else {
        defaultObserver.observe(el);
      }
    });

    return () => {
      defaultObserver.disconnect();
      secondObserver.disconnect();
      thirdObserver.disconnect();
    };
  }, [threshold]);
}