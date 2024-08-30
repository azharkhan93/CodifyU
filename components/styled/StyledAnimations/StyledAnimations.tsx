"use client"
import styled, { keyframes } from "styled-components";


export const reverseTextAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const typewriter = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

export const blinkCaret = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: transparent;
  }
`;
export const fing = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const scrolling = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;


// const rotate = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `;

// const RotatingImage = styled(Image)`
//   animation: ${rotate} 10s linear infinite;
// `;


