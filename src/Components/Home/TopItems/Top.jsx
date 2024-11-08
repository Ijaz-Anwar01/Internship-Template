import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'; // Import react-responsive
import "./Top.css";

const Top = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Use react-responsive to check if screen is mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Top Items</h2>
      <p className="carousel-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
      <Carousel
        responsive={responsive}
        infinite
        autoPlaySpeed={2000}
        autoPlay
        className="carousel"
        showDots={!isMobile}  // Conditionally hide dots for mobile screens
        renderDotsOutside={true}
      >
        {products.map((product, index) => (
          <Link to={`/product/${product.id}`} key={index}>
            <div className="carousel-card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="topItem-image"
              />
              <h3 className="topItem-title">{product.title.split(' ').slice(0, 3).join(' ')}</h3>
              <p className="text-gray-400 mb-1">{product.category}</p>
              <p className="topItem-price">
                ${product.price}{" "}
                <span className="text-gray-400">
                  ${((product.discountPercentage / 100) * product.price).toFixed(2)}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </Carousel>
      <div className="w-full h-[100px] bg-white"></div>
    </div>
  );
};

export default Top;
