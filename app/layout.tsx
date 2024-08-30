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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
 // Show the modal after 60 seconds and keep it open for 30 seconds
  useEffect(() => {
    const showModalTimer = setTimeout(() => {
      setIsModalOpen(true);
    }, 4000); 

    const hideModalTimer = setTimeout(() => {
      setIsModalOpen(false);
    }, 1000); // 90 seconds total (60s delay + 30s duration)

    return () => {
      clearTimeout(showModalTimer); // Cleanup show timer
      clearTimeout(hideModalTimer); // Cleanup hide timer
    };
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
            <Navbar />
            <GlobalStyle />
            {children}
            <Footer />
            <Modal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              component={ModalContent} 
            />
          </ApolloProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}


