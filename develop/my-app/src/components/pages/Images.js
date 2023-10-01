import React from 'react';
import logo from 'develop/my-app/src/components/pages/Home.js'; // Tell webpack this JS file uses this image

console.log('logo.192.png'); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={url} alt="file:///Users/dre/Desktop/pictures/drea.png" />;
}

export default Header;
