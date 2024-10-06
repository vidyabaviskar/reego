import React from 'react';
import man from '../man.png';
import woman from '../woman.png';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css'; 

const testimonials = [
  {
    id: 1,
    text: "They have wide range of Plastic furniture to choose from and at very reasonable rates.",
    author: "Pratiksha Mane",
    position: "CEO, Company A",
    image: woman,
  },
  {
    id: 2,
    text: "Ordered bulk quantity of chairs and tables for our school & they are of best quality.",
    author: "Neelam Seth",
    position: "Designer, Company B",
    image: woman,
  },
  {
    id: 3,
    text: "I always buy plastic furniture from them because they have irrestible styled products..",
    author: "Ajay Banerjee",
    position: "Manager, Company C",
    image: man,
  },
];

const Testimonials = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Carousel>
        {testimonials.map((testimonial) => (
          <Carousel.Item key={testimonial.id}>
            <div className="testimonial-content d-flex justify-content-center align-items-center flex-column text-center p-4">
              <img
                className="testimonial-image mb-3"
                src={testimonial.image}
                alt={testimonial.author}
              />
              <p className="lead testimonial-text">{testimonial.text}</p>
              <h5 className="mt-3">{testimonial.author}</h5>
              <small>{testimonial.position}</small>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
