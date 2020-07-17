import React from "react"

class FormComponent extends React.Component {
    constructor() {
        super()

        state = {
            input: ""
    };
  
    render() {
      const onInput = event => {
        this.setState({
          input: event.target.value
        });
      };
    
      const onSubmit = add => {
        add.preventDefault();
        this.props.onSubmit(this.state.input);
        this.setState({
          input: ""
        });
      };

    return (
        
            <form onSubmit={onSubmit}>
                <input 
                    name="Song" 
                    value={this.state.song} 
                    onChange={onInput} 
                    placeholder="Song" 
                />
                <br />
                
                <input 
                    name="Artist" 
                    value={this.state.artist}
                    onChange={onInput} 
                    placeholder="Artist" 
                />
                <br />
                
                <select 
                    value={this.state.genre} 
                    name="Genre" 
                    onChange={onInput}
                >
                    <option value=""></option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="blues">Blues</option>
                    <option value="jazz">Jazz</option>
                </select>
                
                <br />

                <select 
                    value={this.state.rating} 
                    name="Rating" 
                    onChange={onInput}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                
                <br />
    
                <button type="submit">Submit</button>
            </form>
            /* <p>Song: {props.data.Song}</p>
            <p>Artist: {props.data.Artist}</p>
            <p>Genre: {props.data.Genre}</p>
            <p>Your rating: {props.data.Rating}</p> */
        
            
    )}
 }
  }


export default FormComponent