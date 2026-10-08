import { PiGithubLogoLight, PiLinkedinLogoLight } from "react-icons/pi";

// Single source of truth for every contact / social link on the site.
// Change a link here and it updates the navbar, footer and contact section.

export const email = "singhgaurav07004@gmail.com";

export const socialLinks = [
  {
    label: "Github",
    url: "https://github.com/Gaurav07004",
    icon: PiGithubLogoLight,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gaurav-singh-668584237/",
    icon: PiLinkedinLogoLight,
  },
];

export const linkedInUrl = socialLinks.find((l) => l.label === "LinkedIn").url;
