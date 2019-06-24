import './ProfileSettings.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProfileSettings extends Component {
    render() {
        const {username} = this.props;
        return (
            <div className="profile-user-settings">
                <h1 className="profile-user-name">{username}</h1>
                <button className="btn profile-edit-btn">Edit Profile</button>
                <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog"
                    aria-hidden="true"></i></button>
            </div>
        )
    }
}

ProfileSettings.propTypes = {
    username: PropTypes.string
}