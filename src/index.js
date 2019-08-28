import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './components/Admin/admin';
import News from './components/News/news';
import Detail from './components/NewsDetail/detail';
import Error from './components/404/error';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Admin} />
                <Route exact path="/news" component={News} />
                <Route path="/news/:id" component={Detail} />
                <Route path='*' component={Error} />
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
