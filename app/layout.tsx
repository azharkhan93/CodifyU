"use client";
import {  GlobalStyle, Modal, ModalContent } from "@/components";
import "./globals.css";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/apolloClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import 'aos/dist/aos.css';  
import AOS from 'aos';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";
import { ModalProvider } from "@/contexts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <html lang="en">
      <Head>
        <title>CodiFyU</title> 
        <meta name="description" content="Your website description" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <body>
        <AppThemeProvider>
          <ApolloProvider client={client}>
          <ModalProvider>
            <Navbar />
            <GlobalStyle />
            {children}
            <Footer />
            </ModalProvider>
           
          </ApolloProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}


