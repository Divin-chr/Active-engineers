import CountUpStat from "../../components/effects/CountUpStat";
import PageHero from "../../components/effects/PageHero";
import ProjectsExplorer from "../../components/ProjectsExplorer";

export const metadata = {
  title: "Projects | Active Engineering Group",
  description:
    "A snapshot of Active Engineering Group's national footprint and recent projects across Rwanda, including roads, bridges, street lighting, and water supply systems.",
};

const PROJECTS = [
  {
    image: "/assets/img/huye-city-roads.png",
    alt: "Bridge works",
    category: "road",
    categoryLabel: "Road Construction",
    title: "HUYE CITY ROADS (RUDP PHASE 3)",
    description: "Detailed design of Rwabuye-Mbazi road (5 km) and Tumba (1 km).",
    location: "Huye City",
    metric: "6 km",
  },
  {
    image: "/assets/img/lighting.JPG",
    alt: "Street lighting infrastructure",
    category: "urban",
    categoryLabel: "Street Lighting",
    title: "NYARUGURU STREET LIGHTING",
    description: "Detailed design for the Huye–Kibeho corridor street lighting.",
    location: "Nyaruguru",
    metric: "12 km",
  },
  {
    image: "/assets/img/mpazi-settlement.jpg",
    alt: "Mpazi informal settlement upgrading site",
    category: "urban",
    categoryLabel: "Settlement Upgrading",
    title: "MPAZI INFORMAL SETTLEMENT UPGRADING",
    description:
      "Study and detailed design of road (8 km), footpath (9.4 km), market and football ground.",
    location: "Nyarugenge, Kigali",
    metric: "2023",
  },
  {
    image: "/assets/img/agatobwe-bridge.jpg",
    alt: "Agatobwe double span bridge",
    category: "bridge",
    categoryLabel: "Bridge",
    title: "AGATOBWE DOUBLE SPAN BRIDGE (60 m)",
    description: "Study and detailed design.",
    location: "Agatobwe, Nyaruguru",
    metric: "60 m span",
  },
  {
    image: "/assets/img/giswi-road.jpg",
    alt: "Giswi rural road",
    category: "road",
    categoryLabel: "Road Design",
    title: "GISWI–RUGOGWE–KABERE–NSHIRI–RUHERU Road",
    description: "Detailed design (FR4 21+600 km).",
    location: "Nyaruguru",
    metric: "FR4 21+600 km",
  },
  {
    image: "/assets/img/ngororero-water-supply.jpg",
    alt: "Ngororero water supply system",
    category: "water",
    categoryLabel: "Water Supply",
    title: "NGORORERO WATER SUPPLY SYSTEMS",
    description: "Topographic survey for design review and supervision (168.4 km).",
    location: "Ngororero",
    metric: "168.4 km",
  },
  {
    image: "/assets/img/sake-water-supply.jpg",
    alt: "Sake water supply pipeline works",
    category: "water",
    categoryLabel: "Water Supply",
    title: "SAKE WATER SUPPLY SYSTEM – RWANDA",
    description: "Topographical surveys for feasibility, detailed designs and supervision (487 km).",
    location: "Sake, Ngoma",
    metric: "487 km",
  },
  {
    image: "/assets/img/rwempasha.jpeg",
    alt: "Asphalt paving works on the Nyagatare-Rwempasha road",
    category: "road",
    categoryLabel: "Road Construction",
    title: "NYAGATARE–RWEMPASHA ROAD",
    description: "Feasibility studies, preliminary and detailed design of the road.",
    location: "Nyagatare",
    metric: "2025",
  },
  {
    image: "/assets/img/kibeho.jpg",
    alt: "Road junction at Kibeho",
    category: "road",
    categoryLabel: "Mountain Road",
    title: "KIBEHO ROUNDABOUT",
    description: "Study and detailed design of the Kibeho roundabout.",
    location: "Kibeho, Nyaruguru",
    metric: null,
  },
  {
    image: "/assets/img/rwacof-parking.jpg",
    alt: "Paved parking area under construction",
    category: "urban",
    categoryLabel: "Parking Design",
    title: "PARKING AT RWACOF",
    description: "Consultancy service for design of parking at RWACOF — detailed design report.",
    location: "Kicukiro, Kigali",
    metric: null,
  },
  {
    image: "/assets/img/survey.jpg",
    alt: "Survey team with total station on the Migina Dyke corridor",
    category: "survey",
    categoryLabel: "Surveying",
    title: "MIGINA DYKE ROAD MAINTENANCE",
    description:
      "Feasibility study and detailed design for maintenance of the Migina Dyke Road in Bugesera District.",
    location: "Bugesera",
    metric: null,
  },
];

const STATS = [
  { value: 11, suffix: "", label: "Flagship Projects" },
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

        <div className="section">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our work by discipline, from road design and bridges to water supply and land surveying.
          </p>
          <ProjectsExplorer projects={PROJECTS} />
        </div>
      </div>
    </main>
  );
}
