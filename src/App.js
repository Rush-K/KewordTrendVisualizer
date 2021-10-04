import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Main from './components/Main';
import Visualizer from './components/Visualizer';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={Main} />
          <Route path = '/visualizer' component={Visualizer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;