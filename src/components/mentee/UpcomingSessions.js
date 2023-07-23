import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const UpcomingSessions = () => {
  const upcomingSessionsData = [
    { id: 1, date: '2023-08-15', topic: 'Introduction to Programming' },
    { id: 2, date: '2023-08-22', topic: 'Web Development Basics' },
    { id: 3, date: '2023-08-29', topic: 'React.js Fundamentals' },
  ];

  return (
    <div className='p-4'>
      <Navbar />
      <div className="p-10 min-h-screen bg-green-100">
        <div className="py-12 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8"
          >
            Upcoming Mentorship Sessions
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            {upcomingSessionsData.map((session) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: session.id * 0.2 }}
                className="border border-green-500 rounded-md p-4 mb-4"
              >
                <h2 className="text-xl font-semibold">{session.topic}</h2>
                <p className="text-gray-600 mt-2">Date: {session.date}</p>
              </motion.div>
            ))}
            {upcomingSessionsData.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-green-200 rounded-md p-4"
              >
                <p className="text-gray-800">No upcoming sessions at the moment.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessions;
