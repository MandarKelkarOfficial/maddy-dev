// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import RootLayout from "./layout"; // Import your layout
import './App.css';
import '../src/styles/tailwind.css';
import CertificateList from "./components/homepage/Certificate/CertificateList";
// import ContactForm from "./components/homepage/contact/ContactForm";
import '../src/styles/css/sidebarend.css';

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <CertificateList/>
        {/* <ContactForm/> */}
        <ContactSection />
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
