import { Box, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";

import FeaturesComponent from "./FeaturesComponent";

const FeaturesSection = () => {
  const isMobile = useMediaQuery(`(max-width: 600px)`);

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
          padding: "30px 0",
        }}
      >
        <Typography variant={isMobile ? "h5" : "h3"} textAlign="center">
          Leverage the power of
          <br />
          <span style={{ color: "#4B5563" }}>
            ClassMate by AnswersAi to provide tailored
          </span>
          <br />
          <b>educational support</b>
        </Typography>
      </Box>

      {/* features */}
      <FeaturesComponent />
    </Box>
  );
};

export default FeaturesSection;
