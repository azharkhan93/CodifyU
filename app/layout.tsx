"use client";
import {  Box, GlobalStyle, } from "@/components";
import "./globals.css";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";
import { ModalProvider } from "@/contexts";
import "aos/dist/aos.css";
import AOS from "aos";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [children]);
 

  return (
    <html lang="en">
      <Head>
        <title>codeFyU</title> 
        <meta name="description" content="one stop for all sofware solutions" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" /> 
      </Head>
      <body>
        <AppThemeProvider>
         
          <ModalProvider>
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <Navbar />
            <GlobalStyle />
            <Box
            px={["m", "l"]}
            >
            {children}
            </Box>
            <Footer />
            </StyleSheetManager>
            </ModalProvider>
           
         
        </AppThemeProvider>
      </body>
    </html>
  );
}


