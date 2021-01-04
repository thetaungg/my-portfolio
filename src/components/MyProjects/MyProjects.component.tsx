import React from "react";
import * as styles from "./MyProjects.styles";
import ProjectItem from "../ProjectItem/ProjectItem.component";

const MyProjects = () => {
  return (
    <div css={styles.container} id="projects">
      <div css={styles.card}>
        <h5 css={styles.sectionHeading}>My Projects</h5>
        <div css={styles.projectContainer}>
          <ProjectItem url="https://api.github.com/repos/thedevs-network/kutt" />
          <ProjectItem url="https://api.github.com/repos/zero-to-mastery/CSS_Grid_LearnGame" />
          <ProjectItem url="https://api.github.com/repos/thetaungg/crown-clothings" />
          <ProjectItem url="https://api.github.com/repos/thetaungg/natours" />
          <ProjectItem url="https://api.github.com/repos/thetaungg/my-portfolio" />
          <ProjectItem url="https://api.github.com/repos/thetaungg/media-converter" />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
