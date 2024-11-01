import { Box, Typography } from "@mui/material";
import React from "react";

export default function Title() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          textAlign: "left",
          flexDirection: "column",
          padding: "50px",
          boxSizing: "border-box",
          margin: "auto",
          width: "80%",
        }}
      >
        <Typography sx={{ fontWeight: "800", fontSize: "48px" }}>
          CONTACT US
        </Typography>
        <Typography
          sx={{ fontWeight: "600", fontSize: "16px", color: "#5A5959" }}
        >
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </Typography>
      </Box>
    </>
  );
}
