import './Gallery.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageBox } from './ImageBox'

export class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                {
                    this.props.pictures.map((picture, idx) => <ImageBox key={idx} {...picture} />)
                }
            </div>
        )
    }
}

Gallery.propTypes = {
    pictures: PropTypes.array
}