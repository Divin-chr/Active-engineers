import { StaggerGroup, StaggerItem } from "../../components/Stagger";
import PageHero from "../../components/effects/PageHero";
import CountUpStat from "../../components/effects/CountUpStat";

export const metadata = {
  title: "Projects | Active Engineering Group",
  description:
    "A snapshot of Active Engineering Group's national footprint and recent projects across Rwanda, including roads, bridges, street lighting, and water supply systems.",
};

const PROJECTS = [
  {
    image: "/assets/img/1.jpg",
    alt: "Bridge works",
    badge: "Huye City",
    title: "HUYE CITY ROADS (RUDP PHASE 3)",
    description: "Detailed design of Rwabuge-Mbazi road (5 km) and Tumba (1 km).",
  },
  {
    image: "/assets/img/13.jpg",
    alt: "Survey field",
    badge: "Nyaruguru",
    title: "NYARUGURU STREET LIGHTING",
    description: "Detailed design for Huye–Kibeho corridor.",
  },
  {
    image: "/assets/img/Image1 (3).jpg",
    alt: "Completed Mpazi Market building",
    badge: "Kigali",
    title: "MPAZI INFORMAL SETTLEMENT UPGRADING",
    description:
      "Study and detailed design of road (8 km), footpath (9.4 km), market and football ground.",
  },
  {
    image: "/assets/img/10.jpg",
    alt: "Bridge",
    badge: "Agatobwe",
    title: "AGATOBWE DOUBLE SPAN BRIDGE (60 m)",
    description: "Study and detailed design.",
  },
  {
    image: "/assets/img/5.jpg",
    alt: "Rural road",
    badge: "Nyaruguru",
    title: "GISWI–RUGOGWE–KABERE–NSHIRI–RUHERU Road",
    description: "Detailed design (FR4 21+600 km).",
  },
  {
    image: "/assets/img/8.jpg",
    alt: "Water supply",
    badge: "Ngororero",
    title: "NGORORERO WATER SUPPLY SYSTEMS",
    description: "Topographic survey for design review and supervision (168.4 km).",
  },
  {
    image: "/assets/img/6.jpg",
    alt: "Pipeline works",
    badge: "Sake",
    title: "SAKE WATER SUPPLY SYSTEM – RWANDA",
    description: "Topographical surveys for feasibility, detailed designs and supervision (487 km).",
  },
];

const STATS = [
  { value: 7, suffix: "", label: "Flagship Projects" },
  { value: 35, suffix: "+ km", label: "Roads Designed" },
  { value: 650, suffix: "+ km", label: "Water Systems Surveyed" },
  { value: 60, suffix: " m", label: "Longest Span Bridge" },
];

export default function ProjectsPage() {
  return (
    <main>
      <PageHero media="/assets/img/12.jpg" mediaType="image" effect="parallax-bg">
        <h1 className="display">SELECT PROJECTS</h1>
        <p className="lead">A snapshot of our national footprint and recent projects.</p>
      </PageHero>

      <div className="container section">
        <div className="stats">
          {STATS.map((stat) => (
            <CountUpStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>

        <StaggerGroup className="card-grid section">
          {PROJECTS.map((project) => (
            <StaggerItem className="card" key={project.title} whileHover={{ y: -4 }}>
              <div className="card-img">
                <img src={project.image} alt={project.alt} />
                <span className="overlay-badge">{project.badge}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </main>
  );
}
