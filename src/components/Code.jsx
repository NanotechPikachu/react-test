import React from 'react';

export default function Code({ code }) {
  return (
    <span className="backdrop-blur dark:text-white text-black bg-zinc-4
300/50 dark:bg-zinc-300/20 p-0.5 font-mono text-sm">
    {code}
    </span>
  )
}