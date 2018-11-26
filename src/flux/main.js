import '../../scss/main.scss';
import React from 'react';
import { render } from 'react-dom';
import ActionCreator from './action';
import IndexContainer from './container/IndexContainer';

// create stores

// initialize action
ActionCreator.initialize();

// render
render(
  <div>
    <IndexContainer />
  </div>,
  document.querySelector('#app')
);