
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 border-t border-gray-800">
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} Ramani R. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
