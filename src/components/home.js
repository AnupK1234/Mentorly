import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../assets/mentorly.png';

const Home = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <div className="bg-gradient-to-r from-green-400 to-lightGreen-500 p-3">
      <section className="py-16">
        <div className="container mx-auto text-center flex items-center">
          <div>
          <img src={Logo} alt='logo' height={50} />
          </div>
         <div>
         <h1 className="text-4xl font-bold text-black">Welcome to Mentorly!</h1>
          <p className="text-lg text-gray-800 mt-4">Connecting mentors and mentees to empower growth and learning.</p>
         </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold">User Profiles</h2>
              <p className="mt-4">Create separate user profiles for both mentors and mentees to showcase their skills and interests.</p>
            </Link>

            <Link to="/" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold">Messaging System</h2>
              <p className="mt-4">Facilitate communication between mentors and mentees with an integrated messaging system.</p>
            </Link>

            <Link to="/" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold">Rating & Review</h2>
              <p className="mt-4">Allow mentees to rate their mentors and provide valuable feedback through a review system.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-lightGreen-100 py-12 text-center">
        <div className="container mx-auto">
          {isAuthenticated ? (
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Welcome, {user.name}!</h2>
              <p className="text-lg text-gray-800 mt-2">{user.email}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Link
                  to="/mentor"
                  className="bg-white text-green-500 py-2 px-6 rounded-lg font-semibold shadow hover:bg-green-500 hover:text-white transition duration-300"
                >
                  Switch to Mentor Dashboard
                </Link>
                <Link
                  to="/mentee"
                  className="bg-white text-green-500 py-2 px-6 rounded-lg font-semibold shadow hover:bg-green-500 hover:text-white transition duration-300"
                >
                  Switch to Mentee Dashboard
                </Link>
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="bg-red-500 text-white py-2 px-6 rounded-lg font-semibold shadow hover:bg-red-600 hover:text-white transition duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center space-x-4">
              <Link
                to="/sign-up"
                className="bg-white text-green-500 py-2 px-6 rounded-lg font-semibold shadow hover:bg-green-500 hover:text-white transition duration-300"
              >
                Sign Up Now
              </Link>
              <button
                onClick={() => loginWithRedirect()}
                className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold shadow hover:bg-green-600 hover:text-white transition duration-300"
              >
                Login with Auth0
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
