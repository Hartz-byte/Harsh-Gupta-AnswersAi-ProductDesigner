import { Box, Typography, Button } from "@mui/material";
import React from "react";

import FeaturesComponent from "./FeaturesComponent";

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #ebf4f5 0%, #b5c6e0 100%)",
      }}
    >
      {/* head text */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          lineHeight: "60px",
          fontWeight: "500",
          fontSize: "40px",
          paddingTop: "30px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>
          Leverage the power of
          <br />
          <span style={{ color: "#4B5563" }}>
            ClassMate by AnswersAi to provide tailored
          </span>
          <br />
          <b>educational support</b>
        </h3>
      </Box>

      {/* features */}
      <FeaturesComponent />
    </Box>
  );
};

export default FeaturesSection;
