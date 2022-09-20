import React from "react";
import p from "./projects.module.css";

const Project = () => {
  return (
    <div className={p.projects}>
      <div className={p.secondProjects}>
        <div className={p.cards}>
          <div></div>
        </div>
        <div className={p.cards}>
          <div></div>
        </div>
        <div className={p.cards}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
