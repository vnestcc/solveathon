// import React, { useState, useEffect } from 'react';
// import { ArrowLeft } from 'lucide-react';
// import './OurLegacy.css'; // Import the CSS file

// const OurLegacy = () => {
//   const [selectedYear, setSelectedYear] = useState('2024');
//   const [scrollPhotos, setScrollPhotos] = useState([]);
//   const [showAllGallery, setShowAllGallery] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);


//   // Generate infinite scroll photos
//   useEffect(() => {
//     const generatePhotos = () => {
//       const photos = [];
//       const photoCategories = [
//         'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=280&fit=crop',
//         'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=400&h=280&fit=crop',
//       ];
      
//       for (let i = 0; i < 50; i++) {
//         photos.push({
//           id: i,
//           src: photoCategories[i % photoCategories.length],
//           alt: `Event photo ${i + 1}`
//         });
//       }
//       setScrollPhotos(photos);
//     };
    
//     generatePhotos();
//   }, []);

//   const winners2024 = [
//     { position: '1st', name: 'John Doe', team: 'Team Alpha' },
//     { position: '2nd', name: 'Jane Smith', team: 'Team Beta' },
//     { position: '3rd', name: 'Mike Johnson', team: 'Team Gamma' }
//   ];

//   const winners2023 = [
//     { position: '1st', name: 'Sarah Wilson', team: 'Team Delta' },
//     { position: '2nd', name: 'Chris Brown', team: 'Team Epsilon' },
//     { position: '3rd', name: 'Emma Davis', team: 'Team Zeta' }
//   ];

//   // Gallery images array
//   const galleryImages = [
//     {
//       id: 1,
//       src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop',
//       alt: 'Gallery 1'
//     },
//     {
//       id: 2,
//       src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
//       alt: 'Gallery 2'
//     },
//     {
//       id: 3,
//       src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
//       alt: 'Gallery 3'
//     },
//     {
//       id: 4,
//       src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop',
//       alt: 'Gallery 4'
//     },
//     {
//       id: 5,
//       src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop',
//       alt: 'Gallery 5'
//     },
//     {
//       id: 6,
//       src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop',
//       alt: 'Gallery 6'
//     },
//     {
//       id: 7,
//       src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop',
//       alt: 'Gallery 7'
//     },
//     {
//       id: 8,
//       src: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=250&fit=crop',
//       alt: 'Gallery 8'
//     },
//     {
//       id: 9,
//       src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop',
//       alt: 'Gallery 9'
//     },
//     {
//       id: 10,
//       src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
//       alt: 'Gallery 10'
//     },
//     {
//       id: 11,
//       src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop',
//       alt: 'Gallery 11'
//     },
//     {
//       id: 12,
//       src: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=400&h=250&fit=crop',
//       alt: 'Gallery 12'
//     }
//   ];

//   const currentWinners = selectedYear === '2024' ? winners2024 : winners2023;

//   // Split photos into two rows
//   const firstRow = scrollPhotos.slice(0, Math.ceil(scrollPhotos.length / 2));
//   const secondRow = scrollPhotos.slice(Math.ceil(scrollPhotos.length / 2));

//   // Determine which images to show (6 initially, then all 12)
//   const imagesToShow = showAllGallery ? galleryImages : galleryImages.slice(0, 6);

//   const handleBack = () => {
//     // Navigate back in browser history
//     if (window.history.length > 1) {
//       window.history.back();
//     } else {
//       // Fallback: redirect to home page
//       window.location.href = '/';
//     }
//   };

//   const handleViewMore = () => {
//     setShowAllGallery(!showAllGallery);
//   };

//   return (
//     <div className="our-legacy-container">
//       {/* Back Arrow Button */}
//       <button onClick={handleBack} className="back-button">
//         <ArrowLeft size={24} color="white" />
//       </button>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Legacy Title Section */}
//         <section className="legacy-section">
//           <h1 className="legacy-title">OUR LEGACY</h1>
//           <p className="legacy-subtitle">
//             Explore the highlights from previous editions of the Solve-a-thon hackathon organized by V-NEST
//           </p>
//         </section>

//         {/* Two-Row Infinite Scroll Photos */}
//         <section className="infinite-scroll-section">
//           <div className="scroll-container">
//             {/* First Row - Moving Right */}
//             <div className="scroll-track scroll-track-first">
//               {firstRow.concat(firstRow).map((photo, index) => (
//                 <div key={`first-${photo.id}-${index}`} className="scroll-photo">
//                   <img src={photo.src} alt={photo.alt} className="scroll-image" />
//                 </div>
//               ))}
//             </div>
            
//             {/* Second Row - Moving Left */}
//             <div className="scroll-track scroll-track-second">
//               {secondRow.concat(secondRow).map((photo, index) => (
//                 <div key={`second-${photo.id}-${index}`} className="scroll-photo">
//                   <img src={photo.src} alt={photo.alt} className="scroll-image" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Enhanced Stats Section */}
//         <section className="stats-section">
//           {/* Year Selection Buttons */}
//           <div className="year-buttons">
//             <button
//               className={`year-btn ${selectedYear === '2024' ? 'year-btn-active' : ''}`}
//               onClick={() => setSelectedYear('2024')}
//             >
//               SOLVE-A-THON 2024
//             </button>
//             <button
//               className={`year-btn ${selectedYear === '2023' ? 'year-btn-active' : ''}`}
//               onClick={() => setSelectedYear('2023')}
//             >
//               SOLVE-A-THON 2023
//             </button>
//           </div>

//           {/* Enhanced Stats Container */}
//           <div className="stats-container">
//             {/* Decorative Elements */}
//             <div className="decorative-circle-1"></div>
//             <div className="decorative-circle-2"></div>
            
//             {/* Stats Grid */}
//             <div className="stats-grid">
//               <div className="stat-box">
//                 <div className="stat-icon">🏆</div>
//                 <div className="stat-label">WINNERS</div>
//                 <div className="stat-number">3</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-icon">👥</div>
//                 <div className="stat-label">PARTICIPANTS</div>
//                 <div className="stat-number">350+</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-icon">📋</div>
//                 <div className="stat-label">REGISTRATIONS</div>
//                 <div className="stat-number">500+</div>
//               </div>
//             </div>

//             {/* Enhanced Winners Section */}
//             <div className="winners-section">
//               {/* Timeline */}
//               <div className="timeline">
//                 <div className="timeline-line"></div>
//                 {currentWinners.map((winner, index) => (
//                   <div key={index} className="position-circle">
//                     {winner.position}
//                   </div>
//                 ))}
//               </div>
              
//               {/* Winners Grid */}
//               <div className="winners-grid">
//                 {currentWinners.map((winner, index) => (
//                   <div key={index} className="winner-box">
//                     <div className="winner-gradient-bar"></div>
//                     <div className="winner-name">
//                       {winner.name}<br />
//                       {winner.team}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Gallery Section */}
//         <section className="gallery-section">
//           <h2 className="gallery-title">GALLERY</h2>
//           <div className="gallery-grid">
//             {imagesToShow.map((image) => (
//               <div key={image.id} className="gallery-item">
//                 <img 
//                   src={image.src} 
//                   alt={image.alt} 
//                   className="gallery-image"
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* View More/Less Button */}
//           <div className="view-more-container">
//             <button onClick={handleViewMore} className="view-more-btn">
//               {showAllGallery ? 'VIEW LESS' : 'VIEW MORE'}
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default OurLegacy;



















import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import './OurLegacy.css'; // Import the CSS file

const OurLegacy = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [scrollPhotos, setScrollPhotos] = useState([]);
  const [showAllGallery, setShowAllGallery] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate infinite scroll photos
  useEffect(() => {
    const generatePhotos = () => {
      const photos = [];
      const photoCategories = [
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=400&h=280&fit=crop',
      ];
      
      for (let i = 0; i < 50; i++) {
        photos.push({
          id: i,
          src: photoCategories[i % photoCategories.length],
          alt: `Event photo ${i + 1}`
        });
      }
      setScrollPhotos(photos);
    };
    
    generatePhotos();
  }, []);

  const winners2024 = [
    { position: '1st', name: 'John Doe', team: 'Team Alpha' },
    { position: '2nd', name: 'Jane Smith', team: 'Team Beta' },
    { position: '3rd', name: 'Mike Johnson', team: 'Team Gamma' }
  ];

  const winners2023 = [
    { position: '1st', name: 'Sarah Wilson', team: 'Team Delta' },
    { position: '2nd', name: 'Chris Brown', team: 'Team Epsilon' },
    { position: '3rd', name: 'Emma Davis', team: 'Team Zeta' }
  ];

  // Gallery images array with responsive sizes
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8',
      alt: 'Gallery 1'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      alt: 'Gallery 2'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      alt: 'Gallery 3'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6',
      alt: 'Gallery 4'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
      alt: 'Gallery 5'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      alt: 'Gallery 6'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786',
      alt: 'Gallery 7'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b',
      alt: 'Gallery 8'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      alt: 'Gallery 9'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      alt: 'Gallery 10'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      alt: 'Gallery 11'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8',
      alt: 'Gallery 12'
    }
  ];

  const currentWinners = selectedYear === '2024' ? winners2024 : winners2023;

  // Split photos into two rows
  const firstRow = scrollPhotos.slice(0, Math.ceil(scrollPhotos.length / 2));
  const secondRow = scrollPhotos.slice(Math.ceil(scrollPhotos.length / 2));

  // Determine which images to show (6 initially, then all 12)
  const imagesToShow = showAllGallery ? galleryImages : galleryImages.slice(0, 6);

  const handleBack = () => {
    // Navigate back in browser history
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback: redirect to home page
      window.location.href = '/';
    }
  };

  const handleViewMore = () => {
    setShowAllGallery(!showAllGallery);
  };

  // Lazy Loading Image Component
  const LazyImage = ({ src, alt, className, sizes = "(max-width: 768px) 100vw, 50vw" }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();

    const handleLoad = useCallback(() => {
      setIsLoaded(true);
    }, []);

    const handleError = useCallback(() => {
      console.warn(`Failed to load image: ${src}`);
    }, [src]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, []);

    // Generate responsive image URLs for Unsplash
    const generateSrcSet = (baseUrl) => {
      const sizes = [400, 600, 800, 1200];
      return sizes.map(size => `${baseUrl}?w=${size}&h=${Math.round(size * 0.6)}&fit=crop ${size}w`).join(', ');
    };

    const generateWebPSrcSet = (baseUrl) => {
      const sizes = [400, 600, 800, 1200];
      return sizes.map(size => `${baseUrl}?w=${size}&h=${Math.round(size * 0.6)}&fit=crop&fm=webp ${size}w`).join(', ');
    };

    return (
      <div ref={imgRef} className={className}>
        {isInView && (
          <picture>
            <source 
              type="image/webp"
              srcSet={generateWebPSrcSet(src)}
              sizes={sizes}
            />
            <img
              src={`${src}?w=400&h=240&fit=crop`}
              srcSet={generateSrcSet(src)}
              sizes={sizes}
              alt={alt}
              loading="lazy"
              decoding="async"
              onLoad={handleLoad}
              onError={handleError}
              style={{
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </picture>
        )}
        {!isLoaded && isInView && (
          <div style={{
            background: 'linear-gradient(90deg, #f0f0f0 25%, rgba(240,240,240,0.5) 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite',
            width: '100%',
            height: '100%'
          }} />
        )}
      </div>
    );
  };

  return (
    <div className="our-legacy-container">
      {/* Add CSS for loading animation */}
      <style jsx>{`
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* Back Arrow Button */}
      <button onClick={handleBack} className="back-button">
        <ArrowLeft size={24} color="white" />
      </button>

      {/* Main Content */}
      <main className="main-content">
        {/* Legacy Title Section */}
        <section className="legacy-section">
          <h1 className="legacy-title">OUR LEGACY</h1>
          <p className="legacy-subtitle">
            Explore the highlights from previous editions of the Solve-a-thon hackathon organized by V-NEST
          </p>
        </section>

        {/* Two-Row Infinite Scroll Photos */}
        <section className="infinite-scroll-section">
          <div className="scroll-container">
            {/* First Row - Moving Right */}
            <div className="scroll-track scroll-track-first">
              {firstRow.concat(firstRow).map((photo, index) => (
                <div key={`first-${photo.id}-${index}`} className="scroll-photo">
                  <LazyImage 
                    src={photo.src.split('?')[0]} 
                    alt={photo.alt} 
                    className="scroll-image"
                    sizes="(max-width: 768px) 200px, 280px"
                  />
                </div>
              ))}
            </div>
            
            {/* Second Row - Moving Left */}
            <div className="scroll-track scroll-track-second">
              {secondRow.concat(secondRow).map((photo, index) => (
                <div key={`second-${photo.id}-${index}`} className="scroll-photo">
                  <LazyImage 
                    src={photo.src.split('?')[0]} 
                    alt={photo.alt} 
                    className="scroll-image"
                    sizes="(max-width: 768px) 200px, 280px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="stats-section">
          {/* Year Selection Buttons */}
          <div className="year-buttons">
            <button
              className={`year-btn ${selectedYear === '2024' ? 'year-btn-active' : ''}`}
              onClick={() => setSelectedYear('2024')}
            >
              SOLVE-A-THON 2024
            </button>
            <button
              className={`year-btn ${selectedYear === '2023' ? 'year-btn-active' : ''}`}
              onClick={() => setSelectedYear('2023')}
            >
              SOLVE-A-THON 2023
            </button>
          </div>

          {/* Enhanced Stats Container */}
          <div className="stats-container">
            {/* Decorative Elements */}
            <div className="decorative-circle-1"></div>
            <div className="decorative-circle-2"></div>
            
            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-icon">🏆</div>
                <div className="stat-label">WINNERS</div>
                <div className="stat-number">3</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">👥</div>
                <div className="stat-label">PARTICIPANTS</div>
                <div className="stat-number">350+</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">📋</div>
                <div className="stat-label">REGISTRATIONS</div>
                <div className="stat-number">500+</div>
              </div>
            </div>

            {/* Enhanced Winners Section */}
            <div className="winners-section">
              {/* Timeline */}
              <div className="timeline">
                <div className="timeline-line"></div>
                {currentWinners.map((winner, index) => (
                  <div key={index} className="position-circle">
                    {winner.position}
                  </div>
                ))}
              </div>
              
              {/* Winners Grid */}
              <div className="winners-grid">
                {currentWinners.map((winner, index) => (
                  <div key={index} className="winner-box">
                    <div className="winner-gradient-bar"></div>
                    <div className="winner-name">
                      {winner.name}<br />
                      {winner.team}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2 className="gallery-title">GALLERY</h2>
          <div className="gallery-grid">
            {imagesToShow.map((image) => (
              <div key={image.id} className="gallery-item">
                <LazyImage 
                  src={image.src} 
                  alt={image.alt} 
                  className="gallery-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          
          {/* View More/Less Button */}
          <div className="view-more-container">
            <button onClick={handleViewMore} className="view-more-btn">
              {showAllGallery ? 'VIEW LESS' : 'VIEW MORE'}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurLegacy;