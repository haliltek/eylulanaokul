import React from 'react';

export const DecorativeLeaves: React.FC = () => {
  return (
    <>
      {/* Top Left Corner Watercolor Leaf */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-48 h-48 opacity-25 -z-10 -translate-x-[20%] -translate-y-[10%] select-none"
        aria-hidden="true"
      >
        <svg fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40,160 C20,100 70,30 160,20 C140,90 110,140 40,160 Z"
            fill="#E5880B"
          />
          <path
            d="M40,160 C80,120 120,80 160,20"
            stroke="#C57004"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Bottom Right Corner Watercolor Leaf */}
      <div
        className="pointer-events-none fixed bottom-0 right-0 w-64 h-64 opacity-30 -z-10 translate-x-[15%] translate-y-[15%] select-none"
        aria-hidden="true"
      >
        <svg fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M160,40 C180,100 130,170 40,180 C60,110 90,60 160,40 Z"
            fill="#2A7276"
          />
          <path
            d="M120,60 C150,110 110,150 50,160"
            fill="#74B127"
            opacity="0.6"
          />
        </svg>
      </div>
    </>
  );
};
