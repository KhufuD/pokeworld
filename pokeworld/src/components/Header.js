import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/images/logo.png";

const Header = () => {
return(
    <div className={classes.header}>
        <div className={classes.headerInner}>
            <div className={classes.imgContainer}>
            <img src={logo} alt="Logo" className={classes.logoImg}></img>
            </div>

        </div>
    </div>
);
};

export default Header;