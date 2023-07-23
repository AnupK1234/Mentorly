import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import Confetti from 'react-confetti';
import Navbar from './Navbar';

const FeedbackAndRatings = () => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmitFeedback = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="p-4">
      <Navbar />
      <div className="p-10 min-h-screen bg-green-100">
        <div className="py-12 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8"
          >
            Feedback and Ratings
          </motion.h1>
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Rate your mentorship experience:</h2>
              <div className="flex items-center justify-center space-x-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    size={30}
                    className={index < rating ? 'text-yellow-500 cursor-pointer' : 'text-gray-300 cursor-pointer'}
                    onClick={() => handleRatingChange(index + 1)}
                  />
                ))}
              </div>
              <button
                className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                onClick={handleSubmitFeedback}
              >
                Submit Feedback
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Thanks for submitting!</h2>
              <Confetti width={200} height={200} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackAndRatings;
