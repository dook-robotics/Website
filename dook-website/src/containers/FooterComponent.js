import React from 'react';

function Footer(props) {
  return(
    <div className="footer">
      <div className ="container">
        <div className = "row justify-content-center">
          <div className = "col-4 offset-1 col-sm-2">
            <h5>Info</h5>
            <ul className = "list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="https://github.com/dook-robotics">Github</a></li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
            4505 S. Maryland Pkwy <br />
            Las Vegas, NV 89154 <br />
            'Merica<br />
            </address>
          </div>
          <div className = "col-12 col-sm-4 align-self">
            <div className = "text-center">
              <h5>Stay Gnarly</h5>
            </div>
            <div className = "row justify-content-center">
              <div className = "col-auto">
                <p>©Copyright 2019 Dook Robotics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
