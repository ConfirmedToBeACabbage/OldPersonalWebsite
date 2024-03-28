import React from "react";
import "../css/mainnavbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import profile_logo from "../Images/profile.png";
import { Link } from 'react-router-dom';
import Aos from "aos";

class MainNavBar extends React.Component{

    componentDidMount() {
        Aos.init({duration: 3000,
                  once: false,
                  mirror: true});
      }

    render(){
        return (
            <div class="row w-100 h-75">
                <div data-aos="fade-down" class="d-flex justify-content-center w-100 h-25 mt-1">
                    <div class="d-flex flex-row" className="mainnavbar">
                        <div id="profilelocation">
                            <img class="img-fluid ms-3 mt-1" alt="profile logo" src={profile_logo}></img>
                        </div>
                        <div id="navbuttons">
                            <Link to ='/'> 
                                <button>
                                    <h2>Home</h2>
                                </button>
                            </Link>
                            <Link to ='/work'> 
                                <button>
                                    <h2>Work</h2>
                                </button>
                            </Link>
                            <Link to ='/projects'> 
                                <button>
                                    <h2>Projects</h2>
                                </button>
                            </Link>
                            <Link to ='/contact'> 
                                <button>
                                    <h2>Contact</h2>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { MainNavBar };