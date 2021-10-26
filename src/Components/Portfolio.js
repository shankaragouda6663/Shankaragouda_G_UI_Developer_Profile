import React, { Component } from "react";
// import Zmage from "react-zmage";
import Fade from "react-reveal";

let index = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    // const projects = this.props.data.projects.map(function (projects) {
    //   let projectImage = "images/portfolio/" + projects.image;

    //   return (
    //     <div key={id++} className="columns portfolio-item">
    //       <div className="item-wrap">
    //         <Zmage alt={projects.title} src={projectImage} />
    //         <div style={{ textAlign: "center" }}>{projects.title}</div>
    //       </div>
    //     </div>
    //   );
    // });

    const projects = this.props.data.projects.map(function (project) {
      return (
        <React.Fragment key={index++}>
          <div>
            <h3>{project.title}</h3>
            <h6>Role: {project.role}</h6>
            <h6>Technology: {project.technology}</h6>
            <span><h6>Description: </h6>{project.description}</span>
          </div>
          <br></br>
        </React.Fragment>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          {/* <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div> */}

          <div className="row">
            <div className="three columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{projects}</div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
