import React, {Fragment} from 'react';
import './App.css';
import UpdateResource from './containers/UpdateResource';
import News from './components/News';
import Detail from './components/NewsDetail';
import ResourcesList from './containers/ResourcesList';
import Error from 'components/404';
import NewResource from 'containers/NewResource';
import {Switch, Route} from 'react-router-dom';
import Header from 'components/Header';

const App = () => {
  return (
    <Fragment >
      <Header/>
      <Switch>
          <Route exact path="/admin" component={ResourcesList} />
          <Route path="/admin/:id" component={UpdateResource} />
          <Route exact path="/news" component={News} />
          <Route path="/news/:id" component={Detail} />
          <Route path="/newresource" component={NewResource} />
          <Route path='*' component={Error} />
      </Switch>
    </Fragment>

  );
}

export default App;
