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
        <ArticlesSection sectionId="articles" heading="ARTICLES" sources={['blog']} />
        <AboutSection sectionId="about" heading="FUNCTIONALITY" />
        <InterestsSection sectionId="details" heading="KEY BENEFITS" />
        <ProjectsSection sectionId="features" heading="The Filters" />
        <ContactSection sectionId="github" heading="CONTACT" />
      </Page>
    </>
  );
}
