import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(query);

    try {
      // Chrome & Firefox
      media.addEventListener('change', updateTarget);
    } catch {
      // @deprecated method - Safari <= iOS12
      media.addListener(updateTarget);
    }

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => {
      try {
        // Chrome & Firefox
        media.removeEventListener('change', updateTarget);
      } catch {
        // @deprecated method - Safari <= iOS12
        media.removeListener(updateTarget);
      }
    };
  }, [updateTarget, query]);

  return targetReached;
};

const useIsMobile = () => {
  return useMediaQuery('(max-width: 640px)');
};

const useIsDesktop = () => {
  return useMediaQuery('(min-width: 1024px)');
};

export { useIsDesktop, useIsMobile, useMediaQuery };
