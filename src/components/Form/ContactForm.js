import { Box, Button } from "@mui/material";
import React from "react";

export default function ContactForm() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* button group */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <Button variant="contained">VIA SUPPORT CHAT</Button>
          <Button variant="contained">VIA CALL</Button>
        </Box>
        <Box>
          <Button variant="outlined">VIA EMAIL FORM</Button>
        </Box>
      </Box>
    </>
  );
}
