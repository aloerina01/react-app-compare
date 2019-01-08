import '../../scss/main.scss';
import * as React from 'react';
import { render } from 'react-dom';
import Provider from 'mobx-react';
import Usecase from './usecase/index'; // tsのときはindexつけないとエディタにエラー表示が出るのはなぜ？
import Container from './view/Container';
import ItemListStore from './store/ItemListStore';
import { ApplicationStores } from './types';

// create store
const stores: ApplicationStores = {
  itemListStore: new ItemListStore()
};

// init action
Usecase.initialize(stores.itemListStore); // TODO: DI functions

// inject & render
render(
  <Provider {...stores} >
    <Container />
  </Provider>, 
  document.querySelector('#app')
);