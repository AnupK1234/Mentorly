import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import Card from '../mentor/Card';
import Navbar from './Navbar';

const Mentee = () => {
  const { user, isAuthenticated } = useAuth0();
  const meetingsAttended = [
    { id: 1, date: '2023-07-01', topic: 'Introduction to Web Development' },
    { id: 2, date: '2023-07-08', topic: 'React.js Basics' },
  ];
  const [isAvailable, setIsAvailable] = useState(false);

  const matchedSkills = ['JavaScript', 'React.js', 'Node.js', 'Python'];
  const additionalFeatures = [
    {
      link: '/send_mentorship_requests',
      title: 'Send Mentorship Requests',
      description: 'Send mentorship requests to mentors you are interested in working with.',
    },
    {
      link: '/view_mentorship_history',
      title: 'View Mentorship History',
      description: 'View past mentorship engagements and topics covered.',
    },
    {
      link: '/view_upcoming_sessions',
      title: 'View Upcoming sessions',
      description: 'View Upcoming sessions.',
    },
    {
      link: '/give_feedback_and_ratings',
      title: 'Give Feedback and Ratings',
      description: 'Provide feedback and ratings on mentorship experiences.',
    },
    {
      link: '/mentee_receive_notifications',
      title: 'Receive Notifications',
      description: 'Get updates on new mentorship opportunities and upcoming meetings.',
    },
    {
      link: '/mentee_calendar_integration',
      title: 'Calendar Integration',
      description: 'Integrate mentorship schedule with external calendar apps for effective time management.',
    },
    {
      link: '/access_mentorship_resources',
      title: 'Access Mentorship Resources',
      description: 'Access tips and resources for making the most out of mentorship.',
    },
  ];

  const lecturesConducted = [
    { id: 1, date: '2023-06-15', topic: 'Introduction to Programming' },
    { id: 2, date: '2023-06-22', topic: 'Object-Oriented Programming' },
  ];

  const peopleMatched = 0;
  const peopleMentored = 20;

  return (
    <div className='p-4'>
      <Navbar />
      <div className="p-10 min-h-screen bg-green-100">
        <div className="py-12 px-4 text-center">
          <div className="container mx-auto">
            {isAuthenticated ? (
              <div align='center'>
                <img src={user.picture} alt='profile' />
                <h2 className="text-2xl font-semibold text-black mb-4">Welcome, {user.name}!</h2>
                <p className="text-lg text-gray-800 mt-2">{user.email}</p>
                <div className="flex justify-center space-x-4">
                </div>
              </div>
            ) : (
              <div>
                <h1>Please login</h1>
              </div>
            )}
          </div>
          <div>
            <div className='flex py-3'>
              <hr className="w-1/4 h-1 bg-gradient-to-r from-green-400 to-lightGreen-500" />
            </div>
            <div align='right'>
              <hr className="w-1/4 h-1 bg-gradient-to-l from-green-400 to-lightGreen-500 self-end" />
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8"
          >
            Mentee Dashboard
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-4">Sessions Attended</h2>
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
              <h2 className="text-xl font-semibold mb-4">Skills to be enhanced</h2>
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
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer "
            >
              <h2 className="text-xl font-semibold mb-4">Upcoming Mentorship Sessions</h2>
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
              <h2 className="text-xl font-semibold mb-4">Absent Sessions</h2>
              <p className="text-3xl font-bold">{peopleMatched}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-4">Sessions Attended</h2>
              <p className="text-3xl font-bold">{peopleMentored}</p>
            </motion.div>
          </div>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {additionalFeatures.map((feature) => (
            <Card key={feature.title} title={feature.title} description={feature.description} link={feature.link}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentee;
