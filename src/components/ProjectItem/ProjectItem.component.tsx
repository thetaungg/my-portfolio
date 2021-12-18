import React, { useEffect, useState } from "react";
import * as styles from "./ProjectItem.styles";
import StarIcon from "../../assets/icons/star.svg";
import ForkIcon from "../../assets/icons/fork.svg";

interface ProjectData {
  name: string;
  owner: {
    login: string;
  };
  html_url: string;
  description: string;
  stargazers_count: number;
  forks: number;
  language: string;
}

const ProjectItem = ({ url }: { url: string }) => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ name, owner, html_url, stargazers_count, forks, description, language }) => {
        setProjectData({
          name,
          owner: { login: owner?.login },
          html_url,
          stargazers_count,
          forks,
          language,
          description,
        });
      });
  }, []);

  return projectData ? (
    <div css={styles.container}>
      <a href={projectData.html_url} target="_blank">
        <span css={styles.name}>
          {projectData.owner.login}/<strong style={{ fontWeight: 600 }}>{projectData.name}</strong>
        </span>
      </a>

      <p css={styles.description}>{projectData.description}</p>
      <div css={styles.row}>
        <div css={styles.row}>
          <span css={styles.dot} />
          <span css={styles.text}>{projectData.language}</span>
        </div>
        <div css={styles.row}>
          <img src={StarIcon} alt="star icon" width="16" height="16" />
          <span css={styles.text}>{projectData.stargazers_count}</span>
        </div>
        <div css={styles.row}>
          <img src={ForkIcon} alt="star icon" width="14" height="16" />
          <span css={styles.text}>{projectData.forks}</span>
        </div>
      </div>
    </div>
  ) : (
    <> </>
  );
};

export default ProjectItem;
