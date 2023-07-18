
function Hamburger(props){


    return (
        <>
            {
                props.selected ? (
                    <div className="hamburger" onClick={props.onClick} role="button">
                        <div className="burger burger1"></div>
                        <div className="burger burger2"></div>
                        <div className="burger burger3"></div>
                    </div>
                ) : (
                    <div className="cancel" onClick={props.onClick} role="button">
                        <div className='cross line-1'></div>
                        <div className='cross line-2'></div>
                    </div>
                )
            }
        </>
    )
}

export default Hamburger