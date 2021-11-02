// import logo from './logo.svg';
import '../App.css';

function Nav(props) {
  return (
    <div 
      // className={`nav ${
      //   props.enableNavAnim ? (
      //     props.showNav ? "show-header" : "hide-header"
      //   ) : (
      //     "initial-header"
      //   )
      // }`}
      className={`nav ${
        props.enableNavAnim ? (
          props.showNav ? "show-header" : "hide-header"
        ) : (
          "initial-header"
        )
      }`}
    >
      <div id="nav-container">
        <div className="sos-logo-float-up">
          <button id="sos-logo" className="float-up"/>
        </div>
        <div className="nav-links-float-up">
          <div id="nav-links-container" className="float-up">
            <button className="nav-link">TEAM</button>
            <button className="nav-link">VALUES</button>
            <button className="nav-link">PRESS</button>
          </div>
        </div>
        <div id="give-sos-float-up">
          <button id="give-sos" className="float-up">#GiveSOS</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
