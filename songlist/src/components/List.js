import React from "react"
import ListItem from "./ListItem"

function List(props) {
//////////////
// const listItems & <ul>{listitems} weg commenten dan is de app zichtbaar in de browser
////////////////
    const listItems = props.listItems.map((item) => <ListItem key={item.id} item={item} />)


    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    ); 
}


export default List