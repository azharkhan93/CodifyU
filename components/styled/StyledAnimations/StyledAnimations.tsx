"use client"
import styled, { keyframes } from "styled-components";


export const shimmerAnimation = keyframes`
  0% {
    border-color: white;
  }
  50% {
    border-color: black;
  }
  100% {
    border-color: white;
  }
`;
export const fadeUpFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
`;


export const fadeUpFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
`;
export const fadeUpFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
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
export const slide = keyframes`
  0% {
    transform: translateX(100%);
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


