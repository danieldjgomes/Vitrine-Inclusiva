import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre nós</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Nossa Missão</h3>
              <div list-style>
                <p>{props.data ? props.data.mission : "loading..."}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
