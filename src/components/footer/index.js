import React from "react";
import './Footer.scss';

const Footer = () => (
    <div className="footer">
        <div className="contact">
            <h2>Contact Me</h2>
            <div className="items">
                <a>
                    <i className="bi-geo-alt-fill me-2"></i>
                    Poulsbo, Washington
                </a>
                <a href="https://bioethikapress.com" target="_blank">
                    <i className="bi-globe me-2"></i>
                    www.bioethikapress.com
                </a>
            </div>
        </div>
        <div className="copyright">
            <a>Copyright 2023 by Ingrid Naiman</a>
            <a>All Rights Reserved</a>
        </div>
    </div>
);

export default Footer;