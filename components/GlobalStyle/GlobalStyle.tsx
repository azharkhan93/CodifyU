"use client";
import { BASE_COLORS } from "@/theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
    @font-face {
        font-family: 'ComfortaaBold';
        src: url('/assets/fonts/Comfortaa-Bold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'ComfortaaMedium';
        src: url('/assets/fonts/Comfortaa-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: "ComfortaaRegular";
        src: url('/assets/fonts/Comfortaa-Regular.ttf') format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }



    * {
    font-family: 'Comfortaa', sans-serif;
    
}

`;
