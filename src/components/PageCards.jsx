import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NextCard({ link, title }) {
  return (
    <div className="mt-20 rounded-md text-left ml-5 mr-5 w-full border-2 border-slate-200/50 bg-transparent">
    <div className="my-3"> 
    <p className="text-sm text-slate-500/50">Next</p>
    <h2 className="text-xl text-white">
    {title}
    </h2>
    </div>
    </div>
  )
}