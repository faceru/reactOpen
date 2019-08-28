import React, {Fragment} from 'react';

import './App.css';
import Header from './components/Header/header'
const App = ({children}) => {
  return (
    <Fragment>
      <Header/>
      {children}
    </Fragment>

  );
}

export default App;
