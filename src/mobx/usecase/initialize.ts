import API from '../../shared/API';
import ItemListStore, { Item } from '../store/ItemListStore';

const DISPLAY_ITEM_COUNT = 5;

export function initialize(itemListStore: ItemListStore): void {
  API.fetchItems()
     .then(response => itemListStore.setItems(response))
     .then(items => shuffle(items))
     .then(items => items.slice(0, DISPLAY_ITEM_COUNT))
     .then(slicedItems => pickupBanditArm(slicedItems))
     .then(pickedItems => itemListStore.setPickedItems(pickedItems));
}

function pickupBanditArm(items: Array<Item>): Array<Item> {
  // TODO: implements
  return items;
}

// TODO: ジェネリクスの中身なんでもいいときはどう定義する？ anyはダメそう
function shuffle(array: Array<any> = []): Array<any> {
  array = array.slice();
  for (let i = array.length -1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}