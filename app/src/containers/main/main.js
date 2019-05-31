import React from 'react';

class MainContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <main id="page-wrapper" role="main">
                    <h1>Kino.js</h1>
                </main>
            </React.Fragment>
        );
    }
}
export default MainContainer;