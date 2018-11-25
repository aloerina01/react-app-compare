import { computed, observable } from 'mobx';

export default class ItemListStore {
  constructor() {
    this._itemList = observable.array();
    this._pickedItems = observable.array();
  }

  @computed
  get items() {
    return this._itemList;
  }

  @computed
  get pickedItems() {
    return this._pickedItems;
  }

  setItems(value) {
    // observableのarrayの要素をまるまる入れ変えるにはreplace
    // その他observable.arrayのAPI一覧はこちら
    // https://mobx.js.org/refguide/array.html#observable-arrays
    this._itemList.replace(value);
    return value;
  }

  setPickedItems(value) {
    this._pickedItems.replace(value);
    return value;
  }
}