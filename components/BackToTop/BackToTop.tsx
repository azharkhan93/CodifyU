"use client";
import React, { useEffect, useState } from "react";
import { Box } from "../styled";
import { FaArrowUp } from "react-icons/fa";

interface BackToTopProps {
  onClick?: () => void;
}

export const BackToTop: React.FC<BackToTopProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible ? ( 
        <Box
          onClick={scrollToTop}
          borderRadius={"circle"}
          py={"l"}
          px={"l"}
          bg={"textColor"}
          position={"fixed"}
          bottom={"5px"}
          right={"10px"}
          zIndex={999}
          style={{
            cursor: "pointer",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <FaArrowUp size={25} fill="#eae9fd" />
        </Box>
      ):null}
    </>
  );
};


