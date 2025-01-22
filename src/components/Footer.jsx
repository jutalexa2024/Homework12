import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-800 text-white py-4">
      <div className="flex justify-center">
        <a
          href="https://github.com/jutalexa2024"
          className="text-white flex items-center space-x-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

