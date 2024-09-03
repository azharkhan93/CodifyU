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
    @font-face {
        font-family: 'QuicksandBold';
        src: url('/assets/fonts/Quicksand-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'QuicksandSemiBold';
        src: url('/assets/fonts/Quicksand-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'QuicksandMedium';
        src: url('/assets/fonts/Quicksand-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'QuicksandRegular';
        src: url('/assets/fonts/Quicksand-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'QuicksandLight';
        src: url('/assets/fonts/Quicksand-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    * {
    font-family: "DMSansRegular"; 
    font-family: 'Quicksand', sans-serif;
    }

`;


