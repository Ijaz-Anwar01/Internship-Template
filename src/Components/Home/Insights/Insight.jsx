import React from 'react';
import img1 from '../../../assets/sunrise.jpg';
import './Insights.css';
import ins1 from '../../../assets/ins1.jpg';
import ins2 from '../../../assets/ins2.jpg';
import ins3 from '../../../assets/ins3.jpg';
import { Link } from 'react-router-dom';

const Insight = React.forwardRef((props, ref) => {
    const blogs = [
        {
            img: ins1,
            title: "Trendy Gadgets of the Year",
            desc: "Discover the most sought-after electronics making waves in the tech world. From cutting-edge smartphones to smart home devices, explore what's trending."
        },
        {
            img: ins2,
            title: "Top Jewelry Picks for Every Occasion",
            desc: "Explore timeless pieces and statement jewelry that elevate any outfit. From casual wear to formal events, find the perfect accessory."
        },
        {
            img: ins3,
            title: "Essentials for a Cozy Living Room",
            desc: "Create a warm and inviting space with these top furniture trends. Sofas, decor, and lighting tips to transform your living room."
        },
        {
            img: img1,
            title: "Your Guide to Skincare Basics",
            desc: "A must-read guide on skincare essentials for healthy, glowing skin. Tips, product recommendations, and routines for all skin types."
        }
    ];

    return (
        <div ref={ref} className="insight">
            <div className="heading">
                <h1>
                    Get Better Insights <br className="hidden md:block" /> from Our Articles
                </h1>
                <p>See more</p>
            </div>
<div className="cards">
                {blogs.map((blog, index) => (
                    
                    <div key={index} className="card">
                    <Link to='https://indianexpress.com/article/technology/mind-blowing-gadgets-of-2024-you-need-to-see-9647964/' newtaby>
                    <img 
                            src={blog.img} 
                            alt={blog.title} 
                            className="card-img" 
                        />
                        
                        <h2 className="card-title">{blog.title}</h2>
                        <p className="card-date mb-3 ">14 Feb Livina Style</p>
                        <p className="card-desc">{blog.desc}</p>
                        <p className="card-explore">Explore More</p>
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>
    );
});

// Set display name for debugging
Insight.displayName = 'Insight';

export default Insight;
