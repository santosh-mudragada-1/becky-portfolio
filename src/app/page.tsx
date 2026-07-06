import {
  VersionFab,
  VersionProvider,
  VersionSection,
  type Version,
} from "@/components/common/version-control";
import {
  AboutEditorial,
  AboutFaq,
  AboutNotes,
  AboutSpec,
  AboutStatement,
} from "@/components/sections/about";
import {
  ContactCta,
  ContactForm,
  ContactMarquee,
  ContactPass,
  ContactSticky,
} from "@/components/sections/contact";
import {
  ExperienceBoardingPass,
  ExperienceEditorial,
  ExperienceKanban,
  ExperienceThemePark,
  ExperienceTrail,
} from "@/components/sections/experience";
import {
  HeroKinetic,
  HeroMagazine,
  HeroPoster,
  HeroSassy,
  HeroSticker,
} from "@/components/sections/hero";
import {
  HobbiesBadges,
  HobbiesEditorial,
  HobbiesMarquee,
  HobbiesMeters,
  HobbiesPinboard,
} from "@/components/sections/hobbies";
import {
  ProjectsAppStore,
  ProjectsCards,
  ProjectsEditorial,
  ProjectsFiled,
  ProjectsReceipt,
} from "@/components/sections/projects";
import {
  ToolsConfig,
  ToolsEditorial,
  ToolsMarquee,
  ToolsStickers,
  ToolsToolbox,
} from "@/components/sections/tools";

/**
 * Home. Sections build up one at a time; each ships as 5 versions you can flip
 * between with the floating switcher (bottom-right). Choices persist per section.
 */
export default function HomePage() {
  const hero: Version[] = [
    { id: "poster", name: "Big Type Poster", node: <HeroPoster /> },
    { id: "sticker", name: "Sticker Bomb", node: <HeroSticker /> },
    { id: "magazine", name: "Magazine Cover", node: <HeroMagazine /> },
    { id: "sassy", name: "Sassy Statement", node: <HeroSassy /> },
    { id: "kinetic", name: "Kinetic Marquee", node: <HeroKinetic /> },
  ];

  const experience: Version[] = [
    { id: "themepark", name: "Theme Park Map", node: <ExperienceThemePark /> },
    { id: "boarding", name: "Boarding Pass", node: <ExperienceBoardingPass /> },
    { id: "editorial", name: "Editorial", node: <ExperienceEditorial /> },
    { id: "kanban", name: "The Hat Rack", node: <ExperienceKanban /> },
    { id: "trail", name: "The Trail", node: <ExperienceTrail /> },
  ];

  const projectsList: Version[] = [
    { id: "filed", name: "Filed (grid)", node: <ProjectsFiled /> },
    { id: "appstore", name: "App Store", node: <ProjectsAppStore /> },
    { id: "receipt", name: "Receipt", node: <ProjectsReceipt /> },
    { id: "cards", name: "Trading Cards", node: <ProjectsCards /> },
    { id: "editorial", name: "Editorial", node: <ProjectsEditorial /> },
  ];

  const about: Version[] = [
    { id: "statement", name: "Statement + Portrait", node: <AboutStatement /> },
    { id: "faq", name: "FAQ", node: <AboutFaq /> },
    { id: "spec", name: "Spec Sheet", node: <AboutSpec /> },
    { id: "notes", name: "Sticky Notes", node: <AboutNotes /> },
    { id: "editorial", name: "Editorial", node: <AboutEditorial /> },
  ];

  const hobbies: Version[] = [
    { id: "badges", name: "Badges", node: <HobbiesBadges /> },
    { id: "meters", name: "Skill Meters", node: <HobbiesMeters /> },
    { id: "pinboard", name: "Pin Board", node: <HobbiesPinboard /> },
    { id: "marquee", name: "Marquee", node: <HobbiesMarquee /> },
    { id: "editorial", name: "Editorial", node: <HobbiesEditorial /> },
  ];

  const tools: Version[] = [
    { id: "toolbox", name: "Toolbox", node: <ToolsToolbox /> },
    { id: "stickers", name: "Sticker Sheet", node: <ToolsStickers /> },
    { id: "marquee", name: "Marquee", node: <ToolsMarquee /> },
    { id: "config", name: "Config File", node: <ToolsConfig /> },
    { id: "editorial", name: "Editorial", node: <ToolsEditorial /> },
  ];

  const contact: Version[] = [
    { id: "cta", name: "Big CTA", node: <ContactCta /> },
    { id: "sticky", name: "Sticky Note", node: <ContactSticky /> },
    { id: "pass", name: "Boarding Pass", node: <ContactPass /> },
    { id: "form", name: "Sarcastic Form", node: <ContactForm /> },
    { id: "marquee", name: "Marquee", node: <ContactMarquee /> },
  ];

  return (
    <VersionProvider>
      <VersionSection id="hero" label="Hero" versions={hero} />
      <VersionSection id="experience" label="Experience" versions={experience} />
      <VersionSection id="projects" label="Selected Work" versions={projectsList} />
      <VersionSection id="tools" label="Tools" versions={tools} />
      <VersionSection id="about" label="About" versions={about} />
      <VersionSection id="hobbies" label="Hobbies" versions={hobbies} />
      <VersionSection id="contact" label="Contact" versions={contact} />
      <VersionFab />
    </VersionProvider>
  );
}
