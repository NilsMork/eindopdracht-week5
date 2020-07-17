import React from 'react'

class AddsongInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            inputValue: "",
        }
    }


handleChange = (event) => {
    console.log(event.target.value)
    this.setState({inputValue: event.target.value});
}

render() {
    return(
        <div>
            <input placeholder="song" type="text" value={this.state.inputValue} onChange={this.handleChange} />
            <button onClick={() => this.props.onClickHandler(this.state.inputValue)}>Submit</button>
        </div>
    )
}
}

export default AddsongInput