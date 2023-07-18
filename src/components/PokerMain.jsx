// import p6 from './../images/p6.jpeg';

function PokerMain(props){
    const opponents = props.opponents;
    // const me = props.me;
    const imageNames = []
    const card1=[]
    const card2 = []
    opponents.map((player) =>{
        imageNames.push(require('../images/'+player.profile_pic_src))
        if(player.card1 !== ''){
            card1.push(require('./../images/cards/'+player.card1+'.png'))
        }
        if(player.card2 !== ''){
            card2.push(require('./../images/cards/'+player.card2+'.png'))
        }
    })

    // if(me.card1 !== ''){
    //     card1.push('./../images/cards/'+me.card1+'.png')
    // }
    // if(me.card2 !== ''){
    //     card1.push('./../images/cards/'+me.card2+'.png')
    // }

    return(
        <>
        {
            opponents.map((player, index) =>([player,imageNames[index]])).map((player_img, index) =>(
                <div className={"each-profile-pk-main"+ " " +player_img[0].name}>
                    <img className="style-image" src={player_img[1]} alt="profile picture unavailable"></img>
                    <p>{player_img[0].name}</p>
                    <img className="style-card-image" src={card1[index]} alt=""></img>
                    <img className="style-card-image" src={card2[index]} alt=""></img>
                    {/* <p>Card1: {player_img[0].card1}</p>
                    <p>Card2: {player_img[0].card2}</p> */}
                    <p>{player_img[0].personalityType}</p>
                </div>
            ))
        }
        {/* {

                <div>
                    <img className="style-image" src={p6} alt="profile picture unavailable"></img>
                    <p>{me.name}</p>
                    <img className="style-card-image" src={card1[5]} alt=""></img>
                    <img className="style-card-image" src={card2[5]} alt=""></img>
                    <p>{me.personalityType}</p>
                </div>
        } */}
        </>
    )
}

export default PokerMain;