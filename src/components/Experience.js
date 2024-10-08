import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience.title;
      var link = this.props.resumeBasicInfo.section_name.experience.link;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <div pill className="main-badge mr-2 mb-2 text-break rounded d-inline-flex" key={i}>
              {technology}
            </div>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="badge bg-yellow-200 me-2 mb-2 text-wrap" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fab fa-angular experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            

            <div className="container p-2" style={{ textAlign: "left", marginTop: "15px", }}>{tech}</div>
            <figcaption className="blockquote-footer col-sm-12 mt-2">
              <div>
              <ul style={{listStyleType: 'none',paddingLeft:'0px'}}>
                {work.description.split('`').map((element, ind) => {
                  // console.log(element)
                  return <li key={ind} className="mb-3">{element}</li>
                })}
              </ul>
              </div>
            </figcaption>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id={link} className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
