import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

ReactDOM.render((
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <HashRouter>
                <App/>
            </HashRouter>
        </MuiThemeProvider>
        
    </Provider>
    
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
