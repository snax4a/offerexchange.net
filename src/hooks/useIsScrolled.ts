import { useState } from 'react';
import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts';

export const useIsScrolled = (minScroll = 0): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const windowScrolled = window.scrollY > minScroll;
    if (windowScrolled !== isScrolled) {
      setIsScrolled(windowScrolled);
    }
  };

  useEventListener('scroll', handleScroll);

  // Set isScrolled at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleScroll();
  }, []);

  return isScrolled;
};
