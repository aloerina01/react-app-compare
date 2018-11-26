import { Component, Children } from 'react';
import { Container } from 'flux/utils';
import ItemListStore from '../store/ItemListStore';

class MainContainer extends Component {
  static getStores() {
    return [
      ItemListStore
    ];
  }
  static calculateState() {
    return {
      itemListStore: ItemListStore.getState()
    }
  }
  render() {
    return Children.only(this.props.children);
  }
}

const instance = Container.create(MainContainer);
export default instance;