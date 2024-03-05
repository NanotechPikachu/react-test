import React from 'react';
import { ClipboardCopyIcon } from '@heroicons/react/24/outline';


export default function Terminal({ command }) {
  return (
    <div className="flex justify-between items-center bg-black text-green-400 p-3 rounded mt-4 ml-4">
    <span className="text-gray-300">$ {command}</span>
    <button
          onClick={handleCopy}
          className="bg-gray-700 hover:bg-gray-600 text-gray-400 rounded p-1"
        >
    <ClipboardCopyIcon className="h-5 w-5" />
    </button>
    </div>
  )
}

function handleCopy(command) {
  navigator.clipboard.writeText(command);
};