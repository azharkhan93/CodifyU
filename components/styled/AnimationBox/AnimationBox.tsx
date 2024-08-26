"use client"
import styled, { keyframes, css } from "styled-components";
import { Box } from "../Box";
import {
  fadeUp,
  fadeUpFromLeft,
  fadeUpFromRight,
  shimmerAnimation,
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

// border-top: 4px solid transparent;
// border-bottom: 4px solid transparent;
// border-radius: 8px;
// background: linear-gradient(
//   to right,
//   white 25%,
//   black 50%,
//   white 75%
// );
// background-size: 200% 100%;
// animation: ${shimmerWave} 3s ease-in-out infinite;
