import React , {useState} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

import './Resume.css'
export default function Resume() {
    const [btn1 , setbtn1] = useState(true);
    const [btn2 , setbtn2] = useState(false);
    const [btn3 , setbtn3] = useState(false);
    const [btn4 , setbtn4] = useState(false);
    const [btn5 , setbtn5] = useState(false);
    const updbtn1 = () => {
        setbtn1(true)
        setbtn2(false)
        setbtn3(false)
        setbtn4(false)
        setbtn5(false)
       
    }
    const updbtn2 = () => {
        setbtn1(false)
        setbtn2(true)
        setbtn3(false)
        setbtn4(false)
        setbtn5(false)
    }
    const updbtn3 = () => {
        setbtn1(false)
        setbtn2(false)
        setbtn3(true)
        setbtn4(false)
        setbtn5(false)
    }
    const updbtn4 = () => {
        setbtn1(false)
        setbtn2(false)
        setbtn3(false)
        setbtn4(true)
        setbtn5(false)
    }
    const updbtn5 = () => {
        setbtn1(false)
        setbtn2(false)
        setbtn3(false)
        setbtn4(false)
        setbtn5(true)
       
    }
    let inputStyle = {
           
            border: '1px solid black'
        
      };
    return (
      <div className="container">
        <p className="aboutmehead">Resume</p>
        {/* <hr class="center-diamond"/> */}
        <div className="row">
          {/* <div className = 'col-sm-1 sideicons'>
               
                </div> */}
          <div className="col-sm-3 box-sh">
            <div className="sideicons">
              <ul className="sidebar-ul-icon">
                <li className="sidebar-liicon">
                  <i class="fas fa-user-graduate"></i>
                </li>
                <li className="sidebar-liicon">
                  <i class="fas fa-history"></i>
                </li>
                <li className="sidebar-liicon">
                  <i class="fas fa-laptop-code"></i>
                </li>
                <li className="sidebar-liicon">
                  <i class="fas fa-chart-bar"></i>
                </li>
                <li className="sidebar-liicon">
                  <i class="fas fa-palette"></i>
                </li>
              </ul>
              <ul className="sidebar-ul">
                <li
                  style={
                    btn1
                      ? { backgroundColor: "#112240", color: "white" }
                      : { backgroundColor: "white", color: "#112240" }
                  }
                  className="sidebar-li"
                  onClick={updbtn1}
                >
                  Education
                </li>
                <li
                  style={
                    btn2
                      ? { backgroundColor: "#112240", color: "white" }
                      : { backgroundColor: "white", color: "#112240" }
                  }
                  className="sidebar-li"
                  onClick={updbtn2}
                >
                  Experience
                </li>
                <li
                  style={
                    btn3
                      ? { backgroundColor: "#112240", color: "white" }
                      : { backgroundColor: "white", color: "#112240" }
                  }
                  className="sidebar-li"
                  onClick={updbtn3}
                >
                  Skills
                </li>
                <li
                  style={
                    btn4
                      ? { backgroundColor: "#112240", color: "white" }
                      : { backgroundColor: "white", color: "#112240" }
                  }
                  className="sidebar-li"
                  onClick={updbtn4}
                >
                  Projects
                </li>
                <li
                  style={
                    btn5
                      ? { backgroundColor: "#112240", color: "white" }
                      : { backgroundColor: "white", color: "#112240" }
                  }
                  className="sidebar-li"
                  onClick={updbtn5}
                >
                  Interests
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-9 resumebox">
            {btn1 && (
              <div className="button1data">
                <div className="resudiv1">
                  <p className="instname">
                    <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Guru Nanak
                    Institute Of Technology
                    <span>
                      <button id='mysepbtn' className="buttonstyle1221">2015 - 2019</button>
                    </span>
                  </p>
                  <p className="instedu">
                    &nbsp;&nbsp;&nbsp;&nbsp;BACHELOR OF SCIENCE INFORMATION
                    TECHNOLOGY
                  </p>
                </div>
                <div className="resudiv1">
                  <p className="instname">
                    <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;Sri Chaitanya
                    Junior College
                    <span>
                      <button className="buttonstyle1221">2013 - 2015</button>
                    </span>
                  </p>
                  <p className="instedu">
                    &nbsp;&nbsp;&nbsp;&nbsp;INTERMEDIATE EDUCATION
                  </p>
                </div>
                <div className="resudiv1">
                  <p className="instname">
                    <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;Narayana
                    E-Techno School
                    <span>
                      <button className="buttonstyle1221">2008 - 2013</button>
                    </span>
                  </p>
                  <p className="instedu">
                    &nbsp;&nbsp;&nbsp;&nbsp;HIGH SCHOOL EDUCATION
                  </p>
                </div>
              </div>
            )}
            {btn2 && (
              <div className="button2data">
                <div className="resudiv1">
                  <p className="instname">
                    <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Multiplier
                    AI Solutions
                    <span>
                      <button id="msexpbtn" className="buttonstyle122">
                        July 2019 - December 2021
                      </button>
                    </span>
                  </p>

                  <p className="instedu" id="msole">
                    SOFTWARE APPLICATION DEVELOPER
                  </p>
                  <br />
                  <p className="work-desc">
                    <b>I have developed below listed Projects</b>
                  </p>
                  <p className="work-desc1">
                    <i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Simple
                    bot to capture basic lead details like (name,email,mobile)
                    and a dashboard to view the leads captured
                    <br />
                    <i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed
                    a role based user management dashboards using jQuery AJAX ,
                    PHP
                    <br />
                    <i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed
                    Google My Business Product used for doctors ratings,
                    rankings and to create GMB account using JavaScript, PHP
                    <br />
                    <i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed
                    few static landing pages with responsive and interactive
                    user interface
                    <br />
                    <i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed
                    few dynamic web applications using Angular JS
                    <br />
                    <i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed
                    user based login and dashboard using MEAN stack
                    <br />
                    <i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed
                    a doctor competetor analysis tool using codeigniter
                    <br />
                    <i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed
                    a video consultations , automatic prescription project using
                    PHP
                  </p>
                </div>
              </div>
            )}
            {btn3 && (
              <div className="button3data">
                <div className="row resudiv1">
                  <div className="col-sm-6">
                    <div className="skill" style={{ width: "60%" }}>
                      <p className="instname">
                        <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;
                        JavaScript
                      </p>
                      <ProgressBar
                        completed={70}
                        bgColor="rgb(17, 34, 64)"
                        baseBgColor="rgb(193 193 193)"
                      />
                    </div>
                    <br />
                    <div className="skill" style={{ width: "60%" }}>
                      <p className="instname">
                        <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; PHP
                      </p>
                      <ProgressBar
                        completed={80}
                        bgColor="rgb(17, 34, 64)"
                        baseBgColor="rgb(193 193 193)"
                      />
                    </div>
                    <br />
                    <div className="skill" style={{ width: "60%" }}>
                      <p className="instname">
                        <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; MySQL
                      </p>
                      <ProgressBar
                        completed={65}
                        bgColor="rgb(17, 34, 64)"
                        baseBgColor="rgb(193 193 193)"
                      />
                    </div>
                    <br />
                    <div className="skill" style={{ width: "60%" }}>
                      <p className="instname">
                        <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; jQuery{" "}
                      </p>
                      <ProgressBar
                        completed={60}
                        bgColor="rgb(17, 34, 64)"
                        baseBgColor="rgb(193 193 193)"
                      />
                    </div>
                    <br />
                    <div className="skill" style={{ width: "60%" }}>
                      <p className="instname">
                        <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;
                        Bootstrap{" "}
                      </p>
                      <ProgressBar
                        completed={80}
                        bgColor="rgb(17, 34, 64)"
                        baseBgColor="rgb(193 193 193)"
                      />
                    </div>
                    <br />
                  </div>
                  <div className="col-sm-6">
                    <div className="skill" style={{ width: "60%" }}>
                      <p className="instname">
                        <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Angular
                        JS
                      </p>
                      <ProgressBar
                        completed={85}
                        bgColor="rgb(17, 34, 64)"
                        baseBgColor="rgb(193 193 193)"
                      />
                    </div>
                    <br />
                    <div className="skill" style={{ width: "60%" }}>
                      <p className="instname">
                        <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;
                        CodeIgniter
                      </p>
                      <ProgressBar
                        completed={75}
                        bgColor="rgb(17, 34, 64)"
                        baseBgColor="rgb(193 193 193)"
                      />
                    </div>
                    <br />

                    <div className="skill" style={{ width: "60%" }}>
                      <p className="instname">
                        <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; NodeJS
                      </p>
                      <ProgressBar
                        completed={65}
                        bgColor="rgb(17, 34, 64)"
                        baseBgColor="rgb(193 193 193)"
                      />
                    </div>
                    <br />
                    <div className="skill" style={{ width: "60%" }}>
                      <p className="instname">
                        <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;
                        ExpressJS
                      </p>
                      <ProgressBar
                        completed={60}
                        bgColor="rgb(17, 34, 64)"
                        baseBgColor="rgb(193 193 193)"
                      />
                    </div>
                    <br />
                    <div className="skill" style={{ width: "60%" }}>
                      <p className="instname">
                        <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Python
                      </p>
                      <ProgressBar
                        completed={60}
                        bgColor="rgb(17, 34, 64)"
                        baseBgColor="rgb(193 193 193)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {btn4 && (
              <div className="button4data">
                <div className="resudiv1">
                  <p className="instname">
                    <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Patient Life
                    Time Value(PLTV){" "}
                    <span>
                      <button className="buttonstyle1221">2021</button>
                    </span>
                  </p>
                  <p className="instedu prodata">
                    {" "}
                    PLTV helps the medical agents to track the discharge
                    summaries of patients and book the services needed for
                    patients after the discharge and manage the revenue
                    conversions
                  </p>
                </div>
                <div className="resudiv1">
                  <p className="instname">
                    <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; DocRank{" "}
                    <span>
                      <button className="buttonstyle1221">2020</button>
                    </span>
                  </p>
                  <p className="instedu prodata">
                    {" "}
                    DocRank is a product exclusively build to provide Healthcare
                    Digital Marketing Actionable insights to Doctors, Hospitals
                    & Agencies.It's a competitor analaysis tool to check where
                    the Doctors, Hospitals & Agencies stand in the digital world
                  </p>
                </div>
                <div className="resudiv1">
                  <p className="instname">
                    <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Online
                    Consultation Manager{" "}
                    <span>
                      <button className="buttonstyle1221">2020</button>
                    </span>
                  </p>
                  <p className="instedu prodata">
                    {" "}
                    OCM is a online consultation platform which help connect
                    medical practitioners and patients digitally ,It give a
                    varity of options such as video consultations, automated
                    prescriptions ,reminders ,report uploads etc.
                  </p>
                </div>
              </div>
            )}
            {btn5 && (
              <div className="button5data">
                <div className="resudiv1">
                  <p className="instname">
                    <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Teaching{" "}
                  </p>
                  <p className="instedu">
                    {" "}
                    Apart from being a tech enthusiast and a code writer , i
                    also love to teach people what i know simply because i
                    believe in sharing
                  </p>
                </div>
                <div className="resudiv1">
                  <p className="instname">
                    <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Music{" "}
                  </p>
                  <p className="instedu">
                    {" "}
                    Listening to soothing music is something i can never
                    compromise with skimming through spotify's pop songs charts
                    is at times the best stress reliever that i can get my hands
                    on
                  </p>
                </div>
                <div className="resudiv1">
                  <p className="instname">
                    <i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Competetive
                    Gaming{" "}
                  </p>
                  <p className="instedu">
                    {" "}
                    I like to challenge my reflexes a lot while competeting in
                    cricket , pushing the rank and having interactive gaming
                    sessions excites me the most{" "}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}
