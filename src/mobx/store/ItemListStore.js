import { computed } from 'mobx';

export default class ItemListStore {
  _pickupedItems = null;
  itemList = [];
  
  @computed get pickupedItems() {
    return this._pickupedItem;
  }

  static getName() {
    return 'itemstore';
  }
}