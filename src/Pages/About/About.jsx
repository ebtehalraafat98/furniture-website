import './About.css';
import aboutImg from '../../assets/about-img.png';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">


          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={aboutImg} alt="About Us" className="img-fluid" />
          </div>


          <div className="col-md-6">
            <h2 className="mb-4 fw-bold">ABOUT US</h2>
            <p className="mb-4">
              Welcome to our furniture world — where design meets comfort.
              We specialize in crafting high-quality, stylish furniture that transforms your space into a home.
              From modern sofas and ergonomic chairs to elegant dining tables and smart storage solutions,
              every piece is thoughtfully selected to blend aesthetics with functionality.
              Our mission is to offer durable, affordable, and timeless designs that suit every lifestyle.
              Whether you're furnishing a cozy apartment or a spacious villa, we're here to help you create the perfect atmosphere.
            </p>
            <button onClick={() => navigate('/products')}
              className="btn btn-info text-white px-4">Read More</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;