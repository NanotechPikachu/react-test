import React, { useState, useEffect } from 'react';
import "../css/styles.css";

export default function TitleNavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // Detect scroll position
    const currentScrollPos = window.pageYOffset;
    // Set state based on scroll direction
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    // Save the new position for comparison
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <nav className={`top-0 left-0 w-full flex items-center justify-between py-4 px-8 border-b border-primary-color shadow-md z-10 transition-all duration-300 ease-in-out ${visible ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
        <p className="font-bold text-left text-sky-600 hover:text-amber-700 text-xl font-sans">
          Nanotech Wiki
        </p>
      </nav>
    </>
  );
}

