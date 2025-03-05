"use client";
import React from "react";
import { Column, GlobalStyle } from "@/components";
import "./globals.css";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";
import { ModalProvider } from "@/contexts";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { LoaderProvider } from "@/contexts/LoadingContex/LoadingContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
      <Head>
        <title>codefyU - Seamless Tech Solutions That Scale</title>
        <meta name="description" content="One Stop For All Software Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:type" content="One Stop For All Software Solutions" />
        <meta property="og:title" content="codefyU" />
        <meta property="og:description" content="One Stop For All Software Solutions" />
        <meta property="og:image" content="https://www.codefyu.com/apple-touch-icon.png" />
        <meta property="og:url" content="https://www.codefyu.com/" />

        <meta name="twitter:card" content="One Stop For All Software Solutions" />
        <meta name="twitter:title" content="codefyU" />
        <meta name="twitter:description" content="One Stop For All Software Solutions" />
        <meta name="twitter:image" content="https://www.codefyu.com/apple-touch-icon.png" />
      </Head>
        {/* <title>codefyU - Seamless Tech Solutions That Scale</title>
        <meta name="description" content="One Stop For All Software Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </Head>
      <body>
        <AppThemeProvider>
          <ModalProvider>
            <LoaderProvider> 
              <StyleSheetManager shouldForwardProp={isPropValid}>
                <Navbar />
                <GlobalStyle />
                <Column px={["xl", "l"]}>
                  {children}
                </Column>
                <Footer />
              </StyleSheetManager>
            </LoaderProvider>
          </ModalProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}


{
  /* <Template> */
}
{
  /* </Template> */
}
