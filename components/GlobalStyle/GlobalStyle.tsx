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
    @font-face {
        font-family: 'RobotoBold';
        src: url('/assets/fonts/Roboto-Bold.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'RobotoRegular';
        src: url('/assets/fonts/Roboto-Regular.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'RobotoMedium';
        src: url('/assets/fonts/Roboto-Medium.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'RobotoBlack';
        src: url('/assets/fonts/Roboto-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }


    @font-face {
        font-family: 'MontserratExtraBold';
        src: url('/assets/fonts/Montserrat-ExtraBold.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'MontserratRegular';
        src: url('/assets/fonts/Montserrat-Regular.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'MontserratMedium';
        src: url('/assets/fonts/Montserrat-Medium.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'PlayfairBlack';
        src: url('/assets/fonts/PlayfairDisplaySC-Black.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'PlayfairBold';
        src: url('/assets/fonts/PlayfairDisplaySC-Bold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: "PlayfairRegular";
        src: url('/assets/fonts/PlayfairDisplay-Regular.ttf') format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
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
    font-family: "DMSansRegular"; 
    font-family: 'Quicksand', sans-serif;
    }

`;
