import './assets/global.scss'

import React, { Component } from 'react';
import ReactDom from 'react-dom';

//import { ImageBox } from './components/ImageBox';
import { Profile } from './components/Profile';
import { Gallery } from './components/Gallery';
import { LoadIndication } from './components/LoadIndication';
// import { pictures } from './pictures';

class App extends Component {
    render() {
        // <main>
        //         <div className="container">
        //             <div className="gallery">
        //                 {
        //                     pictures.map((picture, idx) => <ImageBox key={idx} {...picture} />)
        //                 }
        //             </div>
        //         </div>
        //     </main>
        return (
            <div className="container">
                <header>
                    <Profile />
                </header>
                <main>
                    <Gallery />
                    <LoadIndication />
                </main>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));