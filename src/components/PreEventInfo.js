// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './PreEventInfo.css';

// // Same events data as in PreEventsSection
// const events = [
//   {
//     id: 'alpha',
//     title: 'Event Alpha',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
//     img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'beta',
//     title: 'Event Beta',
//     desc: 'Suspendisse potenti. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.',
//     img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'gamma',
//     title: 'Event Gamma',
//     desc: 'In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.',
//     img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'delta',
//     title: 'Event Delta',
//     desc: 'Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.',
//     img: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80',
//   },
// ];

// const PreEventInfo = () => {
//     const { eventId } = useParams();
//     const navigate = useNavigate();
    
//     // Find the event based on the URL parameter
//     const event = events.find(e => e.id === eventId) || events[0];
    
//     // Prevent automatic scroll and set natural starting position
//     useEffect(() => {
//         // Clear any stored scroll positions that might interfere
//         sessionStorage.removeItem('preEventScrollPosition');
        
//         // Set scroll position to natural starting point (beginning of content)
//         const timer = setTimeout(() => {
//             window.scrollTo({
//                 top: 0,
//                 left: 0,
//                 behavior: 'instant' // No smooth scrolling, just snap to position
//             });
//         }, 50);

//         return () => clearTimeout(timer);
//     }, [eventId]); // Re-run when eventId changes

//     // Handle back navigation
//     const handleBack = () => {
//         navigate('/');
//     };

//     // Handle home button click
//     const handleHome = () => {
//         navigate('/');
//     };

//     // Handle other event navigation
//     const handleOtherEventClick = (otherEventId) => {
//         navigate(`/event/${otherEventId}`);
//     };

//     // Get other events (excluding current event)
//     const otherEvents = events.filter(e => e.id !== event.id);

//     return (
//         <div className="pre-event-container">
//             {/* Back Button */}
//             <div className="back-button1" onClick={handleBack}>
//                 <svg className="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path d="M19 12H5M12 19l-7-7 7-7" />
//                 </svg>
//             </div>
            
//             {/* Event Name Section Container */}
//             <div className="event-name-container">
//                 <div className="event-name-section">
//                     <div className="tech-elements">
//                         <div className="circuit-line line-1"></div>
//                         <div className="circuit-line line-2"></div>
//                         <div className="circuit-line line-3"></div>
//                         <div className="glow-orb orb-1"></div>
//                         <div className="glow-orb orb-2"></div>
//                         <div className="glow-orb orb-3"></div>
//                     </div>
//                     <h1 className="event-title">{event.title}</h1>
//                 </div>
//             </div>
            
//             {/* Photos Container Section */}
//             <div className="photos-container">
//                 <div className="content-wrapper">
//                     <div className="photos-grid">
//                         {/* 2x2 Grid - 4 photos only */}
//                         <div className="photo-item photo-1">
//                             <img
//                                 src={event.img}
//                                 alt={event.title}
//                             />
//                             <div className="photo-overlay"></div>
//                         </div>
//                         <div className="photo-item photo-2">
//                             <img
//                                 src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop"
//                                 alt="VR technology demonstration"
//                             />
//                             <div className="photo-overlay"></div>
//                         </div>
//                         <div className="photo-item photo-3">
//                             <img
//                                 src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop"
//                                 alt="Data visualization"
//                             />
//                             <div className="photo-overlay"></div>
//                         </div>
//                         <div className="photo-item photo-4">
//                             <img
//                                 src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop"
//                                 alt="Tech workspace"
//                             />
//                             <div className="photo-overlay"></div>
//                         </div>
//                     </div>
//                     <div className="lorem-container">
//                         <h3 className="lorem-title">Event Details</h3>
//                         <div className="lorem-content">
//                             <p>{event.desc}</p>
//                             <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Middle Section - Updated with SVG L-shapes */}
//             <div className="middle-section">
//                 <main>
//                     <section className="left-container">
//                         <svg
//                             aria-hidden="true"
//                             className="left-svg"
//                             fill="none"
//                             preserveAspectRatio="xMidYMid meet"
//                             viewBox="0 0 653 642"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M453 259c0 17.673 14.327 32 32 32h103c17.673 0 32 14.327 32 32v287c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32V32C0 14.327 14.327 0 32 0h389c17.673 0 32 14.327 32 32v227Z"
//                                 fill="#55194F"
//                             ></path>
//                         </svg>
//                         <div className="left-content">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//                             veniam
//                             <ul>
//                                 <li>quis nostrud exercitation</li>
//                                 <li>ullamco laboris nisi ut aliquip</li>
//                                 <li>ex ea commodo consequat.</li>
//                             </ul>
//                         </div>
//                         <div className="left-images">
//                             <img
//                                 alt="Audience at event with lights in dark room"
//                                 height="170"
//                                 src="https://storage.googleapis.com/a1aa/image/68998752-a713-4c2c-898f-cfe2747caeac.jpg"
//                                 width="120"
//                             />
//                             <img
//                                 alt="Group of people collaborating on computer in office"
//                                 height="170"
//                                 src="https://storage.googleapis.com/a1aa/image/25e232a1-f386-48e2-c36f-06034543d99d.jpg"
//                                 width="120"
//                             />
//                             <img
//                                 alt="Raised hand in audience at event"
//                                 height="170"
//                                 src="https://storage.googleapis.com/a1aa/image/292873c9-f6cd-4f77-7810-1d02e3a918ef.jpg"
//                                 width="120"
//                             />
//                         </div>
//                     </section>
//                     <section className="right-container">
//                         <svg
//                             aria-hidden="true"
//                             className="right-svg"
//                             fill="none"
//                             preserveAspectRatio="xMidYMid meet"
//                             viewBox="0 0 547 642"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M514.017 0c17.673 0 32 14.327 32 32v578c0 17.673-14.327 32-32 32H203.125c-17.673 0-32-14.327-32-32V286.358c0-17.673-14.327-32-32-32H32c-17.673 0-32-14.326-32-32V32C0 14.327 14.327 0 32 0h482.017Z"
//                                 fill="#55194F"
//                             ></path>
//                         </svg>
//                         <div className="right-content">
//                             <div className="right-top">
//                                 <img
//                                     alt="Speaker on stage with audience in background"
//                                     height="100"
//                                     src="https://storage.googleapis.com/a1aa/image/ad9f9831-286a-4386-78d4-4da81ab8e228.jpg"
//                                     width="100"
//                                 />
//                                 <p>
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                                     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//                                     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//                                     aliquip ex ea commodo dolor in reprehenderit in voluptate velit esse
//                                     cillum dolore eu fugiat nulla pariatur.
//                                 </p>
//                             </div>
//                             <blockquote>
//                                 "An incredible opportunity to network and learn hands-on." — Jane,
//                                 Participant, Solve-a-thon 2024
//                             </blockquote>
//                             <ul className="right-list">
//                                 <li>
//                                     <i className="fas fa-users"></i>300+ participants
//                                 </li>
//                                 <li>
//                                     <i className="fas fa-lightbulb"></i>100+ startup ideas
//                                 </li>
//                                 <li>
//                                     <i className="fas fa-trophy"></i>₹50K in prizes
//                                 </li>
//                             </ul>
//                         </div>
//                     </section>
//                 </main>
//             </div>

//             {/* Other Events Section */}
//             <div className="other-events-section">
//                 <div className="other-events-header">
//                     <h2 className="other-events-title">OTHER EVENTS</h2>
//                 </div>
//                 <div className="other-events-grid">
//                     {otherEvents.slice(0, 3).map((otherEvent) => (
//                         <div key={otherEvent.id} className="event-card" onClick={() => handleOtherEventClick(otherEvent.id)}>
//                             <div className="event-image">
//                                 <img
//                                     src={otherEvent.img}
//                                     alt={otherEvent.title}
//                                 />
//                                 <div className="event-overlay">
//                                     <div className="event-info">
//                                         <span className="event-name">{otherEvent.title}</span>
//                                         <div className="arrow-icon">→</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="other-events-footer">
//                     <div className="footer-section">
//                         <span className="footer-text">V-NEST</span>
//                     </div>
//                     <div className="footer-center">
//                         <div className="home-icon" onClick={handleHome}>
//                             <svg viewBox="0 0 24 24" fill="currentColor">
//                                 <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//                             </svg>
//                         </div>
//                     </div>
//                     <div className="footer-section">
//                         <span className="footer-text">SOLVE-A-THON</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PreEventInfo;















import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PreEventInfo.css';

// Same events data as in PreEventsSection
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

const PreEventInfo = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();
    
    // Find the event based on the URL parameter
    const event = events.find(e => e.id === eventId) || events[0];
    
    // Prevent automatic scroll and set natural starting position
    useEffect(() => {
        // Clear any stored scroll positions that might interfere
        sessionStorage.removeItem('preEventScrollPosition');
        
        // Set scroll position to natural starting point (beginning of content)
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' // No smooth scrolling, just snap to position
            });
        }, 50);

        return () => clearTimeout(timer);
    }, [eventId]); // Re-run when eventId changes

    // Handle back navigation
    const handleBack = () => {
        navigate('/');
    };

    // Handle home button click
    const handleHome = () => {
        navigate('/');
    };

    // Handle other event navigation
    const handleOtherEventClick = (otherEventId) => {
        navigate(`/event/${otherEventId}`);
    };

    // Get other events (excluding current event)
    const otherEvents = events.filter(e => e.id !== event.id);

    return (
        <div className="pre-event-container">
            {/* Back Button */}
            <div className="back-button1" onClick={handleBack}>
                <svg className="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
            </div>
            
            {/* Event Name Section Container */}
            <div className="event-name-container">
                <div className="event-name-section">
                    <div className="tech-elements">
                        <div className="circuit-line line-1"></div>
                        <div className="circuit-line line-2"></div>
                        <div className="circuit-line line-3"></div>
                        <div className="glow-orb orb-1"></div>
                        <div className="glow-orb orb-2"></div>
                        <div className="glow-orb orb-3"></div>
                    </div>
                    <h1 className="event-title">{event.title}</h1>
                </div>
            </div>
            
            {/* Photos Container Section */}
            <div className="photos-container">
                <div className="content-wrapper">
                    <div className="photos-grid">
                        {/* 2x2 Grid - 4 photos only */}
                        <div className="photo-item photo-1">
                            <picture>
                                <source 
                                    type="image/webp"
                                    srcSet={`${event.img}&w=150&fm=webp 150w, ${event.img}&w=300&fm=webp 300w, ${event.img}&w=600&fm=webp 600w`} 
                                />
                                <img
                                    src={event.img}
                                    srcSet={`${event.img}&w=150 150w, ${event.img}&w=300 300w, ${event.img}&w=600 600w`}
                                    sizes="(max-width: 600px) 100vw, 50vw"
                                    alt={event.title}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                            <div className="photo-overlay"></div>
                        </div>
                        <div className="photo-item photo-2">
                            <picture>
                                <source 
                                    type="image/webp"
                                    srcSet="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=150&fm=webp 150w, https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&fm=webp 300w, https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&fm=webp 600w" 
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop"
                                    srcSet="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=150 150w, https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300 300w, https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600 600w"
                                    sizes="(max-width: 600px) 100vw, 50vw"
                                    alt="VR technology demonstration"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                            <div className="photo-overlay"></div>
                        </div>
                        <div className="photo-item photo-3">
                            <picture>
                                <source 
                                    type="image/webp"
                                    srcSet="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&fm=webp 150w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&fm=webp 300w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&fm=webp 600w" 
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop"
                                    srcSet="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150 150w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300 300w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600 600w"
                                    sizes="(max-width: 600px) 100vw, 50vw"
                                    alt="Data visualization"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                            <div className="photo-overlay"></div>
                        </div>
                        <div className="photo-item photo-4">
                            <picture>
                                <source 
                                    type="image/webp"
                                    srcSet="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&fm=webp 150w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&fm=webp 300w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&fm=webp 600w" 
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop"
                                    srcSet="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150 150w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300 300w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600 600w"
                                    sizes="(max-width: 600px) 100vw, 50vw"
                                    alt="Tech workspace"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                            <div className="photo-overlay"></div>
                        </div>
                    </div>
                    <div className="lorem-container">
                        <h3 className="lorem-title">Event Details</h3>
                        <div className="lorem-content">
                            <p>{event.desc}</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section - Updated with SVG L-shapes */}
            <div className="middle-section">
                <main>
                    <section className="left-container">
                        <svg
                            aria-hidden="true"
                            className="left-svg"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 653 642"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M453 259c0 17.673 14.327 32 32 32h103c17.673 0 32 14.327 32 32v287c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32V32C0 14.327 14.327 0 32 0h389c17.673 0 32 14.327 32 32v227Z"
                                fill="#55194F"
                            ></path>
                        </svg>
                        <div className="left-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam
                            <ul>
                                <li>quis nostrud exercitation</li>
                                <li>ullamco laboris nisi ut aliquip</li>
                                <li>ex ea commodo consequat.</li>
                            </ul>
                        </div>
                        <div className="left-images">
                            <picture>
                                <source 
                                    type="image/webp"
                                    srcSet="https://storage.googleapis.com/a1aa/image/68998752-a713-4c2c-898f-cfe2747caeac.jpg?w=120&fm=webp 120w, https://storage.googleapis.com/a1aa/image/68998752-a713-4c2c-898f-cfe2747caeac.jpg?w=240&fm=webp 240w" 
                                />
                                <img
                                    alt="Audience at event with lights in dark room"
                                    src="https://storage.googleapis.com/a1aa/image/68998752-a713-4c2c-898f-cfe2747caeac.jpg"
                                    srcSet="https://storage.googleapis.com/a1aa/image/68998752-a713-4c2c-898f-cfe2747caeac.jpg?w=120 120w, https://storage.googleapis.com/a1aa/image/68998752-a713-4c2c-898f-cfe2747caeac.jpg?w=240 240w"
                                    sizes="120px"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                            <picture>
                                <source 
                                    type="image/webp"
                                    srcSet="https://storage.googleapis.com/a1aa/image/25e232a1-f386-48e2-c36f-06034543d99d.jpg?w=120&fm=webp 120w, https://storage.googleapis.com/a1aa/image/25e232a1-f386-48e2-c36f-06034543d99d.jpg?w=240&fm=webp 240w" 
                                />
                                <img
                                    alt="Group of people collaborating on computer in office"
                                    src="https://storage.googleapis.com/a1aa/image/25e232a1-f386-48e2-c36f-06034543d99d.jpg"
                                    srcSet="https://storage.googleapis.com/a1aa/image/25e232a1-f386-48e2-c36f-06034543d99d.jpg?w=120 120w, https://storage.googleapis.com/a1aa/image/25e232a1-f386-48e2-c36f-06034543d99d.jpg?w=240 240w"
                                    sizes="120px"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                            <picture>
                                <source 
                                    type="image/webp"
                                    srcSet="https://storage.googleapis.com/a1aa/image/292873c9-f6cd-4f77-7810-1d02e3a918ef.jpg?w=120&fm=webp 120w, https://storage.googleapis.com/a1aa/image/292873c9-f6cd-4f77-7810-1d02e3a918ef.jpg?w=240&fm=webp 240w" 
                                />
                                <img
                                    alt="Raised hand in audience at event"
                                    src="https://storage.googleapis.com/a1aa/image/292873c9-f6cd-4f77-7810-1d02e3a918ef.jpg"
                                    srcSet="https://storage.googleapis.com/a1aa/image/292873c9-f6cd-4f77-7810-1d02e3a918ef.jpg?w=120 120w, https://storage.googleapis.com/a1aa/image/292873c9-f6cd-4f77-7810-1d02e3a918ef.jpg?w=240 240w"
                                    sizes="120px"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                    </section>
                    <section className="right-container">
                        <svg
                            aria-hidden="true"
                            className="right-svg"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 547 642"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M514.017 0c17.673 0 32 14.327 32 32v578c0 17.673-14.327 32-32 32H203.125c-17.673 0-32-14.327-32-32V286.358c0-17.673-14.327-32-32-32H32c-17.673 0-32-14.326-32-32V32C0 14.327 14.327 0 32 0h482.017Z"
                                fill="#55194F"
                            ></path>
                        </svg>
                        <div className="right-content">
                            <div className="right-top">
                                <picture>
                                    <source 
                                        type="image/webp"
                                        srcSet="https://storage.googleapis.com/a1aa/image/ad9f9831-286a-4386-78d4-4da81ab8e228.jpg?w=100&fm=webp 100w, https://storage.googleapis.com/a1aa/image/ad9f9831-286a-4386-78d4-4da81ab8e228.jpg?w=200&fm=webp 200w" 
                                    />
                                    <img
                                        alt="Speaker on stage with audience in background"
                                        src="https://storage.googleapis.com/a1aa/image/ad9f9831-286a-4386-78d4-4da81ab8e228.jpg"
                                        srcSet="https://storage.googleapis.com/a1aa/image/ad9f9831-286a-4386-78d4-4da81ab8e228.jpg?w=100 100w, https://storage.googleapis.com/a1aa/image/ad9f9831-286a-4386-78d4-4da81ab8e228.jpg?w=200 200w"
                                        sizes="100px"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </picture>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                            <blockquote>
                                "An incredible opportunity to network and learn hands-on." — Jane,
                                Participant, Solve-a-thon 2024
                            </blockquote>
                            <ul className="right-list">
                                <li>
                                    <i className="fas fa-users"></i>300+ participants
                                </li>
                                <li>
                                    <i className="fas fa-lightbulb"></i>100+ startup ideas
                                </li>
                                <li>
                                    <i className="fas fa-trophy"></i>₹50K in prizes
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>

            {/* Other Events Section */}
            <div className="other-events-section">
                <div className="other-events-header">
                    <h2 className="other-events-title">OTHER EVENTS</h2>
                </div>
                <div className="other-events-grid">
                    {otherEvents.slice(0, 3).map((otherEvent) => (
                        <div key={otherEvent.id} className="event-card" onClick={() => handleOtherEventClick(otherEvent.id)}>
                            <div className="event-image">
                                <picture>
                                    <source 
                                        type="image/webp"
                                        srcSet={`${otherEvent.img}&w=300&fm=webp 300w, ${otherEvent.img}&w=600&fm=webp 600w`} 
                                    />
                                    <img
                                        src={otherEvent.img}
                                        srcSet={`${otherEvent.img}&w=300 300w, ${otherEvent.img}&w=600 600w`}
                                        sizes="(max-width: 600px) 100vw, 33vw"
                                        alt={otherEvent.title}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </picture>
                                <div className="event-overlay">
                                    <div className="event-info">
                                        <span className="event-name">{otherEvent.title}</span>
                                        <div className="arrow-icon">→</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="other-events-footer">
                    <div className="footer-section">
                        <span className="footer-text">V-NEST</span>
                    </div>
                    <div className="footer-center">
                        <div className="home-icon" onClick={handleHome}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                        </div>
                    </div>
                    <div className="footer-section">
                        <span className="footer-text">SOLVE-A-THON</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreEventInfo;