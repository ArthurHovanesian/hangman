import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import App from '../App/App.jsx';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/app" component={App} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router;
