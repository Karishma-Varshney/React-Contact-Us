import { Box } from "@mui/material";
import React from "react";
import heroImg from "../assets/Images/heroImg.png";

export default function FormLayout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {/* <Form /> */}
        <img src={heroImg} alt="hero section img" />
      </Box>
    </>
  );
}
