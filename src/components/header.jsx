import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {/*{props.data ? props.data.title : "Loading"}*/}
                  <img src="img/logo.png"/>
                  <span></span>
                </h1>
                <p>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>

                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Saiba mais
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
