import React from "react";

const Event = () => {
  const events = [
    {
      title: "Resume Review Session",
      date: "01/01/2023",
      description: "In this comprehensive and personalized Resume Review Session, our expert team will carefully analyze and evaluate your resume to ensure it maximizes its potential.",
    },
    {
      title: "Introduction to Open Source",
      date: "10/01/2023",
      description: "Discover the world of Open Source in this engaging and enlightening session. Open Source is a collaborative approach to software development, where the code is freely available for anyone to view, use, modify, and distribute.",
    },
    {
      title: "Networking with Professionals",
      date: "25/01/2023",
      description: "Step into the realm of successful networking with our interactive and empowering sessions. Connecting with professionals is a crucial skill for career growth and personal development. In these sessions, you'll learn proven strategies and techniques to build and maintain meaningful professional relationships.",
    },
    {
        title: "How to improve Communication Skills?",
        date: "05/02/2023",
        description: "Unlock the power of effective communication with our dynamic and transformative training sessions. In today's fast-paced world, strong communication skills are essential for personal and professional success. In these sessions, you'll gain valuable insights into various communication styles, active listening techniques, and body language cues to enhance your ability to convey ideas confidently and empathetically.",
    },
    {
        title: "Tech Talks",
        date: "15/02/2023",
        description: "Dive into the exciting world of technology with our thought-provoking and informative Tech Talks sessions. Designed for tech enthusiasts and professionals alike, these sessions cover a wide range of cutting-edge topics, trends, and innovations in the tech industry. ",
    }
  ];

  const handleRegistration = (eventName) => {
    // Show an alert with the text "Registration Successful for event.title"
    alert(`Registration Successful for ${eventName}`);
  };

  return (
    <div className="bg-stone-300 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-black mt-8">Events/Sessions</h1>

        <h2 className="text-2xl font-bold text-black mt-8">Upcoming Events</h2>
        {
          events.map(event => (
            <div className="event bg-white rounded-lg shadow-lg p-4 mt-4">
              <h3 className="event-name text-xl font-bold mb-2 text-cyan-600">{event.title}</h3>
              <p className="event-time text-gray-600">Date and Time: {event.date}</p>
              <p className="event-location text-gray-600">Description: {event.description}</p>
              <button className="btn-register bg-cyan-600 text-white px-4 py-2 rounded mt-2" onClick={() => handleRegistration(event.title)}>Register</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Event;
