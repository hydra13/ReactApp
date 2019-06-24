import './ProfileBio.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProfileBio extends Component {
    render() {
        const {name, description} = this.props;
        return (
            <div className="profile-bio">
                <p>
                    <span className="profile-real-name">{name}</span> {description}
                </p>
            </div>
        )
    }
}

ProfileBio.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
}