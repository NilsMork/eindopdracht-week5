import React from 'react'

class AddRatingInput extends React.Component {
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
            <select value={this.state.inputValue} onChange={this.handleChange} />
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <button onClick={() => this.props.onClickHandler(this.state.inputValue)}>Submit</button>
        </div>
    )
}
}

export default AddRatingInput