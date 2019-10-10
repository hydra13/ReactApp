
import './Auth.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Auth extends Component {

    state = { username: 'Garrick_Hyatt15@yahoo.com', password: 'qwerty' };

    handleSighIn = () => {
        const { username, password } = this.state;
        fetch('http://localhost:8888/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Wrong login/pass');
                }
                return response.json();
            })
            .then(data => {
                this.props.onSaveToken(data);
            })
    }

    handleChangeInput = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="container sign-in-form">
                <h1 className="logo">Instagram</h1>
                <input type="text" name="username" id="username" onChange={this.handleChangeInput} value={username}></input> <br />
                <input type="password" name="password" id="password" onChange={this.handleChangeInput} value={password}></input> <br />
                <button id="submit-btn" name="submit" onClick={this.handleSighIn} >Sign In</button>
            </div>
        )
    }
}

Component.propTypes = {
    onSaveToken: PropTypes.func
}
