import './Cart.css';
import { useContext } from "react";
import { Heart, Trash } from 'lucide-react';
import { CartContext } from './Cart-context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <div className="Cart-empty-message">Your cart is empty.</div>;
  }

  return (
    <div className="Cart">
      <div className="topPath">
        <p>1. Shopping Cart</p>
        <span>2. Checkout</span>
        <span>3. Order Succeed</span>
      </div>

      <div className="Cart-heading">
        <h1>My Cart</h1>
      </div>
      <div className="cartPage">
        <div className="Cart-left">
          {cartItems.map((item) => (
            <div className="Cart-card" key={item.id}>
              <div className="cart-Image">
                <img src={item.images[0]} alt={item.title} />
              </div>
              <div className="cart-Details">
                <h3>{item.title.split(' ').slice(0, 2).join(' ')}</h3>
                <p>Size: <span className='ml-[100px]'>M</span></p>
                <div className="CartPage-quantity-controls flex">
                  <p>Quantity: {item.quantity}</p>
                </div>

                <div className="price flex">
                  <p>${item.price}</p>
                  <div className="icons flex ">
                    <div className="trashIcon" onClick={() => removeFromCart(item.id)}>
                      <Trash className="w-5 h-5 text-orange-500" />
                    </div>

                    <button className="CartPage-button CartPage-button-wishlist">
                      
                    <span>Wishlist</span>
                    <Heart className="w-5 h-5 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="Cart-right">
          <div className="Cart-Coupon">
            <p>Have A Coupon?</p>
            <div className="couponInput flex">
              <input type="text" placeholder="Input your email here" className='px-[14px]' />
            </div>
            <button className="CartPage-button">Apply</button>
          </div>

          <div className="cartTotal">
  <h1>Cart Totals</h1>
  <p>Subtotal <span >${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span></p>
  <p>Shipping <span>Free Shipping</span></p>
  <p>Total <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span></p>
  <button className='Checkout-btn'>
    Checkout
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
