import React from "react"
import SongList from "./components/SongList"

class Container extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            songItems: []
        }

    }

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

    render() {
        return (
            <div>
                <SongList SongItems={this.state.songItems} addSongHandler={this.addSongItem}/> 
            </div>
        )
    }
}

export default Container