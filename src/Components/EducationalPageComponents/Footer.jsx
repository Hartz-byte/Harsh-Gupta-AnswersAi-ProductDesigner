import { Box, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";

import Logo from "../../Assets/Icons/logo.svg";

const Footer = () => {
  const isMobile = useMediaQuery(`(max-width: 600px)`);

  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: { xs: "30px", md: "40px 120px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
      }}
    >
      {/* column 1 */}
      <Box>
        {/* logo and name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          <img src={Logo} alt="logo" />
          <Typography
            variant="h6"
            ml={2}
            color={"white"}
            fontWeight={700}
            fontSize={28}
          >
            Answers<span style={{ color: "#6366F1" }}>Ai</span>
          </Typography>
        </Box>

        {/* social links */}
        <Box>
          <img
            src="https://answersai.com/static/media/tiktok-icon.d8ebed791f4ce332ed65d7c7a2de1a6d.svg"
            style={{ cursor: "pointer" }}
          />
          <img
            src="https://answersai.com/static/media/insta-icon.8fe48e0fad48013f13389d1ebb1cedd0.svg"
            style={{ cursor: "pointer" }}
          />
        </Box>

        {/* text */}
        <Typography
          style={{
            color: "white",
            width: isMobile ? "350px" : "400px",
            fontSize: "12px",
            marginTop: "20px",
            fontWeight: 300,
            paddingBottom: isMobile ? "30px" : "",
          }}
        >
          AnswersAi, Corp. does not condone plagiarism or academic dishonesty.
          If our services have been misused, we reserve the right to take
          actions to maintain the integrity of our platform, including but not
          limited to co-operating with academic institutions and suspending
          accounts.
        </Typography>

        {/* bottom text */}
        {!isMobile ? (
          <Typography
            style={{
              color: "#6B7280",
              width: "400px",
              fontSize: "12px",
              marginTop: "60px",
            }}
          >
            © 2024 AnswersAi, Corp. All Rights Reserved.
          </Typography>
        ) : null}
      </Box>

      {/* column 2, 3, and 4 */}
      <Box sx={{ display: "flex", gap: 8 }}>
        {/* column 2 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography style={{ color: "white", fontWeight: "bold" }}>
            MORE
          </Typography>

          <Typography
            style={{ color: "#9CA3AF", fontWeight: "bold", cursor: "pointer" }}
          >
            For Institutions
          </Typography>

          <Typography
            style={{ color: "#9CA3AF", fontWeight: "bold", cursor: "pointer" }}
          >
            Home
          </Typography>
        </Box>

        {/* column 3 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography style={{ color: "white", fontWeight: "bold" }}>
            STUDENTS
          </Typography>

          <Typography
            style={{ color: "#9CA3AF", fontWeight: "bold", cursor: "pointer" }}
          >
            FAQ
          </Typography>

          <Typography
            style={{ color: "#9CA3AF", fontWeight: "bold", cursor: "pointer" }}
          >
            Contact Us
          </Typography>
        </Box>

        {/* column 4 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography style={{ color: "white", fontWeight: "bold" }}>
            LEGAL
          </Typography>

          <Typography
            style={{
              color: "#9CA3AF",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            style={{ color: "#9CA3AF", fontWeight: "bold", cursor: "pointer" }}
          >
            Terms & Conditions
          </Typography>

          <Typography
            style={{ color: "#9CA3AF", fontWeight: "bold", cursor: "pointer" }}
          >
            Copyright Policy
          </Typography>
        </Box>
      </Box>

      {/* bottom text */}
      {isMobile ? (
        <Typography
          style={{
            color: "#6B7280",
            width: "400px",
            fontSize: "12px",
            marginTop: "60px",
          }}
        >
          © 2024 AnswersAi, Corp. All Rights Reserved.
        </Typography>
      ) : null}
    </Box>
  );
};

export default Footer;
