import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div className = 'container-fluid navheader'>
            <div className = 'row ' >
            {/* <p className = 'title-name2' >Subrahmanyam</p> */}
                <div className = 'col-md-3 '>
                    <p className = 'title-name'>Madhubabu</p>
                </div>
                
                <div className = 'col-md-2 '></div>

                <div className = 'col-md-7  menu-div'>
                    <div className = 'menu-parent'>
                        <ul className = 'menu-ul'>
                            <li className = 'menu-li'><a className ='menu-item'>Home</a></li>
                            <li className = 'menu-li'> <a href = '#btnresumeid' className ='menu-item'>Resume</a></li>
                            <li className = 'menu-li'><a href = '#contactid' className ='menu-item'>Contact me</a></li>
                            <li className = 'menu-li'> <a href = '#aboutid' className ='menu-item'>About me</a></li>
                        </ul>
                    </div>
                    
                </div>
                
               
            </div>
        </div>
    )
}
