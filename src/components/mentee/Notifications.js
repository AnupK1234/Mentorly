import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { MdNotifications } from 'react-icons/md';
import sound from '../../assets/notification.mp3';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'New mentorship request received from John Doe.',
      timestamp: '2023-07-22 10:30 AM',
    },
    {
      id: 2,
      message: 'You have a new message from Jane Smith.',
      timestamp: '2023-07-22 11:15 AM',
    },
  ]);

  const [newNotification, setNewNotification] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNotification =
        notifications[Math.floor(Math.random() * notifications.length)];
      setNewNotification(randomNotification);
    }, 3000);

    return () => clearInterval(interval);
  }, [notifications]);

  useEffect(() => {
    if (newNotification) {
      const audio = new Audio(sound); // Use the 'sound' variable here
      audio.play();
    }
  }, [newNotification]);

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
              Notifications
            </motion.h1>

            {newNotification && (
              <motion.div
                key={newNotification.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
              >
                <div className='flex items-center'>
                  <MdNotifications className='text-2xl mr-2' />
                  <p>{newNotification.message}</p>
                </div>
                <p className='text-sm text-gray-600 mt-2'>{newNotification.timestamp}</p>
              </motion.div>
            )}

            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
              >
                <div className='flex items-center'>
                  <MdNotifications className='text-2xl mr-2' />
                  <p>{notification.message}</p>
                </div>
                <p className='text-sm text-gray-600 mt-2'>{notification.timestamp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Notifications;
