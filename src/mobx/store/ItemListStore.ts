import { computed, observable } from 'mobx';

// どこに定義するのが適切？
export type Item = {
  id: string,
  title: string,
  src: string,
  description: string
};

export default class ItemListStore {
  private _itemList: Array<Item>;
  private _pickedItems: Array<Item>
  constructor() {
    this._itemList = observable.array();
    this._pickedItems = observable.array();
  }

  @computed
  get items(): Array<Item> {
    return this._itemList;
  }

  @computed
  get pickedItems(): Array<Item> {
    return this._pickedItems;
  }

  setItems(value: Array<Item>): Array<Item> {
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