"use client";
import { Box, CRUD } from "@/components";
import { UpdatePlatformStats } from "./components/UpdatePlatformStats";

export default function Page() {
  return (
    <Box height={"100%"} bg={"greyLight"} overflow={"auto"} p={"xxxl"}>
      <CRUD updateComponent={UpdatePlatformStats} modalWidth="40%" columnWidth={"20%"} />
    </Box>
  );
}
