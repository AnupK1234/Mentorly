import React from 'react';
import { motion } from 'framer-motion';

const Mentor = () => {
  const meetingsAttended = [
    { id: 1, date: '2023-07-01', topic: 'Introduction to Web Development' },
    { id: 2, date: '2023-07-08', topic: 'React.js Basics' },
  ];

  const matchedSkills = ['JavaScript', 'React.js', 'Node.js', 'Python'];

  const lecturesConducted = [
    { id: 1, date: '2023-06-15', topic: 'Introduction to Programming' },
    { id: 2, date: '2023-06-22', topic: 'Object-Oriented Programming' },
  ];

  const peopleMatched = 20; 
  const peopleMentored = 12; 

  return (
    <div className="p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8"
      >
        Mentor Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-4">Meetings Attended</h2>
          {meetingsAttended.map((meeting) => (
            <div key={meeting.id} className="mb-2">
              <p className="text-sm text-gray-600">{meeting.date}</p>
              <p>{meeting.topic}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-4">Matched Skills</h2>
          <div className="flex flex-wrap">
            {matchedSkills.map((skill) => (
              <span key={skill} className="bg-green-500 text-white px-3 py-1 rounded-lg mr-2 mb-2">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-4">Lectures Conducted</h2>
          {lecturesConducted.map((lecture) => (
            <div key={lecture.id} className="mb-2">
              <p className="text-sm text-gray-600">{lecture.date}</p>
              <p>{lecture.topic}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-4">People Matched</h2>
          <p className="text-3xl font-bold">{peopleMatched}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-4">People Mentored</h2>
          <p className="text-3xl font-bold">{peopleMentored}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Mentor;
