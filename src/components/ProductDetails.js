import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue, push, set, off } from 'firebase/database'; 
import { realtimeDb } from '../firebase';
import './ProductDetails.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const [sortedFeedbacks, setSortedFeedbacks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [sortOption, setSortOption] = useState('latest');

  useEffect(() => {
    const productRef = ref(realtimeDb, `products/${id}`);
    const productListener = onValue(productRef, (snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.val());
      } else {
        setProduct(null);
      }
      setLoading(false);
    });

    return () => off(productRef, 'value', productListener);
  }, [id]);

  useEffect(() => {
    const feedbackRef = ref(realtimeDb, `feedbacks/${id}`);
    const feedbackListener = onValue(feedbackRef, (snapshot) => {
      if (snapshot.exists()) {
        const feedbacksData = snapshot.val();
        const feedbacksArray = Object.values(feedbacksData);
        setAllFeedbacks(feedbacksArray);
      } else {
        setAllFeedbacks([]);
      }
    });

    return () => off(feedbackRef, 'value', feedbackListener);
  }, [id]);

  useEffect(() => {
    if (allFeedbacks.length > 0) {
      const sortedFeedbacksArray = [...allFeedbacks].sort((a, b) => {
        return sortOption === 'latest'
          ? new Date(b.timestamp) - new Date(a.timestamp)
          : new Date(a.timestamp) - new Date(b.timestamp);
      });
      setSortedFeedbacks(sortedFeedbacksArray);
    }
  }, [sortOption, allFeedbacks]);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() && email.trim() && feedback.trim() && rating > 0) {
      const feedbackRef = ref(realtimeDb, `feedbacks/${id}`);
      const newFeedbackRef = push(feedbackRef);
      const timestamp = new Date().toISOString();
      await set(newFeedbackRef, { name, email, feedback, rating, timestamp });

      setName('');
      setEmail('');
      setFeedback('');
      setRating(0);
      setShowForm(false); 
    }
  };

  const handleAddToCart = async () => {
    const cartRef = ref(realtimeDb, `cart/${id}`);
    const timestamp = new Date().toISOString();
    await set(cartRef, {
      name: product.name,
      price: product.price,
      description: product.description,
      timestamp,
      quantity: 1,
    });
    alert(`${product.name} added to the cart!`);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
          onClick={() => setRating(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center mt-5">No product found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
        
          <img
            src={product.imageURL} 
            alt={product.name}
            className="img-fluid rounded shadow-lg mb-4" 
            id="product-image"
          />
        
          {Array.isArray(product.imageURLs) && product.imageURLs.length > 1 && (
            <div className="row mt-2">
              {product.imageURLs.slice(1).map((imageURL, index) => (
                <div key={index} className="col-4">
                  <img
                    src={imageURL}
                    alt={`Thumbnail ${index + 1}`}
                    className="img-fluid rounded mb-2"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h1 className="display-5"><strong>{product.name}</strong></h1>
          <p className="h4 text-success"><strong>₹{product.price}</strong></p>
          <p><strong>Description:</strong> <br></br> <strong>{product.description}:</strong> {product.details}</p>
          <p><strong>Weight:</strong> {product.weight}</p>
          <p><strong>Guarantee:</strong> {product.guarantee}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Available Colors:</strong> {product.colors} </p>

          <div className="button-container mb-3">
  <button
    className="btn btn-primary me-2"
    onClick={handleAddToCart}
  >
    <i className="fas fa-shopping-cart me-1"></i>
    Add to Cart
  </button>
  <button
    className="btn btn-primary"
    onClick={() => setShowForm(!showForm)}
  >
    <i className={showForm ? "fas fa-chevron-up me-1" : "fas fa-chevron-down me-1"}></i>
    {showForm ? 'Hide Feedback Form' : 'Give Feedback'}
  </button>
</div>


          {showForm && (
            <form onSubmit={handleFeedbackSubmit} className="mb-4">
              <div className='mb-3'>
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="feedback" className="form-label">Feedback</label>
                <textarea
                  className="form-control"
                  id="feedback"
                  rows="3"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Rating</label>
                <div>{renderStars()}</div>
              </div>
              <button type="submit" className="btn btn-primary">Submit Feedback</button>
            </form>
          )}

          <div className="feedbacks-section mt-4">
            <h3>Feedbacks</h3>
            <div className="d-flex align-items-center mb-3">
              <label htmlFor="sortOption" className="me-2">Sort By</label>
              <select
                id="sortOption"
                className="form-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="latest">Latest</option>
                <option value="earliest">Earliest</option>
              </select>
            </div>
            {sortedFeedbacks.length > 0 ? (
              sortedFeedbacks.map((fb, index) => (
                <div key={index} className="feedback-card p-3 mb-2">
                  <h5>{fb.name} ({fb.rating}/5)</h5>
                  <p>{fb.feedback}</p>
                  <p className="text-muted">Submitted on {new Date(fb.timestamp).toLocaleString()}</p>
                </div>
              ))
            ) : (
              <p>No feedbacks yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
