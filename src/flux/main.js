import '../../scss/main.scss';
import React from 'react';
import { render } from 'react-dom';
import ActionCreator from './action';
import Container from './container';
import ItemList from './view/ItemList';

// initialize action
ActionCreator.initialize();

// render
render(
  <div>
    <Container>
      <ItemList />
    </Container>
  </div>,
  document.querySelector('#app')
);