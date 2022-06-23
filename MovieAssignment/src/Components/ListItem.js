import React from 'react'

function ListItem(props)
{
    return <li className="listItem"> {props.name}
        <div>
            <button type="submit" onClick={()=> {props.setIndex(props.index); props.setActor(true)}}>Actors</button>
            <button type="submit" onClick={()=> {props.setIndex(props.index); props.setActor(false)}}>Film Data</button>
        </div>    
        </li>;
}

export default ListItem;