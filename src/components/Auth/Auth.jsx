
import './Auth.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Auth extends Component {

    state = { username: 'Marietta_Von24@gmail.com', password: 'qwerty' };

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
                <img url="./assets/img/hydragram.png" />
                <input type="text" name="username" onChange={this.handleChangeInput} value={username}></input> <br />
                <input type="password" name="password" onChange={this.handleChangeInput} value={password}></input> <br />
                <button name="submit" onClick={this.handleSighIn} >Sign In</button>
            </div>
        )
    }
}

Component.propTypes = {
    onSaveToken: PropTypes.func
}
