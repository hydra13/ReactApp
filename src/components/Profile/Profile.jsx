import './Profile.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ProfileImage } from './ProfileImage';
import { ProfileSettings } from './ProfileSettings';
import { ProfileStatistics } from './ProfileStatistics';
import { ProfileBio } from './ProfileBio';

export class Profile extends Component {
    render() {
        const { profile } = this.props;
        return (
            <div className="profile">
                <ProfileImage image={profile.image} />
                <ProfileSettings username={profile.username} />
                <ProfileStatistics
                posts={profile.statistics.posts}
                followers={profile.statistics.followers}
                following={profile.statistics.following} />
                <ProfileBio 
                name={profile.name} 
                description={profile.description} />
            </div>
        )
    }
}

Profile.propTypes = {
    profile: PropTypes.object
}