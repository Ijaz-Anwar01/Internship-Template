import { useState, useEffect } from 'react';
import search from '../../../assets/Search.png';
import './Shop.css';
import axios from 'axios';
import ratings from '../../../assets/Ratings.png';
import fav from '../../../assets/fav.png';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import filter from '../../../assets/Filter.png';
import SuperSimple from '../../../assets/comp/rangefilter.jsx';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [rangeValue, setRangeValue] = useState(0);
    const categories=['Coats and Jackets', 'Dresses','Playsuit','Shorts','Top','Bottoms']
    const [isClicked, setIsClicked] = useState(false);

    const toggleClick = () => {
        setIsClicked(!isClicked);
    }

    useEffect(() => {
        axios
          .get('https://dummyjson.com/products')
          .then((response) => {
            setProducts(response.data.products.slice(0, 8));
          })
          .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="shop-container">
            <div className="shop-left">
                <div className="search-input">
                    <input type="text" placeholder="Search Products" className="search-input-field" />
                    <img src={search} alt="Search Icon" className="search-icon" />
                </div>
                <div className="priceSection w-[296px]">
                    <div className="PriceFilter flex justify-between">
                        <p>Price</p>
                        <img src={filter} alt="Filter Icon" className="w-[24px] h-[24px]" />
                    </div>                   
                    <SuperSimple value={rangeValue} onChange={(value) => setRangeValue(value[0])} />
                    <div className="priceRange flex w-[296px] justify-between">
                        <p>Range</p>
                        <p>${rangeValue} - ${rangeValue + 200}</p>
                    </div>
                </div>

                {isMobile ? (
                    <div className="dropdown">
                        <label htmlFor="categories">Product Categories</label>
                        <select id="categories">
                            <option value="coats">Coats and Jackets</option>
                            <option value="dresses">Dresses</option>
                            <option value="playsuits">Playsuit</option>
                            <option value="shorts">Shorts</option>
                            <option value="tops">Top</option>
                            <option value="bottoms">Bottoms</option>
                        </select>
                    </div>
                ) : (
                    <>
                         <div className="category-item">
        <h3>Product Categories</h3>
    </div>
    <ul className="category-list">
        {categories.map((category, index) => (
            <li key={index}>{category}</li>
        ))}
    </ul>
                       
                       
                    </>
                )}

                
                <div className="featured-product">
                <h3 className='fp'>Featured Product</h3>
                    {products.map((product, index) => (
                        <Link to={`/product/${product.id}`} key={index}>
                            <div className="shopFeature-card">
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <h3>{product.title.split(' ').slice(1, 2).join(' ')}</h3>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="shop-right">
                {products.map((product) => (
                    <div className="shopProduct-card relative" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                           
                            <img src={product.thumbnail} alt={product.title} className="shopProduct-image" />
                            <h2>{product.title.split(' ').slice(0,2).join(' ')}</h2>
                            <img src={ratings} alt="Ratings" className="ratings" />
                            <p className="text-gray-400">{product.category}</p>
                            <p className="text-orange-500">${product.price}</p>
                        </Link>
                        <div 
            className={`favIcon ${isClicked ? 'clicked' : ''}`} 
            onClick={toggleClick}
        >
            <img src={fav} alt="Favorite Icon" />
        </div>
                    </div>
                ))}
                <div className="button-div">
                    <button className="shop-button">See More</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;
