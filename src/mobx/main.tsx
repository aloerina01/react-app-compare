import '../../scss/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import Usecase from './usecase';
import Container from './view/Container';
import ItemListStore from './store/ItemListStore';

// TODO: 移動する
export type ApplicationStores = {
  ItemListStore: ItemListStore
}
// create store
const stores: ApplicationStores = {
  ItemListStore: new ItemListStore()
};

// init action
Usecase.initialize(stores.ItemListStore); // TODO: DI functions

// inject & render
render(
  <Provider {...stores} >
    <Container />
  </Provider>, 
  document.querySelector('#app')
);