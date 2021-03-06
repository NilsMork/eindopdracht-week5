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
            <select value={this.state.inputValue} onChange={this.handleChange} >
                <option value=""></option>
                <option value="Rock">Rock</option>
                <option value="Blues">Blues</option>
                <option value="Pop">Pop</option>
                <option value="Jazz">Jazz</option>
            </select>
        </div>
    )
}
}

export default AddRatingInput