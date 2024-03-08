import React from 'react';

export default function Code({ code }) {
  return (
    <span className="backdrop-blur dark:text-white text-black bg-zinc-4
100/50 dark:bg-zinc-100/20 p-0.5 font-mono text-sm">
    {code}
    </span>
  )
}