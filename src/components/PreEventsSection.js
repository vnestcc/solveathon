import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PreEventsSection.css';

const events = [
  {
    id: 'alpha',
    title: 'Event Alpha',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'beta',
    title: 'Event Beta',
    desc: 'Suspendisse potenti. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'gamma',
    title: 'Event Gamma',
    desc: 'In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'delta',
    title: 'Event Delta',
    desc: 'Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.',
    img: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80',
  },
];

const PreEventsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const listRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const itemRefs = useRef([]);
  const navigate = useNavigate();

  // Navigate to event info page
  const handleKnowMore = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  // Enhanced scroll handler with better detection
  const handleScroll = useCallback(() => {
    if (window.innerWidth < 768) return;
    
    const container = listRef.current;
    if (!container) return;

    // Clear existing timeout for debouncing
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const containerTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const containerCenter = containerTop + containerHeight / 2;

      let newActiveIdx = 0;
      let minDistance = Infinity;

      // Find the item closest to the center of the container
      itemRefs.current.forEach((item, index) => {
        if (item) {
          const itemTop = item.offsetTop;
          const itemHeight = item.offsetHeight;
          const itemCenter = itemTop + itemHeight / 2;
          const distance = Math.abs(containerCenter - itemCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            newActiveIdx = index;
          }
        }
      });

      // Only update if the index actually changed
      if (newActiveIdx !== activeIdx) {
        setActiveIdx(newActiveIdx);
      }
    }, 100);
  }, [activeIdx]);

  // Mobile navigation with smooth transitions
  const goLeft = useCallback(() => {
    setActiveIdx((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  }, []);

  const goRight = useCallback(() => {
    setActiveIdx((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  }, []);

  // Handle dot navigation
  const goToSlide = useCallback((index) => {
    setActiveIdx(index);
  }, []);

  // Handle window resize with improved performance
  useEffect(() => {
    const onResize = () => {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };
    
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(onResize, 150);
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, [isMobile]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Auto-advance carousel on mobile (optional)
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="pre-events-section">
      <div className={`pre-events-content ${isMobile ? 'mobile' : 'desktop'}`}> 
        {isMobile ? (
          <>
            <h2 className="pre-events-title">PRE-EVENTS:</h2>
            <div className="pre-events-image-wrap">
              <img 
                src={events[activeIdx].img} 
                alt={events[activeIdx].title} 
                className="pre-events-image" 
                loading="lazy"
              />
            </div>
            <div className="pre-events-card">
              <h3 className="pre-events-card-title">{events[activeIdx].title}</h3>
              <p className="pre-events-card-desc">{events[activeIdx].desc}</p>
              <div className="pre-events-actions-row">
                <button 
                  className="pre-events-btn"
                  onClick={() => handleKnowMore(events[activeIdx].id)}
                >
                  KNOW MORE
                </button>
                <div className="pre-events-carousel-controls">
                  <button 
                    className="carousel-arrow" 
                    onClick={goLeft} 
                    aria-label="Previous event"
                  >
                    &#8592;
                  </button>
                  <button 
                    className="carousel-arrow" 
                    onClick={goRight} 
                    aria-label="Next event"
                  >
                    &#8594;
                  </button>
                </div>
              </div>
              <div className="pre-events-dots">
                {events.map((_, i) => (
                  <span 
                    key={i} 
                    className={`dot${i === activeIdx ? ' active' : ''}`}
                    onClick={() => goToSlide(i)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Go to slide ${i + 1}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        goToSlide(i);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="pre-events-row">
            <div className="pre-events-left-col">
              <h2 className="pre-events-title">PRE-EVENTS:</h2>
              <div className="pre-events-list-wrap">
                <div 
                  className="pre-events-list" 
                  ref={listRef} 
                  onScroll={handleScroll} 
                  tabIndex={0}
                  role="listbox"
                  aria-label="Pre-events list"
                >
                  {events.map((event, i) => (
                    <div 
                      key={i} 
                      ref={el => itemRefs.current[i] = el}
                      className="pre-events-list-item"
                      role="option"
                      aria-selected={i === activeIdx}
                    > 
                      <h3 className="pre-events-card-title">{event.title}</h3>
                      <p className="pre-events-card-desc">{event.desc}</p>
                      <button 
                        className="pre-events-btn"
                        onClick={() => handleKnowMore(event.id)}
                      >
                        KNOW MORE
                      </button>
                    </div>
                  ))}
                </div>
                <div className="pre-events-list-scrollbar">
                  <div 
                    className="pre-events-list-thumb" 
                    style={{ 
                      height: `${100 / events.length}%`, 
                      top: `${(100 / events.length) * activeIdx}%` 
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="pre-events-image-wrap">
              <img 
                src={events[activeIdx].img} 
                alt={events[activeIdx].title} 
                className="pre-events-image"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PreEventsSection;