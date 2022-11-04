import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export default function Footer() {
    return (
        <footer>
                <div className="socialMedias">
                    <Link to="/" className="fa fa-facebook"></Link>
                    <Link to="/" className="fa fa-twitter"></Link>
                    <Link to="/" className="fa fa-google"></Link>
                    <Link to="/" className="fa fa-linkedin"></Link>
                    <Link to="/" className="fa fa-youtube"></Link>
                    <Link to="/" className="fa fa-instagram"></Link>
                </div>
                <div className="copy">
                    <span>Copyright &copy; 2022 | Aelander Farias</span>
                </div>
        </footer>
    )
}