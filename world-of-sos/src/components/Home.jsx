// import logo from './logo.svg';
import '../App.css';
import Nav from './Nav';
import SocialBanner from './SocialBanner';
import Footer from './Footer';
import MultiCarousel from './MultiCarousel';
import React, { useEffect, useRef, useState } from "react";
import demoGif from "../assets/Animated.gif";

// first carousel
import coraTampon from "../assets/Cora+-+Tampon.png";
import coraLiner from "../assets/Cora+-+Liner.png";
import recessDeo from "../assets/Recess+-+Deoderant+Wipe.png";
import ursaFaceWipe from "../assets/Ursa+-+Face+Wipe.png";
import ursaFaceBalm from "../assets/Ursa+-+Face+Balm.png";
import megaBabeStick from "../assets/Megababe+-+Thigh+Rescue.png";
import drybarShampoo from "../assets/Drybar+-+Dryshampoo.png";
import heroSunscreen from "../assets/Hero+Cosmetics+-+Force+Shield+Sunscreen.png";
import kosaSport from "../assets/Kosas+-+Lipfuel+Baseline.png";
import hpThong from "../assets/Hanky+Panky.png"
import teletiesPW from "../assets/Teleties+-+Pink_White.png"

// second carousel
import drybar from "../assets/Drybar.png";
import teleties from "../assets/Teleties.png";
import recess from "../assets/Recess.png";
import rco from "../assets/R+Co.png";
import ursaMajor from "../assets/Ursa.png";
import megababe from "../assets/megababe-black+.png";
import korres from "../assets/Korres.png";
import hp from "../assets/Hanky+Panky.png";
import cora from "../assets/Cora.png";
import hero from "../assets/Hero+Cosmetics+-+Black.png";
import fab from "../assets/FAB-Round---Black.png";

// big carousel
import sosBlue from "../assets/WorldOfSOS_Blue-3.jpg";
import bathroom from "../assets/Bathroom.jpg";
import outdoors from "../assets/Outdoors.jpg";

const google = window.google;

function Home() {

  const [offsetY, setOffsetY] = useState(0);
  const [enableNavAnim, setEnableNavAnim] = useState(false);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  function initMap() {
    var locations = [
        ['District Hall', 42.352085, -71.045522],
        ['South Station', 42.352286, -71.055239],
        ['Prudential Shopping Center', 42.348457,-71.082622],
        ['Boston Childrens Hospital', 42.336793,-71.105573],
        ['Fenway Park', 42.3466803,-71.0994065],
        ['For Now, Boston', 42.35362609895682, -71.04686264603642],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(42.35, -71.05),
      zoom: 13,
      mapId: "52809027466e8b5e",
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true
    });

    var infowindow = new google.maps.InfoWindow();
    var image = {
        url: 'https://static1.squarespace.com/static/5ea5ce810e499b6925447843/t/605220bb133f365e9404788f/1615995067872/New+.png',
        scaledSize: new google.maps.Size(20, 20)
    };

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
          icon: image,
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        title: locations[i][0]
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }    
  }

  useEffect(() => {
    initMap();
    console.log("window: ", window);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if(offsetY > 50) {
      setEnableNavAnim(true);
    }
  }, [offsetY]);

  return (
    <div className="home">
      {/* {offsetY < 100 && <Nav/>} */}
      <Nav 
        enableNavAnim={enableNavAnim}
        showNav={offsetY<50}
      />
      {/* <div
        style={{
          border: '1px solid green',
          width: '100px',
          position: 'fixed'
        }}
      >
        {offsetY} -- {Math.round(window.devicePixelRatio * 100)}
      </div> */}
      <div 
        className="home-banner"
        style={{ backgroundSize: `${120 - (offsetY * 0.02)}%` }}
      >
        <div className="gray-filter">
          <div id="wellness-wrapper">
            <div id="wellness-anim-wrapper" className="float-up">
              <h1 id="home-wellness">
                {/* <strong> */}
                  Wellness on-the-go,<br/>
                  reimagined
                {/* </strong> */}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="home-carousel">
        <MultiCarousel
          size={0}
          products={[
            coraTampon,
            coraLiner,
            recessDeo,
            ursaFaceWipe,
            ursaFaceBalm,
            megaBabeStick,
            drybarShampoo,
            heroSunscreen,
            kosaSport,
            hpThong,
            teletiesPW
          ]}
        />
      </div>

      <div className="how-works-container">
        <div id="how-works-left">
          <div id="anim-gif-float-up">
            <img 
              src={demoGif}
              id="anim-gif" 
              className={offsetY > 600 ? "float-up" : "hidden"}
            />
            {/* <svg viewBox="0 0 60 30">
            <path class="st0" d="M15.9,23.7L7.1,15l8.7-8.7" fill="none"></path>
            <path class="st1" d="M52.9,15H8.5" fill="none"></path>
            </svg> */}
          </div>
        </div>
        <div id="how-works-right">
          <div id="designed-for-you-wrapper">
            <div className={offsetY > 600 ? "float-up" : "hidden"}>
              <h1
                id="designed-for-you"
                className="primary-header"
              >
                Designed for you
              </h1>
              <h3>
                Better • Fresher • Brighter •
              </h3>
              <span id="machine-desc">
                Our machines bring you the most convenient and elevated on-the-go 
                retail experience, delivering premium femcare, skincare, haircare, 
                PPE, and beauty products from today’s top brands.
              </span>
            </div>
            <br/>
            <button
              id="how-sos-works-btn"
              // className="smooth-hover"
              className={offsetY > 800 ? "smooth-hover float-up" : "hidden"}
            >
              How SOS works
            </button>
          </div>
        </div>
      </div>

      <div className="home-carousel">
        <MultiCarousel
          size={0}
          products={[
            drybar,
            teleties,
            recess,
            rco,
            ursaMajor,
            megababe,
            korres,
            hp,
            cora,
            hero,
            fab
          ]}
        />
      </div>
      
      <div className="gallery-reel">
        <MultiCarousel
          // size={1}
          products={[
            sosBlue,
            bathroom,
            outdoors
          ]}
        />
      </div>
      <div className="gallery-reel-arrows">
        <button class="gallery-reel-control-btn" data-previous="" aria-label="Previous Slide">
          <div class="arrow-wrapper">
            <svg viewBox="0 0 60 30">
              <path class="st0" d="M15.9,23.7L7.1,15l8.7-8.7" fill="black"></path>
              {/* <path class="st1" d="M52.9,15H8.5" fill="black"></path> */}
              {/* <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" /> */}
            </svg>
            <div id="arrow-line-left"/>
          </div>
        </button>
        <button class="gallery-reel-control-btn" data-next="" aria-label="Next Slide">
          <div class="arrow-wrapper">
            <svg viewBox="0 0 60 30">
              <path d="M44.1,6.3l8.7,8.7l-8.7,8.7" fill="black"></path>
              {/* <path d="M7.1,15h44.4" fill="black"></path> */}
              {/* <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" /> */}
            </svg>
            <div id="arrow-line-right"/>
          </div>
        </button>
      </div>
      {/* <div class="gallery-reel-controls">
        <div class="gallery-reel-control">
          <button class="gallery-reel-control-btn" data-previous="" aria-label="Previous Slide">
            <div class="gallery-reel-control-btn-icon">
              <svg viewBox="0 0 60 30">
              <path class="st0" d="M15.9,23.7L7.1,15l8.7-8.7" fill="black"></path>
              <path class="st1" d="M52.9,15H8.5" fill="black"></path>
              </svg>
            </div>
          </button>
        </div>
        <div class="gallery-reel-control">
          <button class="gallery-reel-control-btn" data-next="" aria-label="Next Slide">
            <div class="gallery-reel-control-btn-icon">
              <svg viewBox="0 0 60 30">
              <path d="M44.1,6.3l8.7,8.7l-8.7,8.7" fill="black"></path>
              <path d="M7.1,15h44.4" fill="black"></path>
              </svg>
            </div>
          </button>
        </div>
      </div> */}

      <div id="our-locations-container">
        <h1 id="our-locations-header">Our Locations</h1>
        <div id="map">
          map
        </div>
        <div id="our-locations-list">
          <div className="our-locations-place">
            <h2 className="our-locations-place-name">Fenway Park</h2>
            <span className="our-locations-place-address">
              4 Jersey Street<br/>
              Boston, MA
            </span>
          </div>
          <div className="our-locations-place">
            <h2 className="our-locations-place-name">South Station</h2>
            <span className="our-locations-place-address">
              700 Atlantic Avenue <br/>
              Boston, MA
            </span>
          </div>
          <div className="our-locations-place">
            <h2 className="our-locations-place-name">Prudential Center</h2>
            <span className="our-locations-place-address">
              800 Boylston Street <br/>
              Boston, MA
            </span>
          </div>
          <div className="our-locations-place">
            <h2 className="our-locations-place-name">Boston Children’s Hospital</h2>
            <span className="our-locations-place-address">
              300 Longwood Avenue <br/>
              Boston, MA
            </span>
          </div>
          <div className="our-locations-place">
            <h2 className="our-locations-place-name">For Now</h2>
            <span className="our-locations-place-address">
              85 Seaport Boulevard<br/>
              Boston, MA
            </span>
          </div>
          <div className="our-locations-place">
            <h2 className="our-locations-place-name">District Hall</h2>
            <span className="our-locations-place-address">
              75 Northern Avenue <br/>
              Boston, MA
            </span>
          </div>
        </div>
      </div>

      <div id="find-us-container">
        <div id="reddish-filter">
          <h1 id="find-us-header">Tell us where you want to find us</h1>
          <span id="find-us-text">
            We want to know where you’d like to find us; 
            your favorite festival, your workplace, home-state airport. 
          </span>
          <br/>
          <button
            id="how-sos-works-btn"
            className="smooth-hover"
          >
            Contact Us
          </button>
        {/* find uswaef */}
        {/* <img 
          id="find-us-img"
          src="https://images.squarespace-cdn.com/content/v1/5ea5ce810e499b6925447843/1615880058027-AL40NWSF60QVTMZR7SYK/danny-howe-bn-D2bCvpik-unsplash.jpg"
          alt=""
        /> */}
        </div>
      </div>

      <div id="discover-our-world-container">
        <h1 className="primary-header">Discover Our World</h1>
        <div id="discover-our-world-content">
          <img 
            src={"https://images.squarespace-cdn.com/content/v1/5ea5ce810e499b6925447843/1593436144459-KIGWNYAPYZZS9J9NKIW1/image-asset.jpeg"} 
            className="discover-our-world-pic"
          />
          <img 
            src={"https://images.squarespace-cdn.com/content/v1/5ea5ce810e499b6925447843/1593267462063-O439OW1YPR8AH5QXZ2SL/image-asset.jpeg"} 
            className="discover-our-world-pic"
          />
          <img 
            src={"https://images.squarespace-cdn.com/content/v1/5ea5ce810e499b6925447843/1593092951471-XBYOM0QFE7VL571WDRWU/image-asset.jpeg"} 
            className="discover-our-world-pic"
          />
          <img 
            src={"https://images.squarespace-cdn.com/content/v1/5ea5ce810e499b6925447843/1592933337857-YLHY0G52GZG2NH730IAL/image-asset.jpeg"} 
            className="discover-our-world-pic"
          />
        </div>
      </div>

      <SocialBanner/>
      <Footer/>
    </div> 
  );
}

export default Home;
