import './assets/global.scss'

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import { Auth } from "components/Auth";
import { Profile } from 'components/Profile';
import { Modal } from './components/Modal';
import { GalleryContainer } from 'containers/GalleryContainer';

import { profile } from './profile';

class App extends Component {
    state = { token: localStorage.getItem('token'), user: null, isModalVisible: false }

    handleSaveDataFromServer = ({ token, user }) => {
        this.setState({ token, user }, () => {
            localStorage.setItem('token', token);
        });
    }

    handleSignOut = (event) => {
        this.setState({ token: '' }, () => {
            localStorage.setItem('token', null);
        });
        event.preventDefaule();
    }

    handleModalClose = () => {
        this.setState({
            isModalVisible: false
        })
    }

    render() {
        const { token, user, isModalVisible } = this.state;
        return (
            <Fragment>
                {!token && <Auth onSaveToken={this.handleSaveDataFromServer} />}
                {token && <div className="container">
                    <header>
                        <Profile profile={profile} />
                    </header>
                    <main>
                        <GalleryContainer token={token} />
                    </main>
                    {isModalVisible && <Modal onClose={this.handleModalClose} title="Testing">
                        <div></div>
                    </Modal>}
                </div>}
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));