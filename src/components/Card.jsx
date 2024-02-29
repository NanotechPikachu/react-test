import React from 'react';
import '../css/styles.css';

export default function Card({ title, children, icon, className }) {
  return (
    <div className={`border md:w-96 p-5 m-5 bg-zinc-900 backdrop-blur overflow-hidden flex items-center ${className}`}>
      {icon && (
        <svg className="text-blue-500 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M10 25h30m-20-15l15 15-15 15" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )}
      <h2 className={`text-2xl font-bold mb-4 text-white whitespace-pre-line ${icon ? 'flex-grow' : ''}`}>{title}</h2>
      <div className="whitespace-pre-line text-white">{children}</div>
    </div>
  );
}
