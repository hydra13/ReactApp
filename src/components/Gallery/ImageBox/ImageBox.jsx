import './ImageBox.scss';

import React, { Component } from 'react';

import { CommentsCounter } from './CommentsCounter';

export class ImageBox extends Component {
    render() {
        const { image, likes, comments } = this.props;
        return (
            <div className="gallery-item" tabIndex="0">
                <img src={image}
                    className="gallery-image" alt="" />
                {/*
                <div class="gallery-item-type">
                    <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
                </div>
                */}
                {/*
                <div class="gallery-item-type">
                    <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>
                </div>
                */}
                <div className="gallery-item-info">
                    <ul>
                        <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart"
                            aria-hidden="true"></i> {likes}</li>
                        <CommentsCounter comments={comments} />
                    </ul>
                </div>
            </div>
        );
    }
}