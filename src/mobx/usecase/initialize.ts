import API from 'shared/API';
import ItemListStore from '../store/ItemListStore';
import * as Types from 'types';

const DISPLAY_ITEM_COUNT = 5;

export function initialize(itemListStore: ItemListStore): void {
  API.fetchItems()
     .then(response => itemListStore.setItems(response))
     .then(items => shuffle(items))
     .then(items => items.slice(0, DISPLAY_ITEM_COUNT))
     .then(slicedItems => pickupBanditArm(slicedItems))
     .then(pickedItems => itemListStore.setPickedItems(pickedItems));
}

function pickupBanditArm(items: Array<Types.Item>): Array<Types.Item> {
  // TODO: implements
  return items;
}

// Q. ジェネリクスの中身なんでもいいときはどう定義する？
// A. 関数名の直後に<T>を置く。少し違和感がある。。
function shuffle<T>(array: Array<T>): Array<T> {
  array = array.slice();
  for (let i = array.length -1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}