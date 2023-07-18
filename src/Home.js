import NavigationItems from './components/Mainmenu/NavigationItems';
import PokerMain from './components/PokerMain';
import {useState, useEffect} from 'react';
import Header from './components/Header';
function Home(){
        const [showHeader, setShowHeader] = useState(true)
        const [opponents, setOpponents]=useState( () => {
            const savedState = localStorage.getItem("opponentsString");
            const opponentsParsed = JSON.parse(savedState);
            return opponentsParsed || [{
                name:'Micheal',
                card1:'',
                card2:'',
                personalityType:'Tight-passive',
                profile_pic_src:'p1.png',
            },
            {
                name:'John',
                card1:'',
                card2:'',
                personalityType:'Loose-passive',
                profile_pic_src:'p2.png',
            },
            {
                name:'Jay',
                card1:'',
                card2:'',
                personalityType:'Tight-passive',
                profile_pic_src:'p3.png',
            },
            {
                name:'Stan',
                card1:'',
                card2:'',
                personalityType:'Tight-aggressive',
                profile_pic_src:'p4.jpeg',
            },
            {
                name:'Jack',
                card1:'',
                card2:'',
                personalityType:'Loose-aggressive',
                profile_pic_src:'p5.jpeg',
            },
            {
                name:'Lahari',
                card1:'',
                card2:'',
                personalityType:'Loose-passive',
                profile_pic_src:'p6.jpeg',
            }]
        }
    );

    useEffect(() => {
        localStorage.setItem("opponentsString", JSON.stringify(opponents));
      }, [opponents]);

    // useEffect(() => {
    //     // Load saved state from localStorage
    //     const savedOpponenets = localStorage.getItem('opponents');
    //     if (savedOpponenets) {
    //         setOpponents(savedOpponenets);
    //     }
    //   }, []);
    
    //   useEffect(() => {
    //     // Save state to localStorage whenever the counter changes
    //     localStorage.setItem('opponents', opponents);
    //   }, [opponents]);

    function updateOpp(newValue){
        setOpponents(newValue)
    }

    // function updateMe(newValue){
    //     setMe(newValue)
    // }

    const [selected, setSelected] = useState(true);
    function onClick(){
      if(selected){
          setSelected(false);
      } else{
         setSelected(true);
      }
    }

    const getCards = () =>{
        fetch('/api/get-cards')
        .then(response => response.json())
        .then( data => {
            let newOppArr = [...opponents]
            for (let i = 0; i < newOppArr.length; i++) {
                newOppArr[i].card1 = data[i][0]
                newOppArr[i].card2 = data[i][1]
            }
            setOpponents(newOppArr)
        })
        .catch(error => {
            console.error(error)
        })
    }

    if(opponents[0].card1 === ''){
        getCards()
    }

    return(
        <div className="App">
        {showHeader && <Header onClick={onClick} selected={selected} showHamburger={true}></Header>}
        {
          !selected?(
            <NavigationItems opponents={opponents} updateOpp={updateOpp} setShowHeader={setShowHeader}></NavigationItems>
          ) : (
            <>
                <PokerMain opponents={opponents}></PokerMain>
                <div className='deal-btn' role="button" onClick={getCards}><p className="heading-font">DEAL</p></div>
            </>
          )
        }
      </div>
    )
}

export default Home
