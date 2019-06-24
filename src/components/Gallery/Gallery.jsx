import './Gallery.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageBox } from 'components/ImageBox'

export class Gallery extends Component {
    state = { pictures: [] }

    componentDidMount() {
        const { token } = this.props;
        fetch('http://localhost:8888/api/photos', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                console.dir(response);
                if (!response.ok) {
                    throw new Error('Error! Cannot get photos');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ pictures: data.photos });
            })
    }

    render() {
        const { pictures } = this.state;
        return (
            <div className="gallery">
                {
                    pictures.map(picture => <ImageBox key={picture._id} image={picture.image} likes={picture.likes.length} comments={picture.comments.length} />)
                }
            </div>
        )
    }
}

Gallery.propTypes = {
    token: PropTypes.string
}