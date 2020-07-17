import React from "react"
import AddsongInput from "./AddSongInput"
import AddArtistInput from "./AddArtistInput"
import AddGenreInput from "./AddGenreInput"
import AddRatingInput from "./AddRatingInput"
import List from "./List"

function SongList(props) {
    return (
        <div>
             <AddsongInput onSubmit={props.addItemHandler} />
             <AddArtistInput onSubmit={props.addItemHandler} />
             <AddGenreInput onSubmit={props.addItemHandler} />
             <AddRatingInput onSubmit={props.addItemHandler} />
             <button onClick={() => this.props.onClickHandler(this.state.inputValue)}>Submit</button>
             <List listItems={props.songItems} />
        </div>
    )
}

export default SongList