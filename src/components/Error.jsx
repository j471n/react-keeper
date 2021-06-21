import React from "react";
import { Link, Redirect } from "react-router-dom";

const Error = () => {


    return (
        <div className="error">
            <h1>404 Not Found</h1>
            <p>Sorry we're unable to find the requested page</p>
            <button className="btn" style={{margin: "10px"}}>
                <Link to="/">Home</Link>
            </button>
        </div>
    );
};

export default Error;
