import { Box, Typography } from "@mui/material";
import React from "react";

const AboutSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #ebf4f5 0%, #b5c6e0 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          lineHeight: "60px",
          fontWeight: "500",
          fontSize: "50px",
          color: "#4B5563",
        }}
      >
        AnswersAi Overview
      </h3>
      <Typography width={"70%"} fontSize={"18px"}>
        AnswersAi is an AI-powered solution to help students get instant
        explanations via our mobile or desktop platform. From features like
        Lecture Mode and Photo Solve to Chat Bot on our app, use our multi modal
        solutions to personalize learning.
      </Typography>

      <h3
        style={{
          lineHeight: "60px",
          fontWeight: "500",
          fontSize: "50px",
          color: "#4B5563",
        }}
      >
        Our Vision
      </h3>
      <Typography width={"70%"} fontSize={"18px"} pb={5}>
        AI-based Q&A platform for students. We provide answers for various
        topics and subjects.
      </Typography>
    </Box>
  );
};

export default AboutSection;
