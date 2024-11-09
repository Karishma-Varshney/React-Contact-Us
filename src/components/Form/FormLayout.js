import { Box } from "@mui/material";
import React from "react";
import heroImg from "../../assets/Images/heroImg.png";
import ContactForm from "./ContactForm";

export default function FormLayout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "80%",
          // margin: "auto",
        }}
      >
        {/* contact form content  */}
        <ContactForm />
        <img src={heroImg} alt="hero section img" />
      </Box>
    </>
  );
}
