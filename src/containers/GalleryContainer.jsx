import React, { Component, Fragment } from 'react';

import { Gallery } from 'components/Gallery';
import { LoadIndication } from 'components/LoadIndication';

export class GalleryContainer extends Component {
    state = { pictures: [], loading: false }

    componentDidMount() {
        const { token } = this.props;
        this.setState({ loading: true });
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
                this.setState({
                    loading: false,
                    pictures: data.photos.map(photo => ({ image: photo.image, likes: photo.likes.length, comments: photo.comments.length, id: photo._id }))
                });
            })
            .catch(err => {
                this.setState({ loading: false });
                console.log(err);
            })
    }

    render() {
        const { pictures, loading } = this.state;
        return (
            <Fragment>
                {pictures.length > 0 && <Gallery pictures={this.state.pictures} />}
                {loading && <LoadIndication />}
            </Fragment>
        );
    }
}