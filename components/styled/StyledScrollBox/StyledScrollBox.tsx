"use client"
import styled from "styled-components";
import { Box } from "../Box";

export const StyledScrollBox = styled(Box)`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px; 
  }

  &::-webkit-scrollbar-track {
    background: #eae9f; 
  }

  &::-webkit-scrollbar-thumb {
    background: #fb9c42; 
    border-radius: 3px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #fb9c42;
  }
`;