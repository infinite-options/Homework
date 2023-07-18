import Header from "../Header"
import { useState } from "react"
// import { useCallback } from "react"
// import { useLocation } from "react-router-dom";

function Style(props){
    // const location = useLocation()
    const [select, setSelect] = useState(false)
    const[ind, updateInd] = useState(-1)
    // const props = JSON.parse(location.state)
    const opponents = props.opponents
    // console.log("----FROM STYLE-----")
    // console.log(props)
    // console.log("---------")


    const imageNames = []
    opponents.map((player) =>{
        imageNames.push(require('../../images/'+player.profile_pic_src))
    })

    function manageClick(selectKeyVal, index){
        updateInd(index)
        setSelect(selectKeyVal);
    }

    function changestate(selectKeyVal, index, style){
        let newArr = [...opponents]
        newArr[index].personalityType = style;
        // useCallback(() => {
        //     props.updateOpp(() => [...opponents])
        // },[newArr])
        // () => setCount(current => current + 1);
        props.updateOpp(newArr)
        setSelect(selectKeyVal)
    }

    return(
        <>
            <Header onClick='' selected='' showHamburger={false}></Header>

        {
            !select ? (
                <>
                <p className="heading-font each-nav-item">Choose Player's Style</p>
                <div className="display-styles">
                    {
                        opponents.map((player, index) =>([player,imageNames[index]])).map((player_img,index) =>(
                        <div className="player-style" key={player_img[0].name}>
                            <p>{player_img[0].name}</p>
                            <img className="style-image" src={player_img[1]} alt="profile picture unavailable"></img>
                            <div className="style-name heading-font" key={player_img[0].name}>{player_img[0].personalityType}</div>
                            <div className="style-change-button" key={player_img[0].card1} role="button" 
                                onClick={() => manageClick(true, index)}></div>
                        </div>
                        ))
                    }
                    <div className="Styles-Name"></div> 
                </div>
                </>
            ) : (
                <div className="choose-style-dialog">
                    <p className="heading-font each-nav-item">Choose {opponents[ind].name}'s Style</p>
                    <div className="change-style-btn btn1" role="button" onClick={() => changestate(false,ind,"Tight-passive")}>
                        <p className="change-style-btn-txt">Tight-passive</p>
                    </div>
                    <div className="change-style-btn btn2" role="button"  onClick={() => changestate(false,ind,"Loose-passive")}>
                        <p className="change-style-btn-txt">Loose-passive</p>
                    </div>
                    <div className="change-style-btn btn3" role="button"  onClick={() => changestate(false,ind,"Tight-aggressive")}>
                        <p className="change-style-btn-txt">Tight-aggressive</p>
                    </div>
                    <div className="change-style-btn btn4" role="button"  onClick={() => changestate(false,ind,"Loose-aggressive")}>
                        <p className="change-style-btn-txt">Loose-aggressive</p>
                    </div>
                </div>
            )
        }

        </>
    )
}


export default Style