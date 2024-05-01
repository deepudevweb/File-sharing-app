import React from 'react';

const CircleTickSVG = () => {
  return (
    <svg className="block h-10vw text-green-500 size-[100px]" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" fillRule="evenodd" stroke="currentColor">
        <path className="circle" d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"/>
        <path className="tick" d="M6.5 13.5L10 17 l8.808621-8.308621"/>
      </g>
    </svg>
  );
};

export default CircleTickSVG;
