import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const MentorshipRequest = () => {
  const [menteeData, setMenteeData] = useState([]);
  const [selectedMentee, setSelectedMentee] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchMenteeData();
  }, []);

  const fetchMenteeData = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=20');
      setMenteeData(response.data.results);
    } catch (error) {
      console.error('Error fetching mentee data:', error);
    }
  };

  const handleAcceptRequest = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleMenteeSelect = (mentee) => {
    setSelectedMentee(mentee);
  };

  return (
    <div className='p-4'>
      <Navbar />
      <div className='mt-6'>
        <h2 className='text-3xl font-bold text-gray-800'>Mentorship Requests</h2>
        <p className='mt-2 text-lg text-gray-600'>Review and accept mentee requests.</p>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 mt-8'>
        {menteeData.map((mentee, index) => (
          <motion.div
            key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ y: -10 }}
            className='p-6 bg-white rounded-lg shadow-md border border-gray-200 cursor-pointer'
            onClick={() => handleMenteeSelect(mentee)}
          >
            <img
              src={mentee.picture.large}
              alt={`${mentee.name.first} ${mentee.name.last}`}
              className='w-20 h-20 rounded-full mx-auto mb-4'
            />
            <h3 className='text-xl font-semibold text-gray-800'>
              {mentee.name.first} {mentee.name.last}
            </h3>
            <p className='text-gray-600'>{mentee.email}</p>
          </motion.div>
        ))}
      </div>

      {selectedMentee && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-200'
        >
          <div className='flex items-center mb-4'>
            <img
              src={selectedMentee.picture.large}
              alt={`${selectedMentee.name.first} ${selectedMentee.name.last}`}
              className='w-16 h-16 rounded-full mr-4'
            />
            <h3 className='text-xl font-semibold text-gray-800'>
              {selectedMentee.name.first} {selectedMentee.name.last}
            </h3>
          </div>
          <p className='text-gray-600 mb-4'>{selectedMentee.email}</p>
          <div className='flex justify-between'>
            <a
              href={`https://twitter.com/${selectedMentee.login.username}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-blue-600 mr-2'
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/in/${selectedMentee.login.username}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-blue-600 mr-2'
            >
              LinkedIn
            </a>
            <a
              href={`https://github.com/${selectedMentee.login.username}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-blue-600'
            >
              GitHub
            </a>
          </div>
          <button
            onClick={handleAcceptRequest}
            className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700'
          >
            Accept Request
          </button>
        </motion.div>
      )}

      {showPopup && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-200'
        >
          <h3 className='text-xl font-semibold text-gray-800'>Congratulations!</h3>
          <p className='mt-2 text-gray-600'>You have accepted the mentee request.</p>
          <button
            onClick={handlePopupClose}
            className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700'
          >
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default MentorshipRequest;
