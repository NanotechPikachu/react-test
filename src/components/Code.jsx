import React from 'react';

export default function Code({ code }) {
  return (
    <span className="backdrop-blur bg-zinc-700 p-0.5 font-mono text-base">
    {code}
    </span>
  )
}