import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import Navbar from './Navbar';
import MentorCard from './MentorCard';

const SendRequest = () => {
  const [mentors, setMentors] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=30').then((response) => {
      const data = response.data.results;
      const mappedMentors = data.map((user) => ({
        name: { first: user.name.first, last: user.name.last },
        picture: user.picture,
        email: user.email,
        expertise: 'Frontend, Backend, Java, Python', 
        socialLinks: [
          { url: 'https://example.com', label: 'Website' }, 
          { url: 'https://twitter.com', label: 'Twitter' },
        ],
      }));
      setMentors(mappedMentors);
    });
  }, []);

  const handleSendRequest = () => {
    setShowConfetti(true);

    setTimeout(() => {
      setShowChatPopup(true);
    }, 2000);
  };

  return (
    <div className="p-4">
      <Navbar />
      {showConfetti && <Confetti />}
      {showChatPopup && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4"
        >
          <p>Chat Popup</p>
        </motion.div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        onClick={handleSendRequest}
      >
        Send Mentorship Request
      </button>
    </div>
  );
};

export default SendRequest;
