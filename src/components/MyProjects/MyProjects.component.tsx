import React from "react";
import * as styles from "./MyProjects.styles";
import ProjectItem from "../ProjectItem/ProjectItem.component";

const MyProjects = () => {
  return (
    <div css={styles.container} id="projects">
      <div css={styles.card}>
        <h5 css={styles.sectionHeading}>My Projects</h5>
        <div css={styles.projectContainer}>
          <ProjectItem url="https://api.github.com/repos/thetaungg/my-portfolio" />
          <ProjectItem url="https://api.github.com/repos/thetaungg/company-portfolio" />
          <ProjectItem url="https://api.github.com/repos/thetaungg/nextjs-starter" />
          <ProjectItem url="https://api.github.com/repos/thetaungg/nodejs-starter" />
          <ProjectItem url="https://api.github.com/repos/thetaungg/crown-clothings" />
          <ProjectItem url="https://api.github.com/repos/thetaungg/natours" />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
