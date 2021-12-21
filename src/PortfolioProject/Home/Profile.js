import React from 'react'
import Navbar from './Navbar'
import resume from "./Madhu's Resume-converted.docx";

export default function Profile() {
    return (
      <div className="profile-container">
        <Navbar />
        <div className="container-fluid profilesec">
          <div className="row">
            <div className="col-sm-7 prof-bio">
              <p className="topline1">
                Hello, I am <span className="topline1span">Madhubabu</span>
              </p>
              <p className="prof-role">Full stack web developer</p>
              <p className="prof-desc">
                Knack of building applications with front and backend operations
              </p>
              <div className="btn-sec">
                <ul className="btn-parent" id="btnresumeid">
                  <li className="btn-item">
                    <a href="#contactid">
                      <button className="buttonstyle">Hire me</button>
                    </a>
                  </li>
                  <li className="btn-item">
                    <a href={resume}>
                      <button className="buttonstyle1">Resume</button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="profpic-parent">
                <img
                  className="profpic"
                  src="https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/8b9f666b02fcfde714bed6ef69bf97a1.png"
                  alt="Madhu"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
