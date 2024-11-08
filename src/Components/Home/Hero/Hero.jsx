import shape1 from '../../../assets/ellipse.png';
import shape2 from '../../../assets/ellipse2.png';
import shape3 from '../../../assets/ellipse3.png';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-shapes">
          <img src={shape1} alt="" className="hero-shape hero-shape1"/>
          <img src={shape2} alt="" className="hero-shape hero-shape2"/>
        </div>

        <div className="hero-textContent">
          <img src={shape3} alt="" className="hero-shape hero-shape3"/>
          <div className="hero-title">
            <h1 className="hero-heading">Your Premium Sound, Unplugged!</h1>
          </div>
          <p className="hero-description">
    Elevate your tech journey with us, where ideas come to life,
    <br className="hidden md:inline" />
    creating seamless solutions for all your digital needs.
</p>

          <Link to='/shop'> <button className="hero-button">Find out More</button></Link>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
