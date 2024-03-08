import React from 'react';

export default function Code({ code }) {
  return (
    <span className="backdrop-blur text-white bg-zinc-300/50 p-0.5 font-mono text-sm">
    {code}
    </span>
  )
}