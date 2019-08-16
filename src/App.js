import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Global, css } from '@emotion/core';

import Header from './header/Header';
import Home from './Home';
import About from './About';

const globalStyles = css`
  body, h1 {
    font-family: sans-serif;
    font-weight: lighter;
    margin: 0;
  }
  
  a {
    color: black;
    text-decoration: none;
    font-weight: lighter;
  }
`;


const App = () => (
  <>
    <Global styles={globalStyles}/>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </>
);

export default App;
