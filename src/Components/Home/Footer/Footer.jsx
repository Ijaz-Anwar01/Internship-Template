import { useMediaQuery } from 'react-responsive';
import insta from "../../../assets/insta.png";
import yt from "../../../assets/yt.png";
import twitter from "../../../assets/twitter.png";
import './Footer.css';

const Footer = () => {
  const isTabletOrLarger = useMediaQuery({ query: '(min-width: 768px)' });
  const logos = [insta, yt, twitter];

  return (
    <div className={`footer ${isTabletOrLarger ? 'tablet-layout' : 'mobile-layout'}`}>
      <div className="left">
        <div className="left-box"></div>
      </div>
      
      <div className="center">
        <div>
          <h1>Dealerz.</h1>
        </div>
        <p className="privacy-policy">Privacy Policy</p>
        <p className="terms">Terms and Conditions</p>
        <p className="copyright">@2020 TanahAir Studio. All rights reserved.</p>
      </div>
      
      <div className="right">
        {logos.map((logo, index) => (
          <img
            src={logo}
            alt="Social Logo"
            className="social-logo"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
