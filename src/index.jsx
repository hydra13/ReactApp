import './assets/global.scss'

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import { Auth } from "components/Auth";
import { Profile } from 'components/Profile';
import { Gallery } from 'components/Gallery';
import { LoadIndication } from 'components/LoadIndication';

import { profile } from './profile';

class App extends Component {
    state = { token: null, user: null }

    handleSaveDataFromServer = ({ token, user }) => {
        this.setState({ token, user });
    }

    render() {
        const { token, user } = this.state;
        return (
            <Fragment>
                {!token && <Auth onSaveToken={this.handleSaveDataFromServer} />}
                {token && <div className="container">
                    <header>
                        <Profile profile={profile} />
                    </header>
                    <main>
                        <Gallery token={token} />
                        <LoadIndication />
                    </main>
                </div>}
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));