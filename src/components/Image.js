import React from 'react';

const Image = ({ width = 200, height = 200, title = 'Image' }) => {
  return (
    <svg
      width={width}
      height={height}
      aria-label={title}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <circle cx="100" cy="100" r="80" fill="blue" />
      <text x="40" y="120" fill="white">
        {title}
      </text>
    </svg>
  );
};

export default Image;
