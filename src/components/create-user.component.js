import React, { Component } from 'react'
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        // SET 'THIS' KEYWORD THE CLASS INSTANCE
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            username: this.state.username
        }

        console.log(user)

        // POST TO ADD USER
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create User</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}