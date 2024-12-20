"use client";
import React, { createContext, useContext, ReactNode } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { Column } from "@/components/styled";

type SkeletonProps = {
  height?: number;
  width?: string;
  wave?: boolean;
  color?: string;
};

const SkeletonLoader = dynamic(() => import("react-skeleton-loader"), {
  ssr: false,
}) as React.ComponentType<SkeletonProps>;

const StyledSkeletonLoader = styled(SkeletonLoader)<{ color?: string }>`
  .react-skeleton-loader__wave {
    background-color: ${({ color }) => color || "#e0e0e0"};
  }
`;

const Loader = () => (
  <Column mt={"l"} width={"100%"} gap={"m"} borderRadius="m">
    <StyledSkeletonLoader height={270} width="100%" wave color="#A0A0A0" />
    <StyledSkeletonLoader height={50} width="80%" wave color="#A0A0A0" />
    <StyledSkeletonLoader height={30} width="70%" wave color="#A0A0A0" />
  </Column>
);

const LoaderContext = createContext<React.FC | undefined>(undefined);

export const LoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <LoaderContext.Provider value={Loader}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};
