import React from "react";
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>Keeper</h1>
            <div className="icon">
                <Link to="/add">
                    <AiFillPlusCircle />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
