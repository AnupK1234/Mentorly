import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const MentorshipTipsAndResources = () => {
  const mentorshipTipsData = [
    {
      id: 1,
      title: 'Effective Communication Tips',
      description:
        'Learn how to improve your communication skills and establish a strong mentor-mentee relationship.',
    },
    {
      id: 2,
      title: 'Time Management Techniques',
      description:
        'Discover time management strategies to balance mentoring with other commitments.',
    },
    {
      id: 3,
      title: 'Setting Clear Goals',
      description: 'Guide on setting clear and achievable goals for mentoring sessions.',
    },
    // Add more mentorship tips and resources data here
  ];

  const [mentorUpdates, setMentorUpdates] = useState([]);

  // Fetch data from random user API for mentor updates
  useEffect(() => {
    const fetchMentorUpdates = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        const data = await response.json();
        setMentorUpdates(data.results);
      } catch (error) {
        console.error('Error fetching mentor updates:', error);
      }
    };
    fetchMentorUpdates();
  }, []);

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
              Mentorship Tips and Resources
            </motion.h1>

            {mentorshipTipsData.map((tip) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
              >
                <h2 className='text-xl font-semibold mb-2'>{tip.title}</h2>
                <p>{tip.description}</p>
                <button className='bg-green-500 text-white px-4 py-2 rounded-md mt-4'>
                  View Resource
                </button>
              </motion.div>
            ))}

            <div className='my-8'>
              <h2 className='text-2xl font-bold mb-4'>Tips from Top mentors</h2>
              {mentorUpdates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className='bg-white rounded-lg shadow-md p-6 mb-4'
                >
                  <div className='flex items-center'>
                    <img
                      src={update.picture.large}
                      alt='Mentor'
                      className='w-12 h-12 rounded-full mr-4'
                    />
                    <div>
                      <p className='font-semibold'>
                        {update.name.first} {update.name.last}
                      </p>
                      <p className='text-gray-600'>@{update.login.username}</p>
                    </div>
                  </div>
                  <p className='mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla,
                    mauris at auctor posuere, neque metus ultricies erat, eget tempus elit urna in
                    nisl. Ut eu erat ut elit faucibus rhoncus vel quis massa.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MentorshipTipsAndResources;
