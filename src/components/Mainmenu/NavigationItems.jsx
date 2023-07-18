// import { useNavigate } from "react-router-dom";
import Style from "../Navigationmodules/Style";
import { useState } from "react";
// import { Link } from "react-router-dom";

const NavigationItems = (props) =>{
    const [showStyle, setShowStyle] = useState(false)
    // const navigate = useNavigate();
    const items_list=[
        {
            name:'Change Display Name',
            id:'name',
            component: null,
            // route_to:null,
        },
        {
            name:'Options',
            id:'options',
            component: null,
            // route_to:null,
        },
        {
            name:'Hand Rankings',
            id:'ranking',
            component: null,
            // route_to:null,
        },
        {
            name:'Choose Player\'s Style',
            id:'style',
            component: Style,
            // route_to:'/style'
            // route_to:() => {navigate('/style',{state:JSON.stringify({opponents:props.opponents,
            //                                         me:props.me, 
            //                                         setOpponents: props.setOpponents})})},
        },
        {
            name:'Choose Player\'s Type',
            id:'type',
            component: null,
            // route_to:null,
        },
        {
            name:'Choose Player\'s Position',
            id:'position',
            component: null,
            // route_to:null,
        },
    ];
    const handleClick = (component_id) => {
        console.log("Ihave been invoked")
        if(component_id === 'style'){
            props.setShowHeader(false)
            setShowStyle(true)
        }
    }
    console.log(showStyle)
    return (
        !showStyle?(
            <div className="main-menu-items">
            {
                items_list.map((item) => (
                    // <Link to={item.route_to} state={{opponents:props.opponents,
                    //     me:props.me,
                    //      updateOpp:props.updateOpp }}>
                    //     <div className={"main-menu-item" + " " + item.id} key={item.id}>
                    //         <p className="heading-font">{item.name}</p>
                    //     </div>
                    // </Link>
                    <div className={"main-menu-item" + " " + item.id} key={item.id} role="button" onClick={() => handleClick(item.id)}>
                        <p className="heading-font">{item.name}</p>
                    </div>
                ))
            }
        </div>
        ) : (
            <>

                <Style opponents={props.opponents} me={props.me} updateOpp={props.updateOpp}></Style>
            </>
        )
    )

}

export default NavigationItems;