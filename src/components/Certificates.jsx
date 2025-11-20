import { useState, useEffect } from 'react';
import './Certificates.css';
import mongoDB from '../assets/mongodb.jpg';
import flutter from '../assets/flutter.jpg';
import research from '../assets/research.jpg';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  const certificates = [
    {
      title: 'MongoDB Developer Certification',
      date: 'November 2024',
      description: 'Complete MongoDB database development including CRUD operations, aggregation pipeline, indexing, and performance optimization.',
      image: mongoDB
    },
    {
      title: 'Flutter Mobile App Development',
      date: 'June 2025',
      description: 'Cross-platform mobile application development using Flutter and Dart, covering UI design, state management, and API integration.',
      image: flutter
    },
    {
      title: 'Research Methodology',
      date: 'September 2024',
      description: 'Comprehensive research methods including qualitative and quantitative analysis, data collection techniques, and academic writing.',
      image: research
    },
    // {
    //   title: 'Full Stack Web Development',
    //   issuer: 'Udemy',
    //   date: 'August 2024',
    //   description: 'Comprehensive course covering HTML, CSS, JavaScript, Node.js, React, and modern web development practices.',
    //   image: null
    // },
    // {
    //   title: 'Advanced JavaScript',
    //   issuer: 'freeCodeCamp',
    //   date: 'July 2024',
    //   description: 'Advanced JavaScript concepts including ES6+, async programming, design patterns, and data structures.',
    //   image: null
    // }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const openModal = (image, title) => {
    if (image) {
      setModalImage(image);
      setModalTitle(title);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle('');
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="certificates" className="certificates">
      <div className="certificates-container">
        <h2 className="section-title">Certificates & Achievements</h2>
        <p className="section-subtitle">
          Professional certifications and completed courses
        </p>

        <div 
          className="carousel-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous certificate">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="carousel">
            <div 
              className="carousel-inner"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-card">
                  <div className="certificate-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <h3 className="certificate-title">{cert.title}</h3>
                  <div className="certificate-issuer">{cert.issuer}</div>
                  <div className="certificate-date">{cert.date}</div>
                  <p className="certificate-description">{cert.description}</p>
                  {cert.image ? (
                    <button 
                      onClick={() => openModal(cert.image, cert.title)} 
                      className="certificate-link"
                    >
                      View Certificate
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </button>
                  ) : (
                    <button className="certificate-link disabled" disabled>
                      Certificate Coming Soon
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next certificate">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="carousel-indicators">
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to certificate ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="certificate-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 className="modal-title">{modalTitle}</h3>
            <div className="modal-image-wrapper">
              <img src={modalImage} alt={modalTitle} className="modal-image" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
