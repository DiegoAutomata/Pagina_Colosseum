import { useEffect } from 'react';

export const useBfCache = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // La página fue restaurada desde el bfcache
        window.location.reload();
      }
    };

    const handlePageHide = () => {
      // Limpiar cualquier estado o suscripción que no deba persistir
    };

    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, []);
};
