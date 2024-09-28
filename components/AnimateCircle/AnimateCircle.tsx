import React from 'react';

export const AnimateCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="20 0 100 100"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}
  >
    <defs>
      <filter id="blur" x="0" y="0" width="100%" height="auto">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
      </filter>
    </defs>
    <g>
      <circle cx="20" cy="20" r="4" fill="#FB9C42" filter="url(#blur)">
        <animate
          attributeName="cx"
          values="20;40;20"
          dur="20s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          keySplines="0.42,0,0.58,1"
        />
        <animate
          attributeName="cy"
          values="20;30;20"
          dur="20s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          keySplines="0.42,0,0.58,1"
        />
      </circle>

      <circle cx="40" cy="20" r="4" fill="#FB9C42" filter="url(#blur)">
        <animate
          attributeName="cx"
          values="40;60;40"
          dur="15s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          keySplines="0.42,0,0.58,1"
        />
        <animate
          attributeName="cy"
          values="20;30;20"
          dur="15s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          keySplines="0.42,0,0.58,1"
        />
      </circle>

      <circle cx="60" cy="60" r="4" fill="#FB9C42" filter="url(#blur)">
        <animate
          attributeName="cx"
          values="60;70;60"
          dur="25s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          keySplines="0.42,0,0.58,1"
        />
        <animate
          attributeName="cy"
          values="60;70;60"
          dur="25s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          keySplines="0.42,0,0.58,1"
        />
      </circle>

      <circle cx="80" cy="60" r="4" fill="#FB9C42" filter="url(#blur)">
        <animate
          attributeName="cx"
          values="80;90;80"
          dur="30s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          keySplines="0.42,0,0.58,1"
        />
        <animate
          attributeName="cy"
          values="60;70;60"
          dur="30s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          keySplines="0.42,0,0.58,1"
        />
      </circle>
    </g>
  </svg>
);





