import React from "react";
import profilePicture from '../assets/avatar.png';


const AboutMe = () => {
  return (
    
<div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
  <div className="w-full max-w-9xl mx-6 p-8 bg-white rounded-xl shadow-lg text-center">

    <img
      src={profilePicture}
      alt="Avatar"
      className="w-36 h-36 rounded-full mx-auto mb-6"
    />

    <p className="text-3xl text-gray-800 leading-relaxed">
      Sociable on as carriage my position weddings raillery consider. Peculiar
      trifling absolute and wandered vicinity property yet. The and collecting
      motionless difficulty son. His hearing staying ten colonel met. Sex drew
      six easy four dear cold deny. Moderate children at of outweigh it.
      Unsatiable it considered invitation he travelling insensible. Consulted
      admitting oh mr up as described acuteness propriety moonlight.
    </p>
  </div>
</div>

  );
};

export default AboutMe;

