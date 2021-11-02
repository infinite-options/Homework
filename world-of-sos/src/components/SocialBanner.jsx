// import logo from './logo.svg';
import '../App.css';
import instaIcon from '../assets/Icon simple-instagram.svg';
import fbIcon from '../assets/Icon simple-facebook.svg';

function SocialBanner() {
  return (
    <div className="social-banner">
      <div className="social-banner-left">
        <div id="social-banner-logos">
          <img 
            id="sos-red-logo"
            src={'https://images.squarespace-cdn.com/content/v1/5ea5ce810e499b6925447843/1615872550678-DIIUMKCF63GM4ZQ6I663/SOS_logo_PMS178.png'}
          />
          <div id="social-banner-links">
            <div className="social-banner-link-wrapper">
              <button id="insta-icon" className="social-banner-link"/>
            </div>  
            <div className="social-banner-link-wrapper">
              <button id="fb-icon" className="social-banner-link"/>
            </div>  
            <div className="social-banner-link-wrapper">
              <button id="fork-icon" className="social-banner-link"/>
            </div>  
          </div>            
        </div>
      </div>
      <div className="social-banner-right">
        <h1 class="primary-header">Join Our World</h1>
        <input
          class="email-input"
          placeholder="Email Address"
        />
        <button
          id="signup-btn"
          className="smooth-hover"
        >
          SIGN UP
        </button>
        <br/>
        <span id="privacy">We respect your privacy</span>
      </div>
    </div>
  );
}

export default SocialBanner;
