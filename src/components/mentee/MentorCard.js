import React from 'react';

const MentorCard = ({ mentor }) => {
  const { name, picture, email, expertise, socialLinks } = mentor;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
      <div className="flex items-center justify-between">
        <img src={picture.large} alt={name.first} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col items-start ml-4">
          <h2 className="text-lg font-semibold">{`${name.first} ${name.last}`}</h2>
          <p className="text-sm text-gray-600">{expertise}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-800">Email: {email}</p>
        <div className="flex mt-2">
          {socialLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-2">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
