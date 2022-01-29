import React from "react";

function Services() {
    return(
        <div className="services-div">
            <p className="services-heading">SERVICES</p>
            <p className="services-heading-2">Our services can be classified into 3 major categories:</p>
            <div className="row services">
                <div className="service col-md-4 col-lg-4"><div>Experiment Files</div></div>
                <div className="service col-md-4 col-lg-4"><div>Assignments</div></div>
                <div className="service col-md-4 col-lg-4"><div>Summer Projects</div></div>
            </div>
            {/* <hr></hr> */}
        </div>
    );
}

export default Services;