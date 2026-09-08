"use client";

import { useMemo, useState } from "react";
import { MapPin, Ruler } from "lucide-react";
import { StaggerGroup, StaggerItem } from "./Stagger";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "road", label: "Roads & Highways" },
  { id: "water", label: "Water Supply" },
  { id: "bridge", label: "Bridges" },
  { id: "urban", label: "Urban Development" },
  { id: "survey", label: "Surveying" },
];

function ProjectCard({ project }) {
  return (
    <StaggerItem className="card project-card" whileHover={{ y: -4 }}>
      <div className="card-img">
        <img src={project.image} alt={project.alt} loading="lazy" />
        <span className="overlay-badge">
          <MapPin aria-hidden="true" /> {project.categoryLabel}
        </span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-meta">
        <span className="project-meta-item">
          <MapPin aria-hidden="true" /> {project.location}
        </span>
        {project.metric && (
          <span className="project-meta-item">
            <Ruler aria-hidden="true" /> {project.metric}
          </span>
        )}
      </div>
    </StaggerItem>
  );
}

export default function ProjectsExplorer({ projects }) {
  const [filter, setFilter] = useState("all");

  const segments = useMemo(() => {
    return CATEGORIES.slice(1)
      .map((category) => ({
        ...category,
        projects: projects.filter((project) => project.category === category.id),
      }))
      .filter((segment) => segment.projects.length > 0);
  }, [projects]);

  const activeSegments = filter === "all" ? segments : segments.filter((s) => s.id === filter);

  return (
    <div>
      <div className="project-filter">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`filter-chip${filter === category.id ? " active" : ""}`}
            onClick={() => setFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {activeSegments.map((segment) => (
        <section className="project-segment" key={segment.id}>
          <h3 className="project-segment-title">{segment.label}</h3>
          <StaggerGroup className="card-grid">
            {segment.projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </StaggerGroup>
        </section>
      ))}
    </div>
  );
}
