"use client";
import styled, { keyframes, css } from "styled-components";
import { Box, CenterBox } from "../Box";
import {
  blinkCaret,
  scrollLogos,
  scrolling,
  typewriter,
  waveAnimation,
} from "../StyledAnimations";
import { Row } from "../Row";
import { Column } from "../Column";


export const TypewriterText = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;
  animation: ${typewriter} 4s steps(40, end) infinite,
    ${blinkCaret} 500ms steps(40, end) infinite;
`;

export const Flock = styled(Row)`
  white-space: nowrap;
  animation: ${scrollLogos} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  & > * {
    flex: 0 0 auto;
    // min-width: 220px;
  }
`;
export const Floki = styled(CenterBox)`
  display: flex;
  animation: ${scrolling} 40s linear infinite;
`;


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
      black,
      #d84797,
      green
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
