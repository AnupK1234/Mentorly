import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiActivity } from 'react-icons/fi';
import Navbar from './Navbar';
import Confetti from 'react-confetti';

const MentorshipProgressTracking = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const insightsData = [
    {
      title: 'Mentorship Impact',
      description:
        'Our mentorship program has helped countless individuals achieve their goals, with an average success rate of 90% in career advancement and personal growth.',
      icon: <FiCheckCircle className='text-green-500' />,
    },
    {
      title: 'Expert Mentors',
      description:
        'Our mentors are industry veterans with years of experience, including CEOs, entrepreneurs, and subject matter experts, dedicated to guiding and supporting you.',
      icon: <FiUsers className='text-blue-500' />,
    },
    {
      title: 'Community Engagement',
      description:
        'Join a vibrant community of like-minded individuals, collaborate on projects, and attend exclusive events to expand your network and horizons.',
      icon: <FiActivity className='text-orange-500' />,
    },
  ];
  const handleGetStarted = () => {
    setShowConfetti(true);
    setShowPopup(true);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='p-4'
    >
      {showConfetti && <Confetti recycle={false} />}
      <Navbar />
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className='mt-6'
      >
        <h2 className='text-3xl font-bold text-gray-800'>Welcome to Mentorship Progress Tracking</h2>
        <p className='mt-2 text-lg text-gray-600'>
          Track and manage your mentorship journey for success.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='grid grid-cols-1 gap-4 md:grid-cols-3 mt-8'
      >
        {insightsData.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className='p-6 bg-white rounded-lg shadow-md border border-gray-200'
          >
            <div className='flex items-center mb-4'>
              {insight.icon}
              <h3 className='ml-2 text-xl font-semibold text-gray-800'>{insight.title}</h3>
            </div>
            <p className='text-gray-600'>{insight.description}</p>
          </motion.div>
        ))}
      </motion.div>
      {showPopup && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-200'
        >
          <h3 className='text-xl font-semibold text-gray-800'>Congratulations!</h3>
          <p className='mt-2 text-gray-600'>
            You have taken the first step towards an amazing mentorship journey.
          </p>
          <button
            onClick={handlePopupClose}
            className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700'
          >
            Close
          </button>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className='mt-8'
      >
        <h2 className='text-3xl font-bold text-gray-800'>Your Journey Awaits!</h2>
        <p className='mt-2 text-lg text-gray-600'>
          Embark on an enriching mentorship experience and unlock your full potential.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='mt-4 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700'
          onClick={handleGetStarted}
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default MentorshipProgressTracking;
