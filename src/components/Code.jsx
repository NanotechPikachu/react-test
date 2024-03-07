import React from 'react';

export default function Code({ code }) {
  return (
    <span className="backdrop-blur bg-zinc-400 dark:bg-zinc-700 p-0.5 font-mono text-sm">
    {code}
    </span>
  )
}