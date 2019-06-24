import './ProfileStatistics.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProfileStatistics extends Component {
    render() {
        const {posts, followers, following} = this.props;
        return (
            <div className="profile-stats">
                <ul>
                    <li><span className="profile-stat-count">{posts}</span> posts</li>
                    <li><span className="profile-stat-count">{followers}</span> followers</li>
                    <li><span className="profile-stat-count">{following}</span> following</li>
                </ul>
            </div>
        )
    }
}

ProfileStatistics.propTypes = {
    posts: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number
}