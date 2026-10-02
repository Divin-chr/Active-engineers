import { StaggerGroup, StaggerItem } from "../../components/Stagger";
import PageHero from "../../components/effects/PageHero";
import SpotlightCard from "../../components/effects/SpotlightCard";
import UnderlineHeading from "../../components/effects/UnderlineHeading";
import TotalStation from "../../components/icons/TotalStation";
import {
  MapPin,
  HardHat,
  Satellite,
  Waves,
  Map,
  Route,
  Link2,
  ClipboardCheck,
  Search,
  TrendingUp,
  Droplet,
  Plane,
  CloudRain,
  Handshake,
} from "lucide-react";

export const metadata = {
  title: "Services | Active Engineering Group",
  description:
    "Road and bridge design, structural appraisal, site inspections, feasibility studies, surveying and mapping, water supply systems, and more from Active Engineering Group.",
};

const SURVEY_SERVICES = [
  {
    icon: MapPin,
    title: "1. Cadastral (Land) Surveying",
    description:
      "We carry out land boundary surveys to define, measure, and document property limits. These activities support land registration, land subdivision, and resolution of boundary disputes.",
    features: [
      "Land boundary surveys and demarcation",
      "Property boundary definition and measurement",
      "Cadastral plan preparation",
      "Legal survey reports for land administration",
      "Land subdivision services",
      "Boundary dispute resolution",
    ],
  },
  {
    icon: TotalStation,
    title: "2. Topographical Surveying",
    description:
      "Mapping natural and man-made features of land, including elevations and contours. These surveys provide essential data for project planning, road design, quarry development, and environmental studies.",
    features: [
      "Contour mapping and elevation surveys",
      "Natural and man-made feature mapping",
      "Site analysis for development projects",
      "Road and infrastructure design support",
      "Quarry development surveys",
      "Tourism facility planning surveys",
    ],
  },
  {
    icon: HardHat,
    title: "3. Engineering & Construction Surveying",
    description:
      "Supports construction projects through setting-out works, leveling, alignment of roads, buildings, and other structures. Ensures designs are accurately transferred from drawings to the ground.",
    features: [
      "Construction site setting-out",
      "Building alignment and leveling",
      "Road and infrastructure alignment",
      "As-built surveys for progress monitoring",
      "Quantity calculations and verification",
      "Construction quality control surveys",
    ],
  },
  {
    icon: Satellite,
    title: "4. Geodetic & Control Surveys",
    description:
      "Establishment of precise horizontal and vertical control points using modern GNSS and total station instruments. These control networks ensure accuracy for large-scale mapping and engineering projects.",
    features: [
      "Horizontal and vertical control point establishment",
      "GNSS and total station surveys",
      "Geodetic network design and implementation",
      "Coordinate system transformation",
      "Large-scale mapping control",
      "Precision survey network development",
    ],
  },
  {
    icon: Waves,
    title: "5. Bathymetric Surveys",
    description:
      "Measurement and mapping of depth and underwater features of water bodies using echo sounders (sonar) combined with GPS/GNSS equipment. Essential for water resource management and flood studies.",
    features: [
      "Lake, river, and reservoir depth mapping",
      "Underwater feature detection and mapping",
      "Dam and bridge project support",
      "Flood study and analysis",
      "Bathymetric maps and digital models",
      "Water resource management surveys",
    ],
  },
  {
    icon: Map,
    title: "6. GIS & Mapping Services",
    description:
      "Utilizing GIS and digital mapping techniques to manage spatial data, produce maps, and support decision-making. Applied in urban planning, land management, and infrastructure development.",
    features: [
      "GIS data management and analysis",
      "Digital mapping and cartography",
      "Spatial database development",
      "Urban planning support",
      "Land management systems",
      "Infrastructure development mapping",
    ],
  },
];

const SERVICES = [
  {
    icon: Route,
    title: "ROAD DESIGN",
    description: "Highway alignments, intersections, roundabouts, drainage and pavement design.",
  },
  {
    icon: Link2,
    title: "BRIDGE DESIGN",
    description: "Concept, analysis, detailed design and checking for steel and concrete bridges.",
  },
  {
    icon: ClipboardCheck,
    title: "STRUCTURAL APPRAISAL & AUDIT",
    description: "Condition assessment, safety audits, peer reviews and retrofit recommendations.",
  },
  {
    icon: Search,
    title: "STRUCTURAL PEER REVIEWS",
    description: "Independent verification to optimize safety, cost and constructability.",
  },
  {
    icon: HardHat,
    title: "SITE INSPECTIONS",
    description: "Quality compliance checks, supervision and reporting throughout construction.",
  },
  {
    icon: TrendingUp,
    title: "FEASIBILITY & SITE ANALYSIS",
    description: "Techno-economic studies, environmental and social considerations.",
  },
  {
    icon: Map,
    title: "TOPOGRAPHICAL SURVEY & MAPPING",
    description: "High-accuracy surveys using GNSS, total station, and UAV where applicable.",
  },
  {
    icon: Droplet,
    title: "WSS SURVEY & DESIGN",
    description: "Water Supply System surveys and designs for urban and rural schemes.",
  },
  {
    icon: Plane,
    title: "AIRPORT WGS84 SURVEY",
    description: "Precise geodetic control in WGS84 for airport facilities and runways.",
  },
  {
    icon: CloudRain,
    title: "STORMWATER & SEWER MANAGEMENT",
    description: "Hydraulic analysis and site infrastructure design for resilience.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        media="https://ypixm0j9cjnaw0q9.public.blob.vercel-storage.com/videos/foundation-of-the-pillars.mp4"
        mediaType="video"
        effect="kenburns"
      >
        <h1 className="display">OUR SERVICES</h1>
        <p className="lead">
          We cover the full spectrum of engineering requirements from concept to delivery, with
          strict QA/QC and value engineering.
        </p>
      </PageHero>

      <div className="container section">
        <UnderlineHeading className="section-title">TOPOGRAPHICAL SURVEY SERVICES</UnderlineHeading>
        <p className="section-subtitle">
          Professional surveying services across several domains to support planning, design,
          construction, and land management projects.
        </p>
        <StaggerGroup className="grid-2 section">
          {SURVEY_SERVICES.map((service) => (
            <StaggerItem className="card" key={service.title} whileHover={{ y: -4 }}>
              <SpotlightCard>
                <div className="card-icon">
                  <service.icon aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <UnderlineHeading className="section-title">OTHER ENGINEERING SERVICES</UnderlineHeading>
        <p className="section-subtitle">
          Comprehensive civil engineering and project management services beyond surveying.
        </p>
        <StaggerGroup className="card-grid section">
          {SERVICES.map((service) => (
            <StaggerItem className="card" key={service.title} whileHover={{ y: -4 }}>
              <SpotlightCard>
                <div className="card-icon">
                  <service.icon aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <section
          className="section"
          style={{ background: "rgba(0,0,0,0.02)", margin: "0 -20px", padding: "48px 20px" }}
        >
          <div className="container">
            <StaggerGroup className="grid-2" style={{ alignItems: "center", gap: 48 }}>
              <StaggerItem>
                <UnderlineHeading className="section-title">
                  OUR CLIENTS & PARTNERS
                </UnderlineHeading>
                <p className="lead" style={{ marginTop: 16 }}>
                  We work collaboratively with our clients at every stage, from initial planning
                  to construction management, to deliver exceptional results that exceed
                  expectations.
                </p>
                <p>
                  Our expertise covers the full spectrum of engineering requirements, and we carry
                  out value engineering to optimize structures and maximize our clients&apos;
                  investments. At Active Engineering Group, we are committed to excellence and
                  inspiring confidence in everything we do.
                </p>
                <StaggerGroup className="values" style={{ marginTop: 24 }}>
                  <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                    <Handshake aria-hidden="true" />
                    RTDA
                  </StaggerItem>
                  <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                    <Handshake aria-hidden="true" />
                    Kigali City
                  </StaggerItem>
                  <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                    <Handshake aria-hidden="true" />
                    Powerchina
                  </StaggerItem>
                  <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                    <Handshake aria-hidden="true" />
                    Government Agencies
                  </StaggerItem>
                  <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                    <Handshake aria-hidden="true" />
                    Private Developers
                  </StaggerItem>
                  <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                    <Handshake aria-hidden="true" />
                    World Bank
                  </StaggerItem>
                  <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                    <Handshake aria-hidden="true" />
                    EUCL
                  </StaggerItem>
                  <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                    <Handshake aria-hidden="true" />
                    SWACOF
                  </StaggerItem>
                </StaggerGroup>
              </StaggerItem>
              <StaggerItem>
                <div className="card-img" style={{ margin: 0 }}>
                  <img
                    src="/client.png"
                    alt="Construction team meeting with clients"
                    style={{
                      width: "100%",
                      height: 400,
                      objectFit: "cover",
                      borderRadius: "var(--radius)",
                    }}
                  />
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>
      </div>
    </main>
  );
}
