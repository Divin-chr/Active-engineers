import { StaggerGroup, StaggerItem } from "../../components/Stagger";
import PageHero from "../../components/effects/PageHero";
import SpotlightCard from "../../components/effects/SpotlightCard";
import UnderlineHeading from "../../components/effects/UnderlineHeading";

export const metadata = {
  title: "Services | Active Engineering Group",
  description:
    "Road and bridge design, structural appraisal, site inspections, feasibility studies, surveying and mapping, water supply systems, and more from Active Engineering Group.",
};

const SERVICES = [
  {
    title: "ROAD DESIGN",
    description: "Highway alignments, intersections, roundabouts, drainage and pavement design.",
  },
  {
    title: "BRIDGE DESIGN",
    description: "Concept, analysis, detailed design and checking for steel and concrete bridges.",
  },
  {
    title: "STRUCTURAL APPRAISAL & AUDIT",
    description: "Condition assessment, safety audits, peer reviews and retrofit recommendations.",
  },
  {
    title: "STRUCTURAL PEER REVIEWS",
    description: "Independent verification to optimize safety, cost and constructability.",
  },
  {
    title: "SITE INSPECTIONS",
    description: "Quality compliance checks, supervision and reporting throughout construction.",
  },
  {
    title: "FEASIBILITY & SITE ANALYSIS",
    description: "Techno-economic studies, environmental and social considerations.",
  },
  {
    title: "TOPOGRAPHICAL SURVEY & MAPPING",
    description: "High-accuracy surveys using GNSS, total station, and UAV where applicable.",
  },
  {
    title: "WSS SURVEY & DESIGN",
    description: "Water Supply System surveys and designs for urban and rural schemes.",
  },
  {
    title: "AIRPORT WGS84 SURVEY",
    description: "Precise geodetic control in WGS84 for airport facilities and runways.",
  },
  {
    title: "STORMWATER & SEWER MANAGEMENT",
    description: "Hydraulic analysis and site infrastructure design for resilience.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        media="/assets/img/The foundation of the pillars of the bridge- Good tools and machinery make work easy.mp4"
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
        <StaggerGroup className="card-grid section">
          {SERVICES.map((service) => (
            <StaggerItem className="card" key={service.title} whileHover={{ y: -4 }}>
              <SpotlightCard>
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
                  <StaggerItem as="span" className="value">
                    RTDA
                  </StaggerItem>
                  <StaggerItem as="span" className="value">
                    Kigali City
                  </StaggerItem>
                  <StaggerItem as="span" className="value">
                    Powerchina
                  </StaggerItem>
                  <StaggerItem as="span" className="value">
                    Government Agencies
                  </StaggerItem>
                  <StaggerItem as="span" className="value">
                    Private Developers
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
