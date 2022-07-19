import React from "react";
import ProjectItem from "@/components/ProjectItem/ProjectItem.component";
import TopWave from "@/assets/images/top-wave.inline.svg";
import BottomWave from "@/assets/images/bottom-wave.inline.svg";
import * as styles from "./MyProjects.styles";

const MyProjects = () => {
    return (
        <div css={styles.container} id="projects">
            <div css={styles.card}>
                <h5 css={styles.sectionHeading}>My Projects</h5>
                <div css={styles.projectContainer}>
                    {myProjects.map((url, index) => (
                        <ProjectItem key={index} url={url} />
                    ))}
                </div>
            </div>
            <div css={styles.topWave}>
                <TopWave />
            </div>
            <div css={styles.bottomWave}>
                <BottomWave />
            </div>
        </div>
    );
};

const myProjects = [
    `https://api.github.com/repos/thetaungg/my-portfolio`,
    `https://api.github.com/repos/thetaungg/company-portfolio`,
    `https://api.github.com/repos/thetaungg/rick-and-morty-wiki`,
    `https://api.github.com/repos/thetaungg/nextjs-starter`,
    `https://api.github.com/repos/thetaungg/nodejs-starter`,
    `https://api.github.com/repos/thetaungg/my-gatsby-starter`,
];

export default MyProjects;
