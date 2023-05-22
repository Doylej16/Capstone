import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <p>
        &copy; {new Date().getFullYear()} The World of Marvel. All rights reserved.
      </p>
      <p>
        This website is not affiliated with Marvel. All Marvel characters and
        related content are the property of Marvel.
      </p>
    </footer>
  );
};

export default Footer;
