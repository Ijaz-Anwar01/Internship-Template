import phone from '../../../assets/Phone.png';
import truck from '../../../assets/Truck.png';
import { Link } from 'react-router-dom';
import './Topbar.css';
import { useMediaQuery } from 'react-responsive';

const Topbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 640px) and (max-width: 1024px)' });

  return (
    <div className={`topbar ${isTablet ? 'tablet-layout' : ''}`}>
      <div className="left">
        <div className="logoName">
          <Link to='/'><h3 className="logoText">Dealerz.</h3></Link>
        </div>
      </div>
      <div className="right">
        <div className="contactItem">
          <img src={phone} alt="Phone Icon" className="icon" />
          {!isMobile && <p className="text">Call Centre</p>}
        </div>
        <div className="contactItem">
          <img src={truck} alt="Truck Icon" className="icon" />
          {!isMobile && <p className="text">Shipping & Returns</p>}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
