import React, { useState, useEffect } from 'react';
import "../css/styles.css";

export default function TitleNavBar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    let currentScrollPos = window.pageYOffset;

    // Make navbar visible only when scrolling down
    setVisible(currentScrollPos > lastScrollTop || currentScrollPos < 10);

    // Save the new position for comparison
    setLastScrollTop(currentScrollPos <= 0 ? 0 : currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <nav className={`top-0 left-0 w-full flex items-center justify-between py-4 px-8 border-b border-primary-color shadow-md z-10 transition-all duration-300 ease-in-out ${visible ? 'visible' : 'invisible'}`}>
        <p className="font-bold text-left text-sky-600 hover:text-amber-700 text-xl font-sans">
          Nanotech Wiki
        </p>
      </nav>
    </>
  );
}
