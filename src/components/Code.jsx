import React from 'react';

export default function Code({ code }) {
  return (
    <span style={{ fontFamily: 'Times New Roman' }} className="backdrop-blur bg-zinc-700 p-0.5">
    {code}
    </span>
  )
}