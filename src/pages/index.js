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
        <AboutSection sectionId="about" heading="FUNCTIONALITY" />
        <InterestsSection sectionId="details" heading="KEY BENEFITS" />
        <ProjectsSection sectionId="features" heading="PRODUCTS" />
        <ArticlesSection sectionId="articles" heading="ARTICLES" sources={['blog']} />
        <ContactSection sectionId="github" heading="CONTACT" />
      </Page>
    </>
  );
}
