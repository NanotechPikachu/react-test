import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NextCard({ link, title }) {
  return (
    <div className="mt-20 mr-5 ml-5 rounded-md text-right border-2 border-slate-200/50 bg-transparent">
      <div className="flex justify-end items-center">
      <div className="flex flex-col mr-4">
      <p className="text-sm text-slate-500/50 pt-4">Next</p>
      <h2 className="text-xl text-white mt-1 pb-4">
      {title}
      </h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pl-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
      </div>
    </div>
  );
}

