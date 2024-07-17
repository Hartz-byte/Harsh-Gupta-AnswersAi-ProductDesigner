import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

import { testimonials } from "../../Utils/CarouselData";

const Testimonials = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #b5c6e0 80%, #ebf4f5 100%)",
        padding: "50px",
      }}
    >
      {/* head text */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <h3
          style={{
            lineHeight: "60px",
            fontWeight: "500",
            fontSize: "50px",
            color: "#4B5563",
          }}
        >
          What people say!!
        </h3>
      </Box>

      {/* carousel */}
      <Box>
        <Carousel>
          {testimonials.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: 10,
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                }}
              />

              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: "30px",
                  gap: 5,
                }}
              >
                <Typography variant="h4" color="black" fontWeight={"bold"}>
                  {item.name}
                </Typography>
                <Typography variant="h6" color="white" width="800px">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Testimonials;
