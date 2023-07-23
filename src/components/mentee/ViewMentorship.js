import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const ViewMentorship = () => {
  const pastSessionsData = [
    { id: 1, date: '2023-07-15', topic: 'Introduction to Web Development', feedback: 'Great session!' },
    { id: 2, date: '2023-07-22', topic: 'React.js Basics', feedback: 'Enjoyed the session.' },
  ];

  const [selectedSession, setSelectedSession] = useState(null);

  const handleSessionClick = (session) => {
    setSelectedSession(session);
  };

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
            View Mentorship History
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            {pastSessionsData.map((session) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: session.id * 0.2 }}
                className={`border border-green-500 rounded-md p-4 mb-4 cursor-pointer ${selectedSession?.id === session.id ? 'bg-green-200' : ''}`}
                onClick={() => handleSessionClick(session)}
              >
                <h2 className="text-xl font-semibold">{session.topic}</h2>
                <p className="text-gray-600 mt-2">Date: {session.date}</p>
                {selectedSession?.id === session.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-100 mt-4 p-4 rounded-md"
                  >
                    <p>{session.feedback}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
            {pastSessionsData.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-green-200 rounded-md p-4"
              >
                <p className="text-gray-800">No past sessions available.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ViewMentorship;
