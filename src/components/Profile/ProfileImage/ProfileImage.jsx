import './ProfileImage.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProfileImage extends Component {
    render() {
        const {image} = this.props;
        return (
            <div className="profile-image">
                <img src={image} alt="" />
            </div>
        )
    }
}

ProfileImage.propTypes = {
    image: PropTypes.string
}