import React, {Component} from "react"
import FormComponent from "./FormComponent"

class Form extends Component {
    constructor() {
        super()
        this.state = [{
            Song: "",
            Artist: "",
            Genre: "",
            Rating: ""
        }]
        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    handleSongChange (evt) {
        this.setState({ Song: evt.target.value });
      }
      
    handleArtistChange (evt) {
        this.setState({ Artist: evt.target.value });
      }
    
    handleGenreChange (evt) {
        this.setState({ Genre: evt.target.value });
      }
      
    handleRatingChange (evt) {
        this.setState({ Rating: evt.target.value });
      }
    
    //   state = {
    //     input: ""
    //   };
    
    //   render() {
    //     const onInput = event => {
    //       this.setState({
    //         input: event.target.value
    //       });
    //     };
    
    //     const onSubmit = e => {
    //       e.preventDefault();
    //       this.props.onSubmit(this.state.input);
    //       this.setState({
    //         input: ""
    //       });
    //     };
    
    render() {
        return(
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default Form
