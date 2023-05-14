import React, { Component } from 'react'
import "./Form.css";

class Form extends Component {
    state = {
        Name: "",
        Email: "",
        Subject: "",
        Message: ""
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (

            <form action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="b43d4a41-c59a-4480-ab29-535e307535e6"></input>

                <h1>Request Form </h1>

                <h5> Feel free to get in touch with me with anything related to
                    CODE.  </h5>

                <label>Name: </label>
                <input onChange={this.handleChange} type="text" name={this.state.Name} />

                <br></br>

                <label>Email: </label>
                <input onChange={this.handleChange} type="text" name={this.state.Email} />

                <br></br>

                <label>Subject: </label>
                <input onChange={this.handleChange} type="text" name={this.state.Subject} />

                <br></br>

                <label>Message: </label>
                <input onChange={this.handleChange} textarea="text" name={this.state.Message} />

                <br></br>
                <button type="submit"> Send </button>
            </form>

        )
    }
}




export default Form;