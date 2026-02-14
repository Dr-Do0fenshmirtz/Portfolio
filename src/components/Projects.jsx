import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: "60px" }}>
      <h2>My Projects</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} onClick={() => setSelectedProject(p)} />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
