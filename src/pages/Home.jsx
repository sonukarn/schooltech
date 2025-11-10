import React from "react";
import HeroSlider from "../sections/HeroSlider";
import FeatureSection from "../sections/FeatureSection";
import AboutSection from "../sections/AboutSection";
import StatsSection from "../sections/StatsSection";
import CoursesSection from "../sections/CoursesSection";
import LatestVideoSection from "../sections/LatestVideoSection";
import TeachersSection from "../sections/TeachersSection";
import WhyChooseUs from "../sections/WhyChooseUs";
import PhotoGallery from "../sections/PhotoGallery";
import OfferSection from "../sections/OfferSection";
import UpcomingEvents from "../sections/UpcomingEvents";
import SkillsSection from "../sections/SkillsSection";
import DepartmentSection from "../sections/DepartmentSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import BlogSection from "../sections/BlogSection";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <FeatureSection />
      <AboutSection />
      <StatsSection />
      <CoursesSection />
      <LatestVideoSection />
      <TeachersSection />
      <WhyChooseUs />
      <PhotoGallery />
      <OfferSection />
      <UpcomingEvents />
      <SkillsSection />
      <DepartmentSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
};

export default Home;
