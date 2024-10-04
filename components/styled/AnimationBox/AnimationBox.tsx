"use client";
import styled, { keyframes, css } from "styled-components";
import { Box, CenterBox } from "../Box";
import {
  slideIn,
  slideOut,
  waveAnimation,
} from "../StyledAnimations";
import { Row } from "../Row";
import { Column } from "../Column";






export const AnimatedColumn = styled(Column)`
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(
      to right,
      #FB9C42,
      #facb60
    );
    background-size: 200% 100%; 
    animation: ${waveAnimation} 3s linear infinite; 
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

export const AnimatedBox = styled(Box)<{ isOpen: boolean }>`
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.5s ease forwards;
`;

