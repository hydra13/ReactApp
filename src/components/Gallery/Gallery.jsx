import './Gallery.scss';

import React from 'react';

import { ImageBox } from 'components/ImageBox'

export function Gallery(props) {
    const { pictures, renderItem } = props;

    const renderItemDefault = (picture) => {
        return (
            <ImageBox key={picture.id} {...picture} />
        )
    }

    return (
        <div className="gallery">
            {
                pictures.map(renderItem ? renderItem : renderItemDefault)
            }
        </div>
    )
}