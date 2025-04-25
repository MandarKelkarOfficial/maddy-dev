import blockchaincer1 from "../../assets/pdfs/MAIN.pdf";
import blockchaincer2 from "../../assets/pdfs/c1.pdf";
import blockchaincer3 from "../../assets/pdfs/c2.pdf";
import compNetSec from "../../assets/pdfs/Computer_Network_security.pdf";
import cyberComp from "../../assets/pdfs/CybersecurityC4.pdf";
import encryptDecrypt from "../../assets/pdfs/Encrypt_decrypt.pdf";
import gcloudTour from "../../assets/pdfs/Google_Cloud_tour.pdf";
import csToolsAttacks from "../../assets/pdfs/Introduction_to_Cybersecurity_Tools_and_Cyber_attacks.pdf";
import introDocker from "../../assets/pdfs/Introduction_to_Docker.pdf";
import cryptoAssets from "../../assets/pdfs/c3.pdf";
// placeholder cover image for PDFs
// import pdfPlaceholder from "../../assets/images/pdf-placeholder.jpg";

export const certifications = [
  {
    id: 1,
    title: "Blockchain Specialization",
    name: "Introduction to Blockchain",
    description: "Completed a 3-course specialization demystifying blockchain technology, risks, and implementation strategies.",
    link: blockchaincer1,

    institution: "AICPA & CIMA"
  },
  {
    id: 2,
    title: "Blockchain Specialization",
    name: "Blockchain Evolution and Technology Concepts",
    description: "Completed a course on foundational blockchain constructs, benefits, and challenges.",
    link: blockchaincer2,

    institution: "AICPA & CIMA"
  },
  {
    id: 3,
    title: "Blockchain Specialization",
    name: "Blockchain Opportunities Beyond Crypto Assets",
    description: "Explored advanced blockchain applications beyond cryptocurrencies.",
    link: blockchaincer3,

    institution: "AICPA & CIMA"
  },
  {
    id: 4,
    title: "Cybersecurity",
    name: "Computer Networks and Network Security",
    description: "Learned network security fundamentals and defensive strategies.",
    link: compNetSec,

    institution: "IBM"
  },
  {
    id: 5,
    title: "Cybersecurity",
    name: "Cybersecurity Compliance Framework, Standards & Regulations",
    description: "Mastered compliance frameworks and regulatory standards for cybersecurity.",
    link: cyberComp,

    institution: "IBM"
  },
  {
    id: 6,
    title: "Programming Projects",
    name: "Encryption and Decryption using C++",
    description: "Implemented cryptographic techniques in C++ through a hands-on project.",
    link: encryptDecrypt,

    institution: "Coursera Project Network"
  },
  {
    id: 7,
    title: "Google Cloud",
    name: "A Tour of Google Cloud Hands-on Labs",
    description: "Explored Google Cloud services via practical labs.",
    link: gcloudTour,

    institution: "Google Cloud"
  },
  {
    id: 8,
    title: "Cybersecurity",
    name: "Introduction to Cybersecurity Tools & Cyberattacks",
    description: "Studied essential cybersecurity tools and common attack vectors.",
    link: csToolsAttacks,

    institution: "IBM"
  },
  {
    id: 9,
    title: "Google Cloud",
    name: "Introduction to Docker",
    description: "Learned Docker fundamentals and containerization techniques.",
    link: introDocker,

    institution: "Google Cloud"
  },
  {
    id: 10,
    title: "Blockchain Specialization",
    name: "Understanding, Using, and Securing Crypto and Digital Assets",
    description: "Gained expertise in securing digital assets and understanding risks in blockchain deployment.",
    link: cryptoAssets,

    institution: "AICPA & CIMA"
  }
];