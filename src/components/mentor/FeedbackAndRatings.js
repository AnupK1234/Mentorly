import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const FeedbackAndRatings = () => {
  const [mentors, setMentors] = useState([]);
  const [feedbackGiven, setFeedbackGiven] = useState([]);
  const [feedbackReceived, setFeedbackReceived] = useState([]);

  //fetching random api
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        const data = await response.json();
        setMentors(data.results);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };
    fetchMentors();

    const generateFeedback = () => {
      const feedback = [];
      for (let i = 0; i < mentors.length; i++) {
        const randomRating = Math.floor(Math.random() * 5) + 1;
        feedback.push({
          mentorName: `${mentors[i].name.first} ${mentors[i].name.last}`,
          rating: randomRating,
          comment: `Great mentor! Very helpful and knowledgeable.`,
        });
      }
      setFeedbackReceived(feedback);
    };

    generateFeedback();
  }, [mentors]);

  //generating random feedbacks
  useEffect(() => {
    const generateFeedbackGiven = () => {
      const feedback = [];
      for (let i = 0; i < mentors.length; i++) {
        const randomRating = Math.floor(Math.random() * 5) + 1;
        feedback.push({
          mentorName: `${mentors[i].name.first} ${mentors[i].name.last}`,
          rating: randomRating,
          comment: `Had a great mentoring session with ${mentors[i].name.first}. Highly recommend!`,
        });
      }
      setFeedbackGiven(feedback);
    };

    generateFeedbackGiven();
  }, [mentors]);

  return (
    <div className='p-4'>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='p-10 min-h-screen bg-green-100'
      >
        <div className='py-12 px-4 text-center'>
          <div className='container mx-auto'>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-4xl font-bold mb-8'
            >
              Feedback and Ratings
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
            >
              <h2 className='text-xl font-semibold mb-4'>Your Feedback</h2>
              <p>
                Provide your valuable feedback and ratings for the mentorship experiences you've had.
              </p>
              <button className='bg-green-500 text-white px-4 py-2 rounded-md mt-4'>
                Give Feedback
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
            >
              <h2 className='text-xl font-semibold mb-4'>Feedback Received</h2>
              {feedbackReceived.map((feedback, index) => (
                <div key={index} className='p-4 border rounded-lg mb-2'>
                  <p className='text-lg font-semibold mb-2'>
                    {feedback.mentorName} - Rating: {feedback.rating}
                  </p>
                  <p className='text-sm text-gray-600'>{feedback.comment}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
            >
              <h2 className='text-xl font-semibold mb-4'>Feedback Given</h2>
              {feedbackGiven.map((feedback, index) => (
                <div key={index} className='p-4 border rounded-lg mb-2'>
                  <p className='text-lg font-semibold mb-2'>
                    {feedback.mentorName} - Rating: {feedback.rating}
                  </p>
                  <p className='text-sm text-gray-600'>{feedback.comment}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='bg-white rounded-lg shadow-md p-6 cursor-pointer'
            >
              <h2 className='text-xl font-semibold mb-4'>Other Mentors</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {mentors.map((mentor, index) => (
                  <div key={index} className='p-4 border rounded-lg'>
                    <img
                      src={mentor.picture.large}
                      alt='Mentor'
                      className='w-32 h-32 mx-auto rounded-full mb-4'
                    />
                    <p className='text-lg font-semibold mb-2'>
                      {mentor.name.first} {mentor.name.last}
                    </p>
                    <p className='text-sm text-gray-600'>{mentor.email}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeedbackAndRatings;
