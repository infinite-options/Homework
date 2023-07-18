import Hamburger from "./Mainmenu/Hamburger";

function Header(props){
    const {onClick, selected, showHamburger} = props
    return(
    <header className="App-header">
        <div className="App-title">
            <h1>PoKER</h1>
        </div>
          {
            showHamburger?(
                <Hamburger onClick={onClick} selected={selected}></Hamburger>
            ) : (
                <></>
            )
          }
      </header>
    )
}

export default Header;