import React, { useRef, useEffect, useState, ReactNode } from 'react';
import './Slider.css'; // Make sure this path is correct

interface SliderProps {
  id: string; // ID for the article-wrapper div
  children: ReactNode; // The articles to be scrolled
}

const Slider: React.FC<SliderProps> = ({ id, children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Function to check scrollability
  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  // Scroll handler
  const scroll = (direction: number) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.7; // Scroll by 70% of visible width
      scrollRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Effect for initial check and re-check on scroll/resize
  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      checkScrollability(); // Initial check

      const handleScroll = () => checkScrollability();
      const handleResize = () => checkScrollability();

      currentRef.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      // Cleanup event listeners
      return () => {
        currentRef.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="slider-container">
      <div className="article-wrapper" id={id} ref={scrollRef}>
        {children}
      </div>
      {canScrollLeft && (
        <button className="slider-nav-btn slider-nav-left" onClick={() => scroll(-1)}>
          &#9664;
        </button>
      )}
      {canScrollRight && (
        <button className="slider-nav-btn slider-nav-right" onClick={() => scroll(1)}>
          &#9654;
        </button>
      )}
    </div>
  );
};

export default Slider;