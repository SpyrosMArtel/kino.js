import { Provider } from 'react-redux';
import configureStore from './modules';
import MainContainer from './containers/main/main';
import React from 'react';
import { render } from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: { useNextVariants: true,},
    palette: {
        primary: {500: '#FAEBD7'},
    }
});

const store = configureStore();

render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <MainContainer />
        </MuiThemeProvider>
    </Provider>,
    document.querySelector('#app')
);
