import { computed, observable, IObservableArray } from 'mobx';
import * as Types from 'shared/types';

export default class ItemListStore {

  @observable items: IObservableArray<Types.Item> = [];
  @observable pickedItems: IObservableArray<Types.Item> = [];

  setItems(items: Array<Types.Item>): Array<Types.Item> {
    this.items = items;
    return this.items;
  }

  setPickedItems(items: Array<Types.Item>): Array<Types.Item> {
    this.pickedItems = items;
    this.pickedItems.replace();
    return this.pickedItems;
  }
}