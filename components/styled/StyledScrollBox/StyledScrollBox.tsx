"use client"
import styled from "styled-components";
import { Box } from "../Box";

export const StyledScrollBox = styled(Box)`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #eae9f; /* Color of the scrollbar track */
  }

  &::-webkit-scrollbar-thumb {
    background: #fb9c42; /* Color of the scrollbar thumb */
    border-radius: 3px; /* Rounded corners of the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #fb9c42; /* Color of the scrollbar thumb on hover */
  }
`;