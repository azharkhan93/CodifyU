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
  width,
  WidthProps,
} from "styled-system";

type InputBoxProps = BackgroundProps &
  BorderProps &
  LayoutProps &
  ThemedSpaceProps &
  ThemedColorProps &
  WidthProps;

export const StyledInputBox = styled.input.withConfig(
  StyledWithConfig
)<InputBoxProps>`
  ${width}
  height: 40px;
  outline: none;
  font-family: ComfortaaRegular;
  font-size: 15px;
  padding-left: ${BASE_SPACING.l}px;
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
  &::-webkit-file-upload-button {
    background-color: ${BASE_COLORS.primary};
    color: ${BASE_COLORS.white};
    cursor: pointer;
    height: 100%;
    border: none;
    border-radius: 5px;
    margin-right: ${BASE_SPACING.l}px;
    padding-left: ${BASE_SPACING.l}px;
    padding-right: ${BASE_SPACING.l}px;
    content: "";
  }
`;
