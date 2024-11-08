import { useState, useEffect } from 'react';
import logo1 from '../../../assets/logo1.png';
import logo2 from '../../../assets/logo2.png';
import logo3 from '../../../assets/logo3.png';
import logo4 from '../../../assets/logo4.png';
import logo5 from '../../../assets/logo6.png';
import './Achievement.css';

const LogoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const logos = [logo1, logo2, logo3, logo4, logo5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % logos.length);
    }, 2000); 

    return () => clearInterval(timer);
  }, [logos.length]);

  return (
    <div className="logo-carousel-container">
      <h2 className="logo-carousel-title">Our Achievements</h2>
      <div className="logo-carousel-wrapper">
        <div className="logo-carousel-inner">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`logo-carousel-item ${currentSlide === index ? 'scale' : ''}`}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="logo-carousel-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
