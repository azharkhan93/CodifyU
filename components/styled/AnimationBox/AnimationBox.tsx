"use client";
import styled, { keyframes, css } from "styled-components";
import { Box, CenterBox } from "../Box";
import {
  blinkCaret,
  fing,
  scrolling,
  typewriter,
} from "../StyledAnimations";
import { Row } from "../Row";


export const TypewriterText = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;
  animation: ${typewriter} 4s steps(40, end) infinite,
    ${blinkCaret} 500ms steps(40, end) infinite;
`;

export const Flock = styled(Row)`
  animation: ${fing} 20s linear infinite;
`;
export const Floki = styled(CenterBox)`
  display: flex;
  // width: 400%;
  animation: ${scrolling} 40s linear infinite;
`;
