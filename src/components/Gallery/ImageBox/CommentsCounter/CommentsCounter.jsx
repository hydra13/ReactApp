import './CommentsCounter.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CommentsCounter extends Component {
    render() {
        const { comments } = this.props;
        return (
            <li className="gallery-item-comments">
                <span className="visually-hidden">Comments:</span>
                <i className="fas fa-comment" aria-hidden="true"></i> {comments}
            </li>
        );
    }
}

CommentsCounter.propTypes = {
    comments: PropTypes.number
}