"use client";
import { Box, GlobalStyle } from "@/components";
import "./globals.css";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/apolloClient";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import 'aos/dist/aos.css';  
import AOS from 'aos';
import { Navbar } from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [children]);
  // const router = useRouter();
  // useEffect(() => {
  //   if (localStorage.getItem("token") === null) {
  //     router.push("/");
  //   }
  // }, [router]);

  return (
    <html lang="en">
    <body>
      <AppThemeProvider>
        <ApolloProvider client={client}>
          <Navbar />
          <GlobalStyle />
          {children}
        </ApolloProvider>
      </AppThemeProvider>
    </body>
  </html>
      
  );
}
