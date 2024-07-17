import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import React from "react";

import Logo from "../../Assets/Icons/logo.svg";

const Header = () => {
  return (
    <AppBar
      sx={{ backgroundColor: "#ebf4f5", boxShadow: "none", position: "static" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* logo and name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "110px",
            cursor: "pointer",
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
            sx={{
              textTransform: "none",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              border: "2px solid #6366F1",
              padding: "10px 30px",
              backgroundColor: "#02010C",
              "&:hover": {
                border: "2px solid #6366F1",
                backgroundColor: "#02010C",
              },
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
