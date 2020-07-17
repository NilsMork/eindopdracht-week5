import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const listItems = props.listItems.map((item) => <ListItem key={item.id} item={item} />)


    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    ); 
}


export default List