import React from 'react';
import { render } from 'react-dom';
import HomeContainer from './containers/home/home';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import configureStore, { history } from './modules';

const store = configureStore();

const theme = createMuiTheme({
    typography: { useNextVariants: true,},
    palette: {
        primary: {500: '#FAEBD7'},
    }
});

render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                <HomeContainer />
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>,
    document.querySelector('#app')
);
