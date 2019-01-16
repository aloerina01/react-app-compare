import { computed, observable, IObservableArray } from 'mobx';
import * as Types from 'shared/types';

export default class ItemListStore {

  @observable items: Array<Types.Item> = [];
  @observable pickedItems: Array<Types.Item> = [];

  setItems(items: Array<Types.Item>): Array<Types.Item> {
    this.items = items;
    return this.items;
  }

  setPickedItems(items: Array<Types.Item>): Array<Types.Item> {
    this.pickedItems = items;
    return this.pickedItems;
  }
}