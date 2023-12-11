import React from "react";
import "./education.css";

export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Vellore Institute of Technology ,Vellore{" "}
            </span>
            <span className="university-degree">
              Bachelors of Technology in Computer Science{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2021-2025</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Cambrian Public School,Ranchi{" "}
            </span>
            <span className="university-degree">
              Intermediate &nbsp; (91%){" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2018-2020</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Cambrian Public School,Ranchi{" "}
            </span>
            <span className="university-degree">
              Matriculation &nbsp; (91%){" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2008-2018</span>
          </div>
        </div>
      </div>
    </>
  );
}
