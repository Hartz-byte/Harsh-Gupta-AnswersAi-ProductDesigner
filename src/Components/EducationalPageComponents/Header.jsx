import { AppBar, Toolbar, Typography, Box, Link, Button } from "@mui/material";
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
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

        {/* navbar options */}
        <Box sx={{ display: "flex", gap: 5 }}>
          <Link
            to=""
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Home
          </Link>
          <Link
            to=""
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            About
          </Link>
          <Link
            to=""
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Solutions
          </Link>
          <Link
            to=""
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Contact
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
