import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import React from "react";

import Logo from "../../Assets/Icons/logo.svg";

const Header = () => {
  return (
    <AppBar
      // sx={{
      //   background: "linear-gradient(to bottom, #ebf4f5 0%, #b5c6e0 100%)",
      // }}
      sx={{ backgroundColor: "#ebf4f5", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        {/* logo and name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "110px",
          }}
        >
          <img src={Logo} alt="logo" />
          <Typography
            variant="h6"
            ml={2}
            color={"black"}
            fontWeight={700}
            fontSize={28}
          >
            Answers<span style={{ color: "#6366F1" }}>Ai</span>
          </Typography>
        </Box>

        {/* navbar buttons */}
        <Box sx={{ display: "flex", gap: 5 }}>
          <Button
            style={{
              textTransform: "none",
              color: "black",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Home
          </Button>
          <Button
            style={{
              textTransform: "none",
              color: "black",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            About
          </Button>
          <Button
            style={{
              textTransform: "none",
              color: "black",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Solutions
          </Button>
          <Button
            style={{
              textTransform: "none",
              color: "white",
              fontSize: "16px",
              fontWeight: "400",
              border: "2px solid #6366F1",
              padding: "10px 30px",
              backgroundColor: "#02010C",
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
