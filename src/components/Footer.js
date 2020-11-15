import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (    
      <footer className="center">
        <p>Created by Ori Baram ⓒ {year}</p>
      </footer>    
  );
}

export default Footer;
