import React from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline';


export default function Terminal({ command }) {
  return (
    <>
    <div className="flex justify-between items-center bg-black rounded mt-4 ml-5 h-5 mr-5" />
    <div className="flex justify-between items-center bg-zinc-900 text-green-400 p-3 rounded ml-5 mr-5">
    <span className="text-blue-500">$ {command}</span>
    <button
          onClick={() => handleCopy(command)}
          className="bg-gray-700 hover:bg-gray-600 text-gray-400 rounded p-1"
        >
    <ClipboardIcon className="h-5 w-5" />
    </button>
    </div>
    </>
  )
}

function handleCopy(command) {
  navigator.clipboard.writeText(command);
};