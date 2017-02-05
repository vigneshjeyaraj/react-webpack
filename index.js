import React from 'react'
import { render } from 'react-dom'
import { P1 } from './app/scripts/components/P1'
import { Router, Route, hashHistory} from 'react-router'

window.React = React

render(
  <Router history={hashHistory}>
    <Route path="/" component={P1}/>
  </Router>,
  document.getElementById('root')
);
