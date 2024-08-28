"use client";
import styled, { keyframes, css } from "styled-components";
import { Box } from "../Box";
import {
  blinkCaret,
  fadeUpFromLeft,
  fadeUpFromRight,
  shimmerAnimation,
  typewriter,
} from "../StyledAnimations";
import { Column } from "../Column";
import { Row } from "../Row";

interface AnimationProps {
  isInView?: boolean;
}
export const AnimationBox = styled(Box)`
  border-top: 4px solid;
  border-bottom: 4px solid;
  border-image: initial;
  animation: ${shimmerAnimation} 2s infinite ease-in-out;
  border-radius: 8px;
`;

export const AnimatedColumn = styled(Column)<AnimationProps>`
  animation: ${(props) =>
    props.isInView
      ? css`
          ${fadeUpFromLeft} 1.5s ease-out
        `
      : "none"};
`;

export const AnimatedRow = styled(Row)<AnimationProps>`
  animation: ${(props) =>
    props.isInView
      ? css`
          ${fadeUpFromRight} 1.5s ease-out
        `
      : "none"};
`;

export const TypewriterText = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;
  animation: ${typewriter} 4s steps(40, end) infinite,
    ${blinkCaret} 500ms steps(40, end) infinite;
`;
