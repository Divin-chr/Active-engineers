import Link from "next/link";
import Reveal from "../components/Reveal";
import { StaggerGroup, StaggerItem } from "../components/Stagger";
import HeroCanvas from "../components/three/HeroCanvas";
import { HeroIntro, HeroKicker, HeroTitle, HeroLead, HeroActions } from "../components/HeroIntro";
import CountUpStat from "../components/effects/CountUpStat";
import {
  ShieldCheck,
  Award,
  Leaf,
  Users,
  Lightbulb,
  Settings2,
  FolderKanban,
  Building2,
  Target,
  Eye,
} from "lucide-react";

const STATS = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 487, suffix: " km", label: "Water Supply Surveys" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const TESTIMONIALS = [
  {
    quote:
      "Active Engineering Group delivered exceptional value engineering that saved our project 15% in costs while maintaining the highest quality standards. Their attention to detail is remarkable.",
    author: "RTDA Representative",
    company: "Road Transport Development Agency",
  },
  {
    quote:
      "Their expertise in surveying and mapping was instrumental in the success of our water supply project. Professional team with excellent communication throughout the project lifecycle.",
    author: "Powerchina Project Manager",
    company: "Sake Water Supply System",
  },
];

export const metadata = {
  title: "Active Engineering Group | Civil Engineering & Project Management",
  description:
    "Active Engineering Group — innovative, efficient, sustainable civil engineering and project management solutions in Rwanda.",
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <HeroCanvas>
          <div className="container">
            <HeroIntro>
              <HeroKicker className="kicker">CIVIL ENGINEERING & PROJECT MANAGEMENT</HeroKicker>

              <HeroTitle
                className="display"
                style={{ fontSize: "clamp(32px, 6vw, 64px)", textAlign: "left", maxWidth: 720 }}
              >
                INNOVATIVE, EFFICIENT, AND SUSTAINABLE ENGINEERING SOLUTIONS
              </HeroTitle>

              <HeroLead className="lead" style={{ maxWidth: 560 }}>
                We are a dynamic consulting firm delivering high-standard designs, QA/QC, and
                value engineering across Rwanda and beyond.
              </HeroLead>

              <HeroActions className="hero-cta">
                <Link href="/contact" className="btn btn-accent">
                  Request a Quote
                </Link>
                <Link href="/projects" className="btn btn-primary">
                  View Projects
                </Link>
              </HeroActions>
            </HeroIntro>
          </div>
        </HeroCanvas>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <p className="section-subtitle">
            Integrity • Excellence • Sustainability • Client-Centered • Innovation
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

      <section className="section">
        <div className="container">
          <div className="stats">
            {STATS.map((stat) => (
              <CountUpStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <StaggerGroup className="grid-3">
            <StaggerItem className="card" whileHover={{ y: -4 }}>
              <div className="card-icon">
                <Settings2 aria-hidden="true" />
              </div>
              <span className="badge">What we do</span>
              <h3>OUR SERVICES</h3>
              <p>
                Road and bridge design, structural appraisal, site inspections, feasibility
                studies, topographical survey and mapping, WSS survey and design, airport WGS84
                survey, stormwater and sewer management, and more.
              </p>
              <Link href="/services" className="btn">
                Explore Services
              </Link>
            </StaggerItem>

            <StaggerItem className="card" whileHover={{ y: -4 }}>
              <div className="card-icon">
                <FolderKanban aria-hidden="true" />
              </div>
              <span className="badge">Featured</span>
              <h3>SELECTED PROJECTS</h3>
              <p>
                Mpazi Informal Settlement upgrading, Huye City asphalt road design, Nyaruguru
                street lighting, Agatobwe double span bridge, Sake Water Supply System and more.
              </p>
              <Link href="/projects" className="btn">
                See Portfolio
              </Link>
            </StaggerItem>

            <StaggerItem className="card" whileHover={{ y: -4 }}>
              <div className="card-icon">
                <Building2 aria-hidden="true" />
              </div>
              <span className="badge">Who we are</span>
              <h3>ABOUT AEG</h3>
              <p>
                Highly skilled consulting engineers and planners committed to safety,
                environmental responsibility, and compliance with local and international
                regulations.
              </p>
              <Link href="/about" className="btn">
                Learn More
              </Link>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal
            className="card"
            style={{ padding: 0, overflow: "hidden", left: 0 }}
            whileHover={{ y: -4 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            >
              <source
                src="https://ypixm0j9cjnaw0q9.public.blob.vercel-storage.com/videos/image1.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Reveal>

          <StaggerGroup className="construction-grid">
            <StaggerItem
              className="construction-box"
              style={{ backgroundImage: "url('/assets/img/Image1 (1).jpg')" }}
              whileHover={{ y: -6 }}
            >
              <div className="construction-overlay">
                <h3>ROAD CONSTRUCTION & DESIGN</h3>
                <p>
                  Expert highway engineering, intersection design, and pavement solutions for
                  urban and rural infrastructure development across Rwanda.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem
              className="construction-box"
              style={{ backgroundImage: "url('/assets/img/image1 (6).jpg')" }}
              whileHover={{ y: -6 }}
            >
              <div className="construction-overlay">
                <h3>BRIDGE ENGINEERING</h3>
                <p>
                  Structural design and construction of steel and concrete bridges, from concept
                  to completion with rigorous safety standards.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem
              className="construction-box"
              style={{ backgroundImage: "url('/assets/img/Image1 (2).jpg')" }}
              whileHover={{ y: -6 }}
            >
              <div className="construction-overlay">
                <h3>SURVEYING & MAPPING</h3>
                <p>
                  Precision topographical surveys, WGS84 geodetic control, and detailed mapping
                  for infrastructure planning and development.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem
              className="construction-box"
              style={{ backgroundImage: "url('/assets/img/Image1 (4).jpg')" }}
              whileHover={{ y: -6 }}
            >
              <div className="construction-overlay">
                <h3>WATER SUPPLY SYSTEMS</h3>
                <p>
                  Comprehensive water supply system design, from feasibility studies to detailed
                  engineering for sustainable water infrastructure.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            What our clients say about working with Active Engineering Group
          </p>
          <StaggerGroup className="grid-2">
            {TESTIMONIALS.map((testimonial) => (
              <StaggerItem className="card" key={testimonial.author} whileHover={{ y: -4 }}>
                <p style={{ fontStyle: "italic" }}>&ldquo;{testimonial.quote}&rdquo;</p>
                <div style={{ marginTop: "auto", fontWeight: 700 }}>{testimonial.author}</div>
                <div className="section-subtitle" style={{ margin: 0 }}>
                  {testimonial.company}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Trusted By Industry Leaders</h2>
          <Reveal>
            <img
              src="/client.png"
              alt="Trusted by RTDA, Kigali City, Powerchina, Government of Rwanda, World Bank"
              style={{ maxWidth: 900, width: "100%", height: "auto" }}
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <StaggerGroup className="grid-2">
            <StaggerItem className="card" whileHover={{ y: -4 }}>
              <div className="card-icon">
                <Target aria-hidden="true" />
              </div>
              <h2 className="section-title">MISSION</h2>
              <p>
                Deliver innovative, efficient, and sustainable engineering solutions that maximize
                client value and community impact through rigorous QA/QC.
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
    </main>
  );
}
