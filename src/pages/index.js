import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Das Filter" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <InterestsSection sectionId="details" heading="BENEFITS" />
        <ProjectsSection sectionId="features" heading="PRODUCTS" />
        <AboutSection sectionId="about" heading="ACTIVATED CARBON?" />
        <ArticlesSection sectionId="articles" heading="" sources={['blog']} />
        <ContactSection sectionId="github" heading="" />
      </Page>
    </>
  );
}
