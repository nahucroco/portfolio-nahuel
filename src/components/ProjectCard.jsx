import MobileProjectCard from "./MobileProjectCard";
import DesktopProjectCard from "./DesktopProjectCard";

export default function ProjectCard({ project }) {
  if (project.type === "mobile") {
    return <MobileProjectCard project={project} />;
  }

  return <DesktopProjectCard project={project} />;
}