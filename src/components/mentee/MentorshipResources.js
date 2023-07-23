import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const MentorshipResources = () => {
  const [mentorData, setMentorData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        setMentorData(data.results[0]);
      })
      .catch((error) => console.error('Error fetching mentor data:', error));
  }, []);

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
            Mentorship Resources
          </motion.h1>
          {mentorData && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center justify-center">
                <img src={mentorData.picture.large} alt='mentor' className="rounded-full h-24 w-24" />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{`${mentorData.name.first} ${mentorData.name.last}`}</h2>
                  <p className="text-gray-800">{mentorData.email}</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-6">Study Resources from your mentor</h3>
              <ul className="list-disc list-inside mt-4">
                <li><a href='google.com'><u>Cheatsheet for HTML</u></a></li>
                <li><a href='google.com'><u>Cheatsheet for CSS</u></a></li>
                <li><a href='google.com'><u>Cheatsheet for JS</u></a></li>
                <li><a href='google.com'><u>Tags List</u></a></li>
                <li><a href='google.com'><u>Cheatsheet for React JS</u></a></li>
                <li><a href='google.com'><u>Cheatsheet for Tailwind CSS</u></a></li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorshipResources;
