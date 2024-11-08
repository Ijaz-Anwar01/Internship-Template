import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './About.css';
import test1 from '../../../assets/testimg2.jpeg';

const BrandStory = React.forwardRef((props, ref) => {
  const isTabletOrLarger = useMediaQuery({ query: '(min-width: 768px)' });
  const ismobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div ref={ref} className={`brand-story-container ${isTabletOrLarger ? '' : 'mobile-layout'}`}>
      <img src={test1} alt="" className={`brand-story-image ${ismobile ? 'mobile-image' : 'desktop-image'}`} />
      <div className="brand-story-content">
        <h2 className="brand-story-title">
          Story about<br />Our Brand
        </h2>
        <p className="brand-story-description">
          Develop a website by finding a product identity that has value and 
          branding to become a characteristic of a company. We will also 
          facilitate the business marketing of these products with our SEO 
          experts so that they become a ready-to-use website and help sell 
          products from the company. Develop a website by finding a 
          product identity that has value and branding to become a 
          characteristic of a company. We will also facilitate the business 
          marketing of these products with our SEO experts so that they 
          become a ready-to-use website and help sell a product from the 
          company.
        </p>
        <p className="brand-story-read-more">Read Full Story</p>
      </div>
    </div>
  );
});

BrandStory.displayName = 'BrandStory';
export default BrandStory;
