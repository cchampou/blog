import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Global, css } from '@emotion/core';

import './i18n';

import Header from './header/Header';
import Home from './Home';
import About from './About';
import Footer from './footer/Footer';

const globalStyles = css`
  body, h1, h2, h3, h4, h5, h6, #root {
    font-family: sans-serif;
    font-weight: lighter;
    margin: 0;
  }
  
  body, #root {
    margin: 0;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    width: 100vw;
  }
  
  #root {
    padding-bottom: 3rem;
  }
  
  a {
    color: inherit;
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
    <Footer/>
  </>
);

export default App;
