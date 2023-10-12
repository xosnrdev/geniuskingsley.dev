"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import useBreakpoint from "use-breakpoint";
import ProjectItem from "./ProjectItem";
import ProjectPreview from "./ProjectPreview";
import { projects } from "./constants";
import { ProjectModal } from "./types";
import IsMobileView from "./Modal";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function Projects() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const [modal, setModal] = useState<ProjectModal>({ active: false, index: 0 });

  const handleModalClose = () => {
    setModal({ ...modal, active: false });
  };

  return (
    <>
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <ProjectItem
            index={index}
            title={project.title}
            url={project.url}
            role={project.role}
            setModal={setModal}
          />
        </motion.div>
      ))}

      {breakpoint !== "desktop" && modal.active && (
        <IsMobileView
          src={projects[modal.index].src} // Supply imageUrl
          title={projects[modal.index].title}
          url={projects[modal.index].url}
          github={projects[modal.index].github} // Supply github URL
          isOpen={modal.active} // Control the modal's open state
          handleClose={handleModalClose} // Allow the modal to be closed
        />
      )}
      {breakpoint === "desktop" && <ProjectPreview modal={modal} projects={projects} />}
    </>
  );
}
