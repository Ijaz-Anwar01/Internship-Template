import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import UserIcon from '../../../../assets/userIcon.png';
import rating from '../../../../assets/Ratings.png';
import './Description.css';

const Description = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div className={`description-container ${isTabletOrMobile ? 'flex-column' : ''} ${isMobile ? 'padding-mobile' : ''}`}>
            <div className="description-left">
                <h1 className='main-heading'>Description</h1>
                <div className="description-text">
                    <p>{product?.description?.repeat(8)}</p>
                </div>

                <div className="desc-reviews">
                    <h3 className='reviews-heading'>Reviews ({product?.reviews?.length})</h3>
                    {product?.reviews?.map((review, index) => (
                        <div key={index} className="review-item">
                            <div className='userIcon-image'>
                                <img src={UserIcon} alt="User Icon" />
                            </div>
                            <div className="review-content">
                                <h3>{review.reviewerName}</h3>
                                <p>{new Date(review.date).toLocaleDateString()}</p>
                                <img src={rating} alt="Rating" />
                                <p>{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`description-right ${isMobile ? 'full-width' : ''}`}>
                <div className="desc-placeholder">
                    {/* Placeholder content */}
                </div>
            </div>
        </div>
    );
};

export default Description;
