import React from "react";

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year} Reserved</p>
        </footer>
    );
};

export default Footer;
