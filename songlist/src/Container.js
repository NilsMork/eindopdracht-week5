import React from "react"
import SongList from "./components/SongList"

class Container extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            songItems: []
        }

    }

    addSongItem = (title) => {
        console.log(title);
        const itemObject = {
            id: this.state.songItems.length + 1,
            title: title
        }
        this.setState({
            groveryItems: [...this.state.songItems, itemObject]
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