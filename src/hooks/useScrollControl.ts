// hooks/useScrollControl.ts
import { useEffect } from 'react';

const useScrollControl = () => {
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scroll Down
        document.body.style.position = 'fixed';
      } else {
        // Scroll Up
        document.body.style.position = 'relative';
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollControl;
