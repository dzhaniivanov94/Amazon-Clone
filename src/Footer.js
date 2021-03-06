import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import BackToTop from './BackToTop';

function Footer() {
    return (
        <div className="footerarea">
            <div className="footerarea_top">
                <BackToTop showBelow={250} />
            </div>
            <div className="footerarea__links">
                <div className="footerarea__linkarea">
                    <Link to="/about"><span>About Amazon</span></Link>
                </div>
                <div className="footerarea__linkarea">
                    <span>Make money with Us</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Amazon Payment Products</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Let us Help You</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;