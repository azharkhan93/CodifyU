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





// export const shimmerWave = keyframes`
//   0% {
//     background-position: -200% 0;
//   }
//   100% {
//     background-position: 200% 0;
//   }
// `;


// export const StyledAnimations = styled()`
//   border-top: 4px solid;
//   border-bottom: 4px solid;
//   border-image: initial;
//   animation: ${shimmerAnimation} 2s infinite ease-in-out;
//   border-radius: 8px;
// `;