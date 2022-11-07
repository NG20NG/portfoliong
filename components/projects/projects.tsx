import React from "react";
import p from "./projects.module.css";

const Project = () => {
  const porojectsCard = [
    {
      title: "Association Chams",
      description: `mon site de soutenance (projet de fin d'année) un site de
      presontation de l'association cham's`,
    },
    {
      title: "Backend Association Chams",
      description: `cree un compte securiser plus admin dashboard`,
    },
    {
      title: "NG Auto clicker",
      description: "Auto clicker avec python (tkinter)",
    },
    {
      title: "Remind me",
      description: "Remind me is a flutter project",
    },
    {
      title: "Portfolio NG",
      description: "Remind me is a flutter project",
    },
  ];

  return (
    <div className={p.projects} id={"project"}>
      <h3 className={p.titleProjects}>Projects</h3>
      <div className={p.secondProjects}>
        {porojectsCard.map((e: any, index: number) => {
          return (
            <div key={index} className={p.cards}>
              <div className={p.pic}></div>
              <div className={p.picDescription}>
                <div>{e.title}</div>
                <p>{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
