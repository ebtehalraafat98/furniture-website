
import './HeroSection.css';
import heroImg from '../../assets/slider-img.png';
import { useNavigate } from 'react-router-dom';

function HeroSection() {

  const navigate = useNavigate();

  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center text-black">
            <h1 className="display-4 fw-bold mb-3">
              FOR ALL YOUR FURNITURE NEEDS
            </h1>
            <p className="lead mb-4">
              We provide you with the best quality furniture at the best price.
            </p>
            <div className="d-flex gap-3 justify-content-md-start justify-content-center">
              <a href="#footer" className="btn btn-warning btn-lg text-white">Contact Us</a>
              <button
                className="btn btn-info btn-lg text-white"
                onClick={() => navigate('/about')}
              >
                About Us
              </button>

            </div>
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img src={heroImg} alt="Furniture Hero" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;