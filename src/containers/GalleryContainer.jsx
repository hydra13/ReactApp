import React, { Component, Fragment } from 'react';

import { Gallery } from 'components/Gallery';
import { LoadIndication } from 'components/LoadIndication';

export class GalleryContainer extends Component {
    state = { pictures: [], loading: false, page: 1, total: null }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        const { token } = this.props;
        const { page } = this.state;
        this.setState({ loading: true });
        fetch(`http://localhost:8888/api/photos?page=${page}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error! Cannot get photos');
                }
                return response.json();
            })
            .then(data => {
                this.setState(prevState => ({
                    loading: false,
                    page: prevState.page + 1,
                    total: data.total,
                    pictures: prevState.pictures.concat(
                        data.photos.map(photo => ({ image: photo.image, likes: photo.likes.length, comments: photo.comments.length, id: photo._id }))
                    ),
                }));
            })
            .catch(err => {
                this.setState({ loading: false });
                console.log(err);
            })
    }

    isShouldLoad = () => {
        const { total, pictures, loading } = this.state;

        return (total != null || total > pictures.length) && !loading;
    }

    handleScroll = () => {
        if (this.isShouldLoad()) {
            this.loadItems();
        }
    }

    render() {
        const { pictures, loading } = this.state;
        return (
            <Fragment>
                {pictures.length > 0 && <Gallery onScroll={this.handleScroll} pictures={this.state.pictures} />}
                {loading && <LoadIndication />}
            </Fragment>
        );
    }
}