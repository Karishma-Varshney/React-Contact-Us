import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import "../../App.css";
import MessageIcon from "@mui/icons-material/Message";

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
          <Button className="btn--contained" variant="contained">
            <IconButton>
              <MessageIcon />
            </IconButton>
            VIA SUPPORT CHAT
          </Button>
          <Button className="btn--contained" variant="contained">
            VIA CALL
          </Button>
        </Box>
        <Box>
          <Button className="btn--outlined" variant="outlined">
            VIA EMAIL FORM
          </Button>
        </Box>
      </Box>
    </>
  );
}
