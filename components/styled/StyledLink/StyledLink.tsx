"use client";
import styled from "styled-components";
import { typography, TypographyProps, color, ColorProps } from "styled-system";

type StyledLinkProps = TypographyProps &
  ColorProps & {
    $UnderlineColor?: string;
  };

export const StyledLink = styled.a<StyledLinkProps>`
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  font-family: "DMSansBold";
  font-size: 0.9;
  // border-top: 2px solid black;
  // border-bottom: 2px solid black;
  font-weight: 400;
  color: black;
  ${typography}
  ${color}
  position: relative;
  transition: all 0.3s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${(props) =>
      props.$UnderlineColor === "primary"
        ? "#5809A3"
        : props.$UnderlineColor === "secondary"
        ? "#D93922"
        : "white"};
    transition: width 0.2s ease-in-out;
  }

  &:hover:before {
    width: 100%;
  }
`;
