import React from "react";
import MainSection from "./containers/main-section";
import ExperienceSection from "./containers/experience-section";
import SkillsSection from "./containers/skills-section";
import ContactSection from "./containers/contact-section";
import Footer from "./containers/footer";

import { ContactsProvider } from "./providers/contact.provider";
function Main() {
  return (
    <>
      <ContactsProvider>
        <MainSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </ContactsProvider>
    </>
  );
}

export default Main;
