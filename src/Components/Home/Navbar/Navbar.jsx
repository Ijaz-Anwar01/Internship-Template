import heart from '../../../assets/Heart.png';
import cart from '../../../assets/cart.png';
import bell from '../../../assets/bell.png';
import user from '../../../assets/user.png';
import search from '../../../assets/Search.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../Cart/Cart-context/CartContext';
import { useMediaQuery } from 'react-responsive';

const Navbar = ({ onScrollToSection, aboutRef, blogRef }) => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const actions = [
    { name: heart, path: '/wishlist' },
    { name: cart, path: '/cart' },
    { name: user, path: '/profile' },
    { name: bell, path: '/notify' }
  ];

  const navs = [
    { name: 'Shop', path: '/shop' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', ref: aboutRef },
    { name: 'Blog', ref: blogRef }
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <ul className={`navbar-navList ${isMenuOpen ? 'open' : ''}`}>
          {navs.map((nav, index) => (
            <li key={index}>
              {nav.path ? (
                <Link
                  to={nav.path}
                  className="navbar-navLink"
                  onClick={() => isMobile && setIsMenuOpen(false)}
                >
                  {nav.name}
                </Link>
              ) : (
                <span
                  className="navbar-navLink cursor-pointer"
                  onClick={() => {
                    onScrollToSection(nav.ref);
                    isMobile && setIsMenuOpen(false);
                  }}
                >
                  {nav.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search what you need"
          className="navbar-searchInput"
        />
        <img src={search} alt="Search Icon" className="navbar-searchIcon" />
      </div>
      <div className="navbar-right">
        {actions.map((action, index) => (
          <Link to={action.path} key={index} className="navbar-actionIcon-container">
            <img src={action.name} alt="Action Icon" className="navbar-actionIcon" />
            {action.path === '/cart' && cartCount > 0 && (
              <span className="navbar-cartBadge">{cartCount}</span>
            )}
          </Link>
        ))}
      </div>
      {isMobile && (
        <button className="navbar-hamburger" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      )}
    </div>
  );
};

export default Navbar;
