import React, { useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const CreateNewMeeting = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCreateMeeting = () => {
    setShowConfirmation(true);
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
              Create New Meeting
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='bg-white rounded-lg shadow-md p-6 cursor-pointer mb-4'
            >
              <h2 className='text-xl font-semibold mb-4'>Meeting Details</h2>
              <form>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>Date:</label>
                  <input
                    type='date'
                    className='w-full p-2 border rounded-lg'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>Time:</label>
                  <input
                    type='time'
                    className='w-full p-2 border rounded-lg'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>Topic:</label>
                  <input
                    type='text'
                    className='w-full p-2 border rounded-lg'
                    placeholder='Enter meeting topic'
                  />
                </div>
                <button
                  type='button'
                  onClick={handleCreateMeeting}
                  className='bg-green-500 text-white px-4 py-2 rounded-md mt-4'
                >
                  Create Meeting
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {showConfirmation && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>Meeting Created Successfully</h2>
            <p className='mb-4'>The new meeting has been successfully created!</p>
            <button
              onClick={() => setShowConfirmation(false)}
              className='bg-green-500 text-white px-4 py-2 rounded-md'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewMeeting;
