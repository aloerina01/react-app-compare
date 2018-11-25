import API from '../../shared/API';

const DISPLAY_ITEM_COUNT = 5;

export function initialize(itemListStore) {
  API.fetchItems()
     .then(response => itemListStore.setItems(response))
     .then(items => shuffle(items))
     .then(items => items.slice(0, DISPLAY_ITEM_COUNT))
     .then(slicedItems => pickupBanditArm(slicedItems))
     .then(pickedItems => itemListStore.setPickedItems(pickedItems));
}

function pickupBanditArm(items) {
  // TODO: implements
  return items;
}

function shuffle(array = []) {
  array = array.slice();
  for (let i = array.length -1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}