import './Footer.css';
import insta1 from '../../assets/f1.png';
import insta2 from '../../assets/f2.png';
import insta3 from '../../assets/f3.png';
import insta4 from '../../assets/f4.png';
import insta5 from '../../assets/f5.png';
import insta6 from '../../assets/f6.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <footer id="footer" className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">

                    {/* Contact Info */}
                    <div className="col-md-3 mb-4">
                        <h5>Contact</h5>
                        <p><i className="bi bi-telephone-fill me-2"></i> Call: +91 1234567890</p>
                        <p><i className="bi bi-envelope-fill me-2"></i> Email: demo@gmail.com</p>
                        <p><i className="bi bi-geo-alt-fill me-2"></i> Location</p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#hero" className="text-white"><i className="bi bi-chevron-right me-2"></i> Home</a></li>
                            <li><a href="#cards" className="text-white"><i className="bi bi-chevron-right me-2"></i> Furniture</a></li>
                            <li><a href="#footer" className="text-white"><i className="bi bi-chevron-right me-2"></i> Contact Us</a></li>
                            <li><a href="#about" className="text-white"><i className="bi bi-chevron-right me-2"></i> About</a></li>
                            <li><a href="#blog" className="text-white"><i className="bi bi-chevron-right me-2"></i> Blog</a></li>
                        </ul>
                    </div>

                    {/* Instagram Feeds */}
                    <div className="col-md-3 mb-4">
                        <h5>Instagram Feeds</h5>
                        <div className="row g-2">
                            {[insta1, insta2, insta3, insta4, insta5, insta6].map((img, i) => (
                                <div key={i} className="col-4">
                                    <img src={img} alt="insta" className="footer-insta-img" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-3 mb-4">
                        <h5>Sign up to our Newsletter</h5>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="form-control mb-2"
                        />
                        <button className="btn btn-info text-white w-100">Subscribe</button>
                        <div className="container">
                            {/* Social Icons */}
                            <div className="d-flex gap-3 mt-3 justify-content-center">
                                <a href="#" className="social-icon"><FaFacebook /></a>
                                <a href="#" className="social-icon"><FaTwitter /></a>
                                <a href="#" className="social-icon"><FaLinkedin /></a>
                                <a href="#" className="social-icon"><FaInstagram /></a>
                            </div>
                        </div>

                    </div>

                </div>

                <hr className="border-secondary" />
                <p className="text-center mb-0">© 2025 NEWHOME. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;