import React from 'react'
import { render } from 'react-dom'
import { P1 } from './app/scripts/components/P1'

window.React = React

render(
  <P1 />,
  document.getElementById('root')
);
