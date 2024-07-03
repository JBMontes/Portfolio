import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolling to the top of the document
    document.documentElement.scrollTop = 0;
    // For browsers that use 'document.body'
    document.body.scrollTop = 0;
  }, [pathname]);
};

export default useScrollToTop;