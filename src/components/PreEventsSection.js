import React, { useState, useRef, useCallback, useEffect } from 'react';
import './PreEventsSection.css';

const events = [
  {
    title: 'Event Alpha',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Event Beta',
    desc: 'Suspendisse potenti. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Event Gamma',
    desc: 'In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
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

  // Improved scroll handler with better detection
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
    }, 100); // Increased debounce time for smoother scrolling
  }, [activeIdx]);

  // Mobile navigation
  const goLeft = () => setActiveIdx((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  const goRight = () => setActiveIdx((prev) => (prev === events.length - 1 ? 0 : prev + 1));

  // Handle window resize
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="pre-events-section">
      <div className={`pre-events-content ${isMobile ? 'mobile' : 'desktop'}`}> 
        {isMobile ? (
          <>
            <h2 className="pre-events-title">PRE-EVENTS:</h2>
            <div className="pre-events-image-wrap">
              <img src={events[activeIdx].img} alt={events[activeIdx].title} className="pre-events-image" />
            </div>
            <div className="pre-events-card">
              <h3 className="pre-events-card-title">{events[activeIdx].title}</h3>
              <p className="pre-events-card-desc">{events[activeIdx].desc}</p>
              <div className="pre-events-actions-row">
                <a href="#" className="pre-events-btn">KNOW MORE</a>
                <div className="pre-events-carousel-controls">
                  <button className="carousel-arrow" onClick={goLeft} aria-label="Previous event">&#8592;</button>
                  <button className="carousel-arrow" onClick={goRight} aria-label="Next event">&#8594;</button>
                </div>
              </div>
              <div className="pre-events-dots">
                {events.map((_, i) => (
                  <span key={i} className={`dot${i === activeIdx ? ' active' : ''}`}></span>
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
                >
                  {events.map((event, i) => (
                    <div 
                      key={i} 
                      ref={el => itemRefs.current[i] = el}
                      className={`pre-events-list-item${i === activeIdx ? ' active' : ''}`}
                    > 
                      <h3 className="pre-events-card-title">{event.title}</h3>
                      <p className="pre-events-card-desc">{event.desc}</p>
                      <a href="#" className="pre-events-btn">KNOW MORE</a>
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
                  ></div>
                </div>
              </div>
            </div>
            <div className="pre-events-image-wrap">
              <img src={events[activeIdx].img} alt={events[activeIdx].title} className="pre-events-image" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PreEventsSection;