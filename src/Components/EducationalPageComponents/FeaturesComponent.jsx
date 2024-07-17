import { Box, Typography } from "@mui/material";
import React from "react";

import pic1 from "../../Assets/Pics/pic1.png";
import pic2 from "../../Assets/Pics/pic2.png";
import pic3 from "../../Assets/Pics/pic3.png";

const FeaturesComponent = () => {
  return (
    <Box>
      {/* 24/7 Personalized Support */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ display: "flex", gap: 5, height: "450px", paddingTop: "30px" }}
        >
          {/* image */}
          <Box>
            <img
              src={pic1}
              alt="24/7 Personalized Support Pic"
              style={{ width: "400px", height: "400px" }}
            />
          </Box>

          {/* text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* number circle */}
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  border: "1.5px solid #6366F1",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                }}
              >
                01
              </Box>

              <Typography
                style={{ fontWeight: 500, fontSize: "28px", color: "#000080" }}
              >
                24/7 Personalized Support
              </Typography>
            </Box>

            <Typography
              style={{
                width: "550px",
                marginLeft: "80px",
                color: "#4E5561",
                fontSize: "20px",
              }}
            >
              AI Helper provides personalized support anytime, effectively
              addressing both general syllabus queries and complex topic
              explanations.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Inbuilt Plagiarism Detection */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ display: "flex", gap: 5, height: "450px", paddingTop: "30px" }}
        >
          {/* text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* number circle */}
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  border: "1.5px solid #6366F1",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                }}
              >
                02
              </Box>

              <Typography
                style={{ fontWeight: 500, fontSize: "28px", color: "#000080" }}
              >
                Inbuilt Plagiarism Detection
              </Typography>
            </Box>

            <Typography
              style={{
                width: "550px",
                marginLeft: "80px",
                color: "#4E5561",
                fontSize: "20px",
              }}
            >
              Ensure academic integrity by providing guidance based strictly on
              course content. Flag potential incidents of cheating and
              plagiarism.
            </Typography>
          </Box>

          {/* image */}
          <Box>
            <img
              src={pic2}
              alt="24/7 Personalized Support Pic"
              style={{ width: "400px", height: "400px" }}
            />
          </Box>
        </Box>
      </Box>

      {/* Saves Instructor Time for What Really Matters */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ display: "flex", gap: 5, height: "450px", paddingTop: "30px" }}
        >
          {/* image */}
          <Box>
            <img
              src={pic3}
              alt="24/7 Personalized Support Pic"
              style={{ width: "400px", height: "400px" }}
            />
          </Box>

          {/* text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* number circle */}
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  border: "1.5px solid #6366F1",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                }}
              >
                03
              </Box>

              <Typography
                style={{ fontWeight: 500, fontSize: "28px", color: "#000080" }}
              >
                Saves Instructor Time for What Really Matters
              </Typography>
            </Box>

            <Typography
              style={{
                width: "550px",
                marginLeft: "80px",
                color: "#4E5561",
                fontSize: "20px",
              }}
            >
              We save time for instructors by addressing repeated student
              questions with tailored learning tools like summaries, notes and
              flashcards.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturesComponent;
