import React, { Component } from 'react'

export default class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state={
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password_confirmation: ""
        }

        this.handleInputChange  = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {firstName, lastName, email, password, password_confirmation} = this.state
            return (
                <form>
                  <input
                    value={firstName}
                    onChange={this.handleInputChange}
                    placeholder="First name"
                    type="text"
                    name="firstName"
                    required
                  />
                  <input
                    value={lastName}
                    onChange={this.handleInputChange}
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    required
                  />
                  <input
                    value={email}
                    onChange={this.handleInputChange}
                    placeholder="Email address"
                    type="email"
                    name="email"
                    required
                  />
                  <input
                    value={password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                    type="password"
                    name="password"
                    required
                  />
                  <input
                    value={password_confirmation}
                    onChange={this.handleInputChange}
                    placeholder="Password Confirmation"
                    type="password"
                    name="password_confirmation"
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
        )
    }
}
