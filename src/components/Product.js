import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Product.css';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';

export default function Product() {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/moreproducts');
  };

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];

  const length = images.length - 1;
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? length : index - 1);
  };

  const handleNext = () => {
    setIndex(index === length ? 0 : index + 1);
  };

  return (
    <div id="product" className="product-container">
      <div className="product-image-container">
        <GrPrevious className="icons" onClick={handlePrev} />
        <img src={images[index]} alt="product" className="product-img" />
        <GrNext className="icons" onClick={handleNext} />
      </div>

      <div className="bars">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`bar ${index === i ? 'barWhite' : ''}`}
          >
            _
          </div>
        ))}
      </div>
      <div className="view-more-button-container">
        <Button variant="primary" size="lg" onClick={handleViewMoreClick}>
          View More
        </Button>
      </div>
    </div>
  );
}
