import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

import { items } from "../../Utils/CarouselData";

const HeroSection = () => {
  return (
    <Box>
      {/* carousel */}
      <Box
        sx={{
          background: "linear-gradient(to bottom, #b5c6e0 80%, #ebf4f5 100%)",
        }}
      >
        <Carousel>
          {items.map((item, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "500px",
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                }}
              />

              <Box
                position="absolute"
                bottom={50}
                left={30}
                display="flex"
                flexDirection="column"
                gap={3}
                width="50vw"
              >
                <Typography variant="h3" color="black" fontWeight={"bold"}>
                  {item.title}
                </Typography>
                <Typography variant="h6" color="white" zIndex={999}>
                  {item.description}
                </Typography>

                {/* read more button */}
                <Button
                  sx={{
                    textTransform: "none",
                    width: "200px",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    backgroundColor: "#000080",
                    "&:hover": {
                      backgroundColor: "#000080",
                    },
                  }}
                >
                  {item.btnText}
                </Button>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default HeroSection;
