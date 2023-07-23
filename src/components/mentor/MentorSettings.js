import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const MentorSettings = () => {
  const handleSaveNotificationSettings = () => {
    alert('Notification settings saved!');
  };

  const handleSaveThemeSettings = () => {
    alert('Theme settings saved!');
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
              Mentor Settings
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
            >
              <h2 className='text-xl font-semibold mb-4'>Profile Settings</h2>
              <p>
                Update your profile information, contact details, and other personal settings.
              </p>
              <button className='bg-green-500 text-white px-4 py-2 rounded-md mt-4'>
                Update Profile
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
            >
              <h2 className='text-xl font-semibold mb-4'>Notification Settings</h2>
              <p>Manage your notification preferences and settings.</p>
              <div className='flex items-center mt-4'>
                <label className='mr-4'>Opt-in for Email Notifications:</label>
                <div className='relative inline-block w-10 mr-2 align-middle select-none'>
                  <input
                    type='checkbox'
                    name='emailNotifications'
                    id='emailNotifications'
                    className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
                  />
                  <label
                    htmlFor='emailNotifications'
                    className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
                  ></label>
                </div>
                <span className='text-sm'>Yes</span>
              </div>
              <button
                onClick={handleSaveNotificationSettings}
                className='bg-green-500 text-white px-4 py-2 rounded-md mt-4'
              >
                Save Notification Settings
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='bg-white rounded-lg shadow-md p-6 cursor-pointer'
            >
              <h2 className='text-xl font-semibold mb-4'>Theme Settings</h2>
              <p>Customize the appearance of the mentor dashboard.</p>
              <div className='flex items-center mt-4'>
                <label className='mr-4'>Dark Mode:</label>
                <div className='relative inline-block w-10 mr-2 align-middle select-none'>
                  <input
                    type='checkbox'
                    name='darkMode'
                    id='darkMode'
                    className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
                  />
                  <label
                    htmlFor='darkMode'
                    className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
                  ></label>
                </div>
                <span className='text-sm'>Enable</span>
              </div>
              <button
                onClick={handleSaveThemeSettings}
                className='bg-green-500 text-white px-4 py-2 rounded-md mt-4'
              >
                Save Theme Settings
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MentorSettings;