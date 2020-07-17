import React from "react"
import AddsongInput from "./AddSongInput"
import AddArtistInput from "./AddArtistInput"
import AddGenreInput from "./AddGenreInput"
import AddRatingInput from "./AddRatingInput"

function SongList(props) {
    return (
        <div>
             <AddsongInput onSubmit={props.addGroceryHandler} />
             <AddArtistInput onSubmit={props.addGroceryHandler} />
             <AddGenreInput onSubmit={props.addGroceryHandler} />
             <AddRatingInput onSubmit={props.addGroceryHandler} />
        </div>
    )
}

export default SongList