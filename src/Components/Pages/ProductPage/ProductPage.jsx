import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, CheckCircle } from 'lucide-react';
import { CartContext } from '../../Cart/Cart-context/CartContext';
import { useMediaQuery } from 'react-responsive';
import rating from '../../../assets/Ratings.png';

import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [counter, setCounter] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setMainImage(data.images[0]);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, counter);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="proPage-container">
      <div className="proPage-breadcrumbs mb-4">
        <span className="proPage-breadcrumbs-span">Products</span>
        <span className="mx-2">›</span>
        <span className="proPage-breadcrumbs-span">{product.category}</span>
      </div>

      <div className={`proPage-grid ${isTabletOrMobile ? 'flex-column' : ''}`}>
        <div className={`proPage-left ${isMobile ? 'full-width' : ''} space-y-4`}>
          <div className="proPage-bg-gray proPage-rounded proPage-overflow-hidden proPage-image-large">
            <img 
              src={mainImage} 
              alt={product.title}
              className="proPage-image-large proPage-hover-scale"
            />
          </div>

          <div className={`proPage-image-small-container flex ${isMobile ? 'flex-wrap' : ''}`}>
  {product.images.map((image, index) => (
    <div 
      key={index} 
      className="proPage-image-small items-center flex justify-center m-2"
    >
      <img 
        src={image} 
        alt={`Preview ${index}`}
        className={`${mainImage === image ? 'active' : ''} w-[160px] h-[160px] proPage-hover-scale`}
        onClick={() => setMainImage(image)}
      />
    </div>
  ))}
</div>

        </div>

        <div className={`proPage-right ${isMobile ? 'full-width text-center' : ''} space-y-6`}>
          <h1 className="proPage-title">{product.title.split(' ').slice(0,2).join(' ')}</h1>
          <img src={rating} alt="" className="w-[192px] h-[32px] opacity-[0.8]" />
          <div className="proPage-price">${product.price}</div>
          <div className="proPage-prose">
            <h3 className="proPage-details-title">Product Details</h3>
            <p className="proPage-details">{product.description}</p>
          </div>

          <div className="proPage-container">
            <div className={`proPage-quantity ${isMobile ? 'justify-center' : ''}`}>
              <h3 className="proPage-details-title">Quantity</h3>
              <div className="proPage-quantity-controls">
                <button className="proPage-quantity-button" onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}>-</button>
                <span className="proPage-quantity-value">{counter}</span>
                <button className="proPage-quantity-button" onClick={() => setCounter(counter + 1)}>+</button>
              </div>
              <div className="proPage-note mr-[-10px] text-orange-500 text-lg font-bold"><h3>Add Note</h3></div>
            </div>

            <div className="proPage-subtotal">
              <h3 className="font-bold  text-xl">Subtotal</h3>
              <h3 className="text-black text-lg font-bold mr-[20px]">${(counter * product.price).toFixed(2)}</h3>
            </div>
          </div>

          <div className={`proPage-flex ${isMobile ? 'justify-center' : 'space-x-4'}`}>
            <button className="proPage-button proPage-button-wishlist">
              <Heart className="w-5 h-5" />
              <span>Wishlist</span>
            </button>
            <button 
              className="proPage-button proPage-button-cart" 
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="proPage-cart-confirmation">
          <CheckCircle className="proPage-confirmation-icon" />
          <span>Item added to cart!</span>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
