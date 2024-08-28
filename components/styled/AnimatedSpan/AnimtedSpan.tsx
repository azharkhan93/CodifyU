"use client"
import { useState, useEffect } from "react";
import { AnimatedLetter } from "../AnimationBox";

export const AnimatedSpan: React.FC = () => {
    const words = ["Digital", "Excellence", "Innovation"]; 
    const [reversedWords, setReversedWords] = useState(words);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setReversedWords((prevWords) =>
          prevWords.map((word) => word.split("").reverse().join(""))
        );
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <>
        {reversedWords.map((word, wordIndex) => (
          <span key={wordIndex} style={{ marginRight: "10px" }}>
            {word.split("").map((char, charIndex) => (
              <AnimatedLetter key={charIndex}>{char}</AnimatedLetter>
            ))}
          </span>
        ))}
      </>
    );
  };