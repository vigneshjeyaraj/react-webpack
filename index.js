import React from 'react'
import { render } from 'react-dom'
import { Home } from './app/scripts/components/Home'
import { ContactUs } from './app/scripts/components/ContactUs'
import { About } from './app/scripts/components/About'
import { Router, Route, hashHistory} from 'react-router'
require('./app/styles/index.scss');

window.React = React

render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="contact-us" component={ContactUs}/>
    <Route path="about" component={About}/>
  </Router>,
  document.getElementById('root')
);
