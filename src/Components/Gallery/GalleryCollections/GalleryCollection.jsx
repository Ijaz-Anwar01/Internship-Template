import { useState, useEffect } from 'react';
import axios from 'axios';
import arrow from '../../../assets/arrowbtn.png';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../../Home/Collections/Collections.css'; 

const GalleryCollections = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const categories = [
    'All Products',
    'Coats & Jacket',
    'Dressed',
    'Playsuit',
    'Short',
    'Skirt',
    'T-Shirt'
  ];

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

  const handleFindOutMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div className="collections">
      <div className="collections-heading">
        <h1>Our Premium Collection</h1>
      </div>

      <div className="category-selector">
        {isMobile ? (
          <select className="category-dropdown">
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        ) : (
          categories.map(category => (
            <p key={category} className="category-item">{category}</p>
          ))
        )}
      </div>

      <div className="product-grid">
        {products.slice(0, visibleCount).map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-link">
            <div className="product-card">
              <img src={product.images[0]} alt={product.title} className="product-image" />
              <p className="product-category">Category: {product.category}</p>
              <h3 className="product-title">
                {product.title.split(' ').slice(0, 2).join(' ')}
              </h3>
              <img src={arrow} alt="arrow" className="arrow-icon" />
            </div>
          </Link>
        ))}
      </div>

      {visibleCount < products.length && (
        <button className="Findbutton" onClick={handleFindOutMore}>Find Out More</button>
      )}

      <style>{`
        .collections {
          padding: ${isMobile ? '20px' : '40px'};
        }
        .category-selector {
          margin-bottom: 20px;
        }
        .category-dropdown {
          width: 100%;
          padding: 8px;
          font-size: 16px;
        }
        .product-grid {
          display: grid;
          grid-template-columns: ${isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)'};
          gap: 16px;
        }
        .product-card {
          padding: ${isMobile ? '12px' : '16px'};
          transition: transform 0.3s;
        }
        .product-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default GalleryCollections;
