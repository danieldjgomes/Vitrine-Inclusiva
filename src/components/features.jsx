import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>O que oferecemos:</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-2">
                  {" "}
                    <i className="fa"><FontAwesomeIcon icon={d.icon} /></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
          <iframe width="560" height="315"
                  src="https://www.youtube-nocookie.com/embed/tX2MZw-CvWI?si=a9n3ti2DWRoJxuCh&amp;controls=0"
                  title="YouTube video player" frameBorder="0"
                  allow="autoplay; encrypted-media; gyroscope;"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
};
