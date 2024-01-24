import React from "react";

function Footer() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700">
        Facebook
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600">
        Twitter
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700">
        Instagram
      </a>
      {/* Dodaj linki do innych platform według potrzeb */}
    </div>
  );
}
export default Footer;
