import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { BsClockHistory } from 'react-icons/bs';

const MentorshipHistory = () => {
  const [mentorshipHistoryData, setMentorshipHistoryData] = useState([]);
  const [selectedMentee, setSelectedMentee] = useState(null);

  useEffect(() => {
    const fetchMentees = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        setMentorshipHistoryData(
          data.results.map((user) => ({
            id: user.login.uuid,
            menteeName: `${user.name.first} ${user.name.last}`,
            email: user.email,
            date: '2023-07-15',
            duration: '1 hour',
            feedback: 'Great mentorship session! Learned a lot.', 
            picture: user.picture.large,
          }))
        );
      } catch (error) {
        console.error('Error fetching mentees:', error);
      }
    };
    fetchMentees();
  }, []);

  const handleChatClick = (mentee) => {
    setSelectedMentee(mentee);
    alert("Entering to chat...")
  };

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
              Mentorship History
            </motion.h1>

            {mentorshipHistoryData.map((mentorship) => (
              <motion.div
                key={mentorship.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
              >
                <div className='flex items-center mb-4'>
                  <BsClockHistory className='text-2xl mr-2' />
                  <h2 className='text-xl font-semibold'>Completed Mentorship</h2>
                </div>
                <div className='flex items-center'>
                  <img
                    src={mentorship.picture}
                    alt='Mentee'
                    className='w-12 h-12 rounded-full mr-4'
                  />
                  <p>Mentee: {mentorship.menteeName}</p>
                </div>
                <p>Date: {mentorship.date}</p>
                <p>Duration: {mentorship.duration}</p>
                <p>Feedback: {mentorship.feedback}</p>
                <button
                  className='bg-green-500 text-white px-4 py-2 rounded-md mt-4'
                  onClick={() => handleChatClick(mentorship)}
                >
                  Chat with Mentee
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MentorshipHistory;
