import './LikesCounter.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class LikesCounter extends Component {
    render() {
        const { likes } = this.props;
        return (
            <li className="gallery-item-likes">
                <span className="visually-hidden">Likes:</span>
                <i className="fas fa-heart" aria-hidden="true"></i> {likes}
            </li>
        );
    }
}

LikesCounter.propTypes = {
    likes: PropTypes.number
}