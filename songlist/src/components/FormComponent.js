import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                    name="Song" 
                    value={props.data.Song} 
                    onChange={props.handleSongChange} 
                    placeholder="Song" 
                />
                <br />
                
                <input 
                    name="Artist" 
                    value={props.data.Artist}
                    onChange={props.handleArtistChange} 
                    placeholder="Artist" 
                />
                <br />
                
                <select 
                    value={props.data.Genre} 
                    name="Genre" 
                    onChange={props.handleGenreChange}
                >
                    <option value=""></option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="blues">Blues</option>
                    <option value="jazz">Jazz</option>
                </select>
                
                <br />

                <select 
                    value={props.data.Rating} 
                    name="Rating" 
                    onChange={props.handleRatingChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                
                <br />
                
    
                
                <button>Submit</button>
            </form>
            <p>Song: {props.data.Song}</p>
            <p>Artist: {props.data.Artist}</p>
            <p>Genre: {props.data.Genre}</p>
            <p>Your rating: {props.data.Rating}</p>
        
            
        </main>
    )
}

export default FormComponent