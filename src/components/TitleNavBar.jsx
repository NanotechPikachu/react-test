import React, { useState, useEffect } from 'react';
import "../css/styles.css";

export default function TitleNavBar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos < lastScrollTop) {
      setVisible(true); // Show navbar when scrolling up
    } else {
      setVisible(false); // Hide navbar when scrolling down
    }
    setLastScrollTop(currentScrollPos <= 0 ? 0 : currentScrollPos); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${visible ? 'visible' : 'invisible'}`}>
        <p className="font-bold text-left text-sky-600 hover:text-amber-700 text-xl font-sans">
          Nanotech Wiki
        </p>
      </nav>
    </>
  );
}
