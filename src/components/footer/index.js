import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Img1 from "../../assets/recent/news1.jpg";
import Img2 from "../../assets/recent/news2.jpg";
import './Footer.scss';

const Footer = () => (
    <div className="footer">
        <div className="contact">
            <div className="flex-d">
                <h3 className="snow">Contact Us</h3>
                <div className="d-flex mt-3">
                    <i className="bi bi-geo-alt-fill snow f-25 me-3" />
                    <div className="flex-d">
                        <h5 className="snow">Officeal Address</h5>
                        <p>504 White St . Dawsonville, GA 30534 , New York</p>
                    </div>
                </div>
                <div className="d-flex">
                    <i className="bi bi-envelope-fill snow f-25 me-3" />
                    <div className="flex-d">
                        <h5 className="snow">Email Us</h5>
                        <p>support@gmail.com</p>
                    </div>
                </div>
                <div className="d-flex">
                    <i className="bi bi-telephone-fill snow f-25 me-3" />
                    <div className="flex-d">
                        <h5 className="snow">Call Us</h5>
                        <p>+87986451666</p>
                    </div>
                </div>
            </div>
            <div className="flex-d">
                <h3 className="snow">Recent News</h3>
                <div className="d-flex mt-3">
                    <Image className="me-3" src={Img1} style={{ width: '8rem' }} rounded/>
                    <div className="flex-d">
                        <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
                    </div>
                </div>
                <div className="d-flex mt-3">
                    <Image className="me-3" src={Img2} style={{ width: '8rem' }} rounded/>
                    <div className="flex-d">
                        <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
                    </div>
                </div>
            </div>
            <div className="flex-d">
                <h3 className="snow">LION KING</h3>
                <div className="d-flex mt-4">
                    <Button variant="outline-light">
                        <i className="bi bi-facebook f-30 snow" />
                    </Button>
                    <Button variant="outline-light">
                        <i className="bi bi-twitter f-30 snow" />
                    </Button>
                    <Button variant="outline-light">
                        <i className="bi bi-linkedin f-30 snow" />
                    </Button>
                    <Button variant="outline-light">
                        <i className="bi bi-youtube f-30 snow" />
                    </Button>
                </div>
            </div>
        </div>
        <div className="copyright">
            <a>Copyright 2024 by Tatuli Shavishvili</a>
            <a>All Rights Reserved</a>
        </div>
    </div>
);

export default Footer;