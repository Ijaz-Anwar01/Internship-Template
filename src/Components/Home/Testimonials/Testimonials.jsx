import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../../assets/testimg1.jpeg';
import img2 from '../../../assets/testimg2.jpeg';
import img3 from '../../../assets/testimg3.jpg';
import { useMediaQuery } from 'react-responsive';
import './Testimonials.css';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  const testimonials = [
    {
      id: 1,
      title: "Good Seller!",
      content: "I am very happy with the services provided. It is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better.",
      author: "Anna Saraspova",
      role: "Your Beloved Buyer",
      image: img1
    },
    {
      id: 2,
      title: "Excellent Service!",
      content: "The team went above and beyond to deliver exceptional results. Their attention to detail and professional approach made the whole process smooth and efficient.",
      author: "Michael Chen",
      role: "Regular Customer",
      image: img2
    },
    {
      id: 3,
      title: "Outstanding Support!",
      content: "Their customer support team is incredibly responsive and helpful. They resolved all my queries promptly and provided valuable suggestions for improvement.",
      author: "Sarah Johnson",
      role: "Business Owner",
      image: img3
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel-content">
        <div className="testimonial-image-container">
          <img 
            src={testimonials[currentSlide].image} 
            alt={`Testimonial from ${testimonials[currentSlide].author}`} 
            className="testimonial-image"
          />
        </div>

        <div className="testimonial-text">
          <h2 className="testimonial-title" style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>
            {testimonials[currentSlide].title}
          </h2>
          <p className="testimonial-content" style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
            {testimonials[currentSlide].content}
          </p>
          <div>
            <h3 className="testimonial-author">
              {testimonials[currentSlide].author}
            </h3>
            <p className="testimonial-role">
              {testimonials[currentSlide].role}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="nav-button nav-button-left"
        aria-label="Previous slide"
      >
        <ChevronLeft className="nav-icon" />
      </button>
      <button
        onClick={nextSlide}
        className="nav-button nav-button-right"
        aria-label="Next slide"
      >
        <ChevronRight className="nav-icon" />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
