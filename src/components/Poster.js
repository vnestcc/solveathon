// import React, { useState } from 'react';
// import './Poster.css';

// const Poster = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Sample event data
//   const events = [
//     {
//       id: 1,
//       title: "EVENT NAME",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=600&fit=crop"
//     },
//     {
//       id: 2,
//       title: "HACKATHON 2024",
//       description: "Join us for an exciting 48-hour coding marathon where innovation meets collaboration. Build amazing projects, network with fellow developers, and compete for incredible prizes.",
//       image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZW50fGVufDB8fDB8fHww"
//     },
//     {
//       id: 3,
//       title: "DESIGN WORKSHOP",
//       description: "Master the art of modern UI/UX design in this intensive workshop. Learn industry best practices, work with professional tools, and create stunning user experiences.",
//       image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop"
//     },
//     {
//       id: 4,
//       title: "TECH CONFERENCE",
//       description: "Discover the latest trends in technology, artificial intelligence, and software development. Network with industry leaders and gain insights into the future of tech.",
//       image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=600&fit=crop"
//     },
//     {
//       id: 5,
//       title: "STARTUP PITCH",
//       description: "Present your innovative startup ideas to a panel of experienced investors and entrepreneurs. Get valuable feedback and potential funding opportunities.",
//       image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=600&fit=crop"
//     }
//   ];

//   const nextEvent = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === events.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevEvent = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? events.length - 1 : prevIndex - 1
//     );
//   };

//   const goToEvent = (index) => {
//     setCurrentIndex(index);
//   };

//   const currentEvent = events[currentIndex];

//   return (
//     <div className="poster-container">
//       {/* Desktop Layout */}
//       <div className="desktop-layout">
//         {/* Left side with POSTERS text and thumbnail */}
//         <div className="left-side">
//           <div className="posters-text">POSTERS</div>
//           <div className="left-thumbnail-container">
//             {currentIndex > 0 && (
//               <div
//                 className="thumbnail side-thumbnail"
//                 onClick={() => goToEvent(currentIndex - 1)}
//               >
//                 <img src={events[currentIndex - 1].image} alt={events[currentIndex - 1].title} />
//               </div>
//             )}
//             {currentIndex === 0 && (
//               <div
//                 className="thumbnail side-thumbnail"
//                 onClick={() => goToEvent(events.length - 1)}
//               >
//                 <img src={events[events.length - 1].image} alt={events[events.length - 1].title} />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Main content area */}
//         <div className="main-content">
//           <div className="center-content">
//             <div className="poster-image-container">
//               <div 
//                 className="poster-slider" 
//                 style={{ 
//                   transform: `translateX(-${(currentIndex * 100) / events.length}%)`,
//                   width: `${events.length * 100}%`
//                 }}
//               >
//                 {events.map((event, index) => (
//                   <div 
//                     key={event.id} 
//                     className="poster-slide"
//                     style={{ width: `${100 / events.length}%` }}
//                   >
//                     <img src={event.image} alt={event.title} className="poster-image" />
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="desktop-nav-arrows">
//               <button className="nav-arrow nav-arrow-left" onClick={prevEvent}>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//               <button className="nav-arrow nav-arrow-right" onClick={nextEvent}>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right side content */}
//         <div className="right-content">
//           <div className="poster-info">
//             <h2 className="poster-title">
//               <span className="title-bg">{currentEvent.title}</span>
//             </h2>
//             <p className="poster-description">{currentEvent.description}</p>  
//           </div>
          
//           <div className="thumbnails-container">
//             {events.map((event, index) => (
//               <div
//                 key={event.id}
//                 className={`thumbnail ${index === currentIndex ? 'thumbnail-active' : ''}`}
//                 onClick={() => goToEvent(index)}
//               >
//                 <img src={event.image} alt={event.title} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="mobile-layout">
//         <div className="mobile-header">
//           <h1 className="mobile-posters-text">POSTERS</h1>
//         </div>

//         <div className="mobile-poster-container">
//           <button className="nav-arrow nav-arrow-left mobile-nav" onClick={prevEvent}>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>

//           <div className="mobile-poster-image-container">
//             <div 
//               className="poster-slider" 
//               style={{ 
//                 transform: `translateX(-${(currentIndex * 100) / events.length}%)`,
//                 width: `${events.length * 100}%`
//               }}
//             >
//               {events.map((event, index) => (
//                 <div 
//                   key={event.id} 
//                   className="poster-slide"
//                   style={{ width: `${100 / events.length}%` }}
//                 >
//                   <img src={event.image} alt={event.title} className="poster-image" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button className="nav-arrow nav-arrow-right mobile-nav" onClick={nextEvent}>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>
        
//         <div className="mobile-poster-info">
//           <h2 className="mobile-poster-title">
//             <span className="mobile-title-bg">{currentEvent.title}</span>
//           </h2>
//           <p className="mobile-poster-description">{currentEvent.description}</p>
//         </div>

//         <div className="poster-indicators">
//           {events.map((_, index) => (
//             <button
//               key={index}
//               className={`indicator ${index === currentIndex ? 'indicator-active' : ''}`}
//               onClick={() => goToEvent(index)}
//             />
//           ))}
//         </div>

//         {/* <div className="mobile-thumbnails-container">
//           {events.map((event, index) => (
//             <div
//               key={event.id}
//               className={`mobile-thumbnail ${index === currentIndex ? 'mobile-thumbnail-active' : ''}`}
//               onClick={() => goToEvent(index)}
//             >
//               <img src={event.image} alt={event.title} />
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Poster;




import React, { useState } from 'react';
import './Poster.css';

const Poster = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample event data
  const events = [
    {
      id: 1,
      title: "EVENT NAME",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "JUNE 15, 2024",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      title: "HACKATHON 2024",
      description: "Join us for an exciting 48-hour coding marathon where innovation meets collaboration. Build amazing projects, network with fellow developers, and compete for incredible prizes.",
      date: "JULY 22-24, 2024",
      image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZW50fGVufDB8fDB8fHww"
    },
    {
      id: 3,
      title: "DESIGN WORKSHOP",
      description: "Master the art of modern UI/UX design in this intensive workshop. Learn industry best practices, work with professional tools, and create stunning user experiences.",
      date: "AUGUST 10, 2024",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop"
    },
    {
      id: 4,
      title: "TECH CONFERENCE",
      description: "Discover the latest trends in technology, artificial intelligence, and software development. Network with industry leaders and gain insights into the future of tech.",
      date: "SEPTEMBER 5-6, 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=600&fit=crop"
    },
    {
      id: 5,
      title: "STARTUP PITCH",
      description: "Present your innovative startup ideas to a panel of experienced investors and entrepreneurs. Get valuable feedback and potential funding opportunities.",
      date: "OCTOBER 18, 2024",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=600&fit=crop"
    }
  ];

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const goToEvent = (index) => {
    setCurrentIndex(index);
  };

  const currentEvent = events[currentIndex];

  return (
    <div className="poster-container">
      {/* Desktop Layout */}
      <div className="desktop-layout">
        {/* Left side with POSTERS text and thumbnail */}
        <div className="left-side">
          <div className="posters-text">POSTERS</div>
          <div className="left-thumbnail-container">
            {currentIndex > 0 && (
              <div
                className="thumbnail side-thumbnail"
                onClick={() => goToEvent(currentIndex - 1)}
              >
                <img src={events[currentIndex - 1].image} alt={events[currentIndex - 1].title} />
              </div>
            )}
            {currentIndex === 0 && (
              <div
                className="thumbnail side-thumbnail"
                onClick={() => goToEvent(events.length - 1)}
              >
                <img src={events[events.length - 1].image} alt={events[events.length - 1].title} />
              </div>
            )}
          </div>
        </div>

        {/* Main content area */}
        <div className="main-content">
          <div className="center-content">
            <div className="poster-image-container">
              <div 
                className="poster-slider" 
                style={{ 
                  transform: `translateX(-${(currentIndex * 100) / events.length}%)`,
                  width: `${events.length * 100}%`
                }}
              >
                {events.map((event, index) => (
                  <div 
                    key={event.id} 
                    className="poster-slide"
                    style={{ width: `${100 / events.length}%` }}
                  >
                    <img src={event.image} alt={event.title} className="poster-image" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="desktop-nav-arrows">
              <button className="nav-arrow nav-arrow-left" onClick={prevEvent}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="nav-arrow nav-arrow-right" onClick={nextEvent}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="right-content">
          <div className="poster-info">
            <h2 className="poster-title">
              <span className="title-bg">{currentEvent.title}</span>
            </h2>
            <p className="poster-description">{currentEvent.description}</p>
            <p className="poster-date">{currentEvent.date}</p>
          </div>
          
          <div className="thumbnails-container">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`thumbnail ${index === currentIndex ? 'thumbnail-active' : ''}`}
                onClick={() => goToEvent(index)}
              >
                <img src={event.image} alt={event.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout">
        <div className="mobile-header">
          <h1 className="mobile-posters-text">POSTERS</h1>
        </div>

        <div className="mobile-poster-container">
          <button className="nav-arrow nav-arrow-left mobile-nav" onClick={prevEvent}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="mobile-poster-image-container">
            <div 
              className="poster-slider" 
              style={{ 
                transform: `translateX(-${(currentIndex * 100) / events.length}%)`,
                width: `${events.length * 100}%`
              }}
            >
              {events.map((event, index) => (
                <div 
                  key={event.id} 
                  className="poster-slide"
                  style={{ width: `${100 / events.length}%` }}
                >
                  <img src={event.image} alt={event.title} className="poster-image" />
                </div>
              ))}
            </div>
          </div>

          <button className="nav-arrow nav-arrow-right mobile-nav" onClick={nextEvent}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="mobile-poster-info">
          <h2 className="mobile-poster-title">
            <span className="mobile-title-bg">{currentEvent.title}</span>
          </h2>
          <p className="mobile-poster-description">{currentEvent.description}</p>
          <p className="mobile-poster-date">{currentEvent.date}</p>
        </div>

        <div className="poster-indicators">
          {events.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'indicator-active' : ''}`}
              onClick={() => goToEvent(index)}
            />
          ))}
        </div>

        {/* <div className="mobile-thumbnails-container">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`mobile-thumbnail ${index === currentIndex ? 'mobile-thumbnail-active' : ''}`}
              onClick={() => goToEvent(index)}
            >
              <img src={event.image} alt={event.title} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Poster;