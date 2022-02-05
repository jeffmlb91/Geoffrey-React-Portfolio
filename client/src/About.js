import React from "react";
import "./About.css";
import aboutImg from "./img/profile.JPG";

function About() {
  return (
    <div className="about component__space">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" height="600" />
          </div>

          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I'm a toronto base Full Stack Engineer who graduated from the
                University of Toronto Class of Continuing Studies. I love to
                take challenges and we are opened to work on your projects. My
                Goal is to make programming a second nature. Not just because I
                like to code, but because of the things that can be accomplished
                acquiring that skill.
              </p>

              <p className="about__text p__color">
                I'm a toronto base Full Stack Engineer who graduated from the
                University of Toronto Class of Continuing Studies. I love to
                take challenges and we are opened to work on your projects. My
                Goal is to make programming a second nature. Not just because I
                like to code, but because of the things that can be accomplished
                acquiring that skill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
