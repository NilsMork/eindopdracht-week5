import React from "react"
import SongList from "./components/SongList"

class Container extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            songItems: []
        }

    }

    // array songs = []
    // array artists = []
    // etc
    // array allItems = array Songs + array artists

    addSongItem = (value) => {
        console.log(value);
        const itemObject = {
            id: this.state.songItems.length,
            title: value
        }
        this.setState({
            songItems: [...this.state.songItems, itemObject]
        })
    }

    // addArtistItem = (value) => {
    //     console.log(value);
    //     const itemObject = {
    //         id: this.state.artistItems.length,
    //         title: value
    //     }
    //     this.setState({
    //         artistItems: [...this.state.artistItems, itemObject]
    //     })
    // }

    render() {
        return (
            <div>
                <SongList SongItems={this.state.songItems} addSongHandler={this.addSongItem}/> 
            </div>
        )
    }
}

export default Container