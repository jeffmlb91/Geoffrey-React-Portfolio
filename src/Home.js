import React from "react";
import "./Home.css";
import logo from "../src/img/logo.png";

function Home() {
  return (
    <div className="home">
      <div className="home__bg">
        {/* This is the header content*/}
        <div className="header d__flex align__items__center pxy__30">
            <div className="logo">
              <img src={logo} alt=" " width="193" height="130"/>
            </div>
            <div className="navigation pxy__30">
              <ul className="navbar d__flex">
                <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                <a href="#About"><li className="nav__items mx__15">About</li></a>
                <a href="#Portfolio"><li className="nav__items mx__15">Portfolio</li></a>
                <a href="#Resume"><li className="nav__items mx__15">Resume</li></a>
                <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
              </ul>
            </div>
        </div>
        {/*This is the home content */}

        <div className="container">
        <div className="home__content">
          <div className="home__meta">
            <h1 className="home__text pz__10">
              WELCOME TO MY VIRTUAL SPACE
            </h1>

            <h2 ClassName="home__text pz__10">
              Hi, I'm Geoffrey
            </h2>
            <h3 className="home__text sweet">
                I'm a Full Stack Engineer
            </h3>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
