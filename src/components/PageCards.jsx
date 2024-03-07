import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NextCard({ link, title }) {
  let navigate = useNavigate();

  function nextPage() {
    navigate(link);
  };

  return (
    <div className="mt-20 mr-5 ml-5 rounded-md text-right border-2 border-slate-200/50 bg-transparent" onClick={() => nextPage()}>
      <div className="flex justify-end items-center pt-4 pb-4 pr-4">
      <div className="flex flex-col mr-4">
      <p className="text-sm text-slate-200/50 dark:text-slate-400/50">Next</p>
      <h2 className="text-xl text-white mt-1">
      {title}
      </h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
      </div>
    </div>
  );
}
