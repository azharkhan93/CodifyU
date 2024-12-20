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
        <title>codefyU - Seamless Tech Solutions That Scale</title>
        <meta name="description" content="one stop for all software solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
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
