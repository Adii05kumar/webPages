import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar-comp">
            <div className="title">Celebal Technologies</div>
            <ul>
                <Link to={"/"}>
                <li>Home</li>
                </Link>
                <Link to={"/contactUs"}>
                <li>Contact Us</li>
                </Link>
                <Link to={"/aboutUs"}>
                <li>About Us</li>
                </Link>
            </ul>
        </div>
    );
};
export default NavBar;