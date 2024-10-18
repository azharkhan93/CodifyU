"use client";
import {
  BASE_COLORS,
  BASE_SPACING,
  ThemedColorProps,
  ThemedSpaceProps,
} from "@/theme";
import { StyledWithConfig } from "@/utils/styled";
import styled from "styled-components";
import {
  background,
  layout,
  space,
  border,
  BackgroundProps,
  BorderProps,
  LayoutProps,
  color,
  WidthProps,
  width,
} from "styled-system";

type TextareaProps = BackgroundProps &
  BorderProps &
  LayoutProps &
  ThemedSpaceProps &
  ThemedColorProps &
  WidthProps;

export const StyledTextarea = styled.textarea.withConfig(
  StyledWithConfig
)<TextareaProps>`
  ${width}
  min-height: 100px;
  outline: none;
  font-family: ComfortaaRegular;
  font-size: 15px;
  padding: ${BASE_SPACING.m}px; 
  ${border}
  ${background}
  ${layout}
  ${space}
  ${color}

  &::placeholder {
    color: ${BASE_COLORS.textColor};
    font-family: ComfortaaRegular;
    font-size: 15px;
  }
`;
