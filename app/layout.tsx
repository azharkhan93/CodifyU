"use client";
import { GlobalStyle } from "@/components";
import "./globals.css";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";
import { ModalProvider } from "@/contexts";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
// import Template from "./template";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Head>
        <title>codefyU</title>
        <meta name="description" content="one stop for all software solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <body>
        <AppThemeProvider>
        
          <ModalProvider>
          
            <StyleSheetManager shouldForwardProp={isPropValid}>
            {/* <Template> */}
          <Navbar />
            
              
              <GlobalStyle />
                {children}
                <Footer />
            {/* </Template> */}
          
              
            </StyleSheetManager>
            
          </ModalProvider>
          
        </AppThemeProvider>
      </body>
    </html>
  );
}



