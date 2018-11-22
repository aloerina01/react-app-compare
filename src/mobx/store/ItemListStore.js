import { computed } from 'mobx';

export default class ItemListStore {
  constructor() {
    this._itemList = [];
    this._itemList.push({id: 'hoge', title: 'hoge'});
    this._itemList.push({id: 'fuga', title: 'fuga'});
  }

  @computed
  get itemList() {
    return this._itemList;
  }

  static getName() {
    return 'itemListStore';
  }
}