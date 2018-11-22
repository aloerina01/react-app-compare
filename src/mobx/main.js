import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Usecase from './usecase';
import Container from './view/Container';
import ItemListStore from './store/ItemListStore';

// create store
const stores = {
  itemListStore: new ItemListStore()
};

// init action
Usecase.initialize();

// inject & render
ReactDOM.render(
  <Provider {...stores} >
    <Container />
  </Provider>, 
  document.querySelector('#app')
);