import React from "react";
import { Box } from "@mui/material";

import Header from "../Components/EducationalPageComponents/Header";
import HeroSection from "../Components/EducationalPageComponents/HeroSection";
import FeaturesSection from "../Components/EducationalPageComponents/FeaturesSection";
import Testimonials from "../Components/EducationalPageComponents/Testimonials";
import AboutSection from "../Components/EducationalPageComponents/AboutSection";
import Footer from "../Components/EducationalPageComponents/Footer";

const EducationalPage = () => {
  return (
    <Box>
      {/* Content for Business Branding Page */}
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <AboutSection />
      <Footer />
    </Box>
  );
};

export default EducationalPage;
