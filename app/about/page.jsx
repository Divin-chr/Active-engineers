import { StaggerGroup, StaggerItem } from "../../components/Stagger";
import PageHero from "../../components/effects/PageHero";
import TiltCard from "../../components/effects/TiltCard";
import Marquee from "../../components/effects/Marquee";
import { Target, Eye, ShieldCheck, Award, Leaf, Users, Lightbulb } from "lucide-react";

export const metadata = {
  title: "About | Active Engineering Group",
  description:
    "Active Engineering Group is a dynamic Civil Engineering & Project Management firm in Rwanda, delivering innovative, efficient, and sustainable engineering solutions.",
};

const TEAM = [
  {
    name: "Eng. Virgile Mugisha",
    title: "Project Manager",
    qualifications: "BSc Civil Eng, Pr. Eng (IER), PMP®, Prince2®, PgMP®",
  },
  {
    name: "Eng. Jean Bosco Nizeyimana",
    title: "Highway Engineer",
    qualifications: "BSc Civil Eng, MSc Highway Eng & Mgt, Pr. Eng (IER)",
  },
  {
    name: "Norbert Nsanzimana",
    title: "Senior Surveyor",
    qualifications: "BSc Land Surveying, Pr. Surv. (ROLS)",
  },
  {
    name: "Eng. Innocent Niyonsaba",
    title: "Structural Engineer",
    qualifications: "BSc & MSc Civil Eng, Pr. Eng (IER)",
  },
  {
    name: "IRADUKUNDA Sandrine",
    title: "Environmental & Social Specialist",
    qualifications: "Environmental Impact Assessment, Social Safeguards",
  },
  {
    name: "Harindimana Jonas",
    title: "Architect",
    qualifications: "BSc Architecture, Urban Planning, Pr. Arch",
  },
  {
    name: "Niyitegeka Dushime Hubert",
    title: "Highway Engineer",
    qualifications: "BSc Civil Eng",
  },
  {
    name: "Nsengiyumva Ibrahim",
    title: "Project Manager",
    qualifications: "BSc Civil Eng, Pr. Eng (IER)",
  },
];

const FIELD_PHOTOS = [
  { src: "/assets/img/14.jpg", alt: "Field survey team beside project vehicle" },
  { src: "/assets/img/20220921_155245.jpg", alt: "GNSS rover survey on hillside terrain" },
  { src: "/assets/img/20220921_155542.jpg", alt: "Surveyor recording GNSS coordinates" },
  { src: "/assets/img/20220921_155559.jpg", alt: "Surveyor pointing across the survey corridor" },
  { src: "/assets/img/7.jpg", alt: "Total station setup on a construction site" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        media="https://ypixm0j9cjnaw0q9.public.blob.vercel-storage.com/videos/what-is-land-surveying.mp4"
        mediaType="video"
        effect="parallax"
      >
        <h1 className="display">ABOUT US</h1>
        <p className="lead">
          A dynamic and expanding Civil Engineering & Project Management firm with over four years
          of industry experience. We provide innovative, efficient, and sustainable engineering
          solutions tailored to the unique needs of our clients.
        </p>
      </PageHero>

      <div className="container section">
        <section
          className="section"
          style={{ background: "rgba(0,0,0,0.02)", margin: "0 -20px", padding: "48px 20px" }}
        >
          <div className="container">
            <StaggerGroup className="grid-2">
              <StaggerItem className="card" whileHover={{ y: -4 }}>
                <div className="card-icon">
                  <Target aria-hidden="true" />
                </div>
                <h2 className="section-title">MISSION</h2>
                <p>
                  Deliver innovative, efficient, and sustainable engineering solutions that
                  maximize client value and community impact through excellence and rigorous
                  QA/QC procedures.
                </p>
              </StaggerItem>
              <StaggerItem className="card" whileHover={{ y: -4 }}>
                <div className="card-icon">
                  <Eye aria-hidden="true" />
                </div>
                <h2 className="section-title">VISION</h2>
                <p>
                  Inspire confidence in everything we do while shaping resilient infrastructure
                  across Rwanda and the region.
                </p>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">CORE VALUES</h2>
            <p className="section-subtitle">
              The principles that guide our work and define our commitment to excellence
            </p>
            <StaggerGroup className="values">
              <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                <ShieldCheck aria-hidden="true" /> Integrity
              </StaggerItem>
              <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                <Award aria-hidden="true" /> Excellence
              </StaggerItem>
              <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                <Leaf aria-hidden="true" /> Sustainability
              </StaggerItem>
              <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                <Users aria-hidden="true" /> Client-Centered
              </StaggerItem>
              <StaggerItem as="span" className="value" whileHover={{ y: -4 }}>
                <Lightbulb aria-hidden="true" /> Innovation
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">IN THE FIELD</h2>
          <p className="section-subtitle">
            Our survey and engineering teams on site across Rwanda — hover to pause.
          </p>
        </div>
        <Marquee items={FIELD_PHOTOS} />
      </section>

      <div className="container section">
        <section className="section">
          <h2 className="section-title">OUR TEAM</h2>
          <p className="section-subtitle">
            Highly skilled consulting engineers and planners dedicated to safety and compliance
            with local and international regulations.
          </p>
          <StaggerGroup className="grid-3">
            {TEAM.map((member) => (
              <StaggerItem className="card team-card" key={member.name} whileHover={{ y: -6 }}>
                <TiltCard>
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      member.name.replace(/^(Eng\.|QS\.)\s*/, "")
                    )}&background=0f3b4c&color=fff&size=128`}
                    alt={`Avatar for ${member.name}`}
                    className="team-photo"
                  />
                  <div className="team-name">{member.name}</div>
                  <div className="team-title">{member.title}</div>
                  <div className="team-qualifications">{member.qualifications}</div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      </div>
    </main>
  );
}
