import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./project.scss";

const Project = (props) => {
  const { title, description, image, demoLink } = props;
  return (
    <div className="project">
      <div className="header">
        <div className="header-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <a
          className="link-icon"
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <img className="image-card" src={image} alt={title} />
    </div>
  );
};

export default Project;
