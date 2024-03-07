import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NextCard({ link, title }) {
  return (
    <div className="mt-20 rounded-md text-right ml-5 mr-5 w-full border-2 border-slate-200/50 bg-transparent">
    <div className="my-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    <p className="text-sm text-slate-500/50">Next</p>
    <h2 className="text-xl text-white">
    {title}
    </h2>
    </div>
    </div>
  )
}
