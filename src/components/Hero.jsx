import './Hero.css';
import heroImage from '../assets/image.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Dhananjaya</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I create beautiful, responsive, and user-friendly web applications
            that make a difference.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={heroImage} alt="Dhananjaya" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
