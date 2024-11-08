import shape1 from '../../../../assets/ellipse.png';
import shape2 from '../../../../assets/ellipse2.png';
import shape3 from '../../../../assets/ellipse3.png';
import './ShopHero.css';

const ShopHero = () => {
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
            <h1 className="hero-heading">Home Shopping, Your Choice!</h1>
          </div>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br className="hidden md:inline" />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
