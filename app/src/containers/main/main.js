import React from 'react';
import { connect } from 'react-redux';

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
function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);