"use client";
import { BASE_COLORS } from "@/theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "DMSansRegular";
        src: url('/assets/fonts/DMSans-Regular.ttf') format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'DMSansSemiBold';
        src: url('/assets/fonts/DMSans-SemiBold.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'DMSansBold';
        src: url('/assets/fonts/DMSans-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    * {
    font-family: "DMSansRegular"; 
    }

`;


