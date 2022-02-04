import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
            <div className="logo">
              <img src={image}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
