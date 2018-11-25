import React from 'react';
import { inject, observer } from 'mobx-react';
import Item from 'shared/Item';
import ItemListStore from '../store/ItemListStore';

@inject(ItemListStore.name)
@observer
class ItemList extends React.Component {
  render() {
    const { pickedItems } = this.props.ItemListStore;
    if (!pickedItems) {
      return null;
    }
    return (
      <div className="item-list">
        { pickedItems.map(item => <Item key={item.id} {...item} />) }
      </div>
    );
  }
}
export default ItemList;