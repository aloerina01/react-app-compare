import React from 'react';
import { inject, observer } from 'mobx-react';
import Item from 'shared/Item';
import ItemListStore from '../store/ItemListStore';

@inject(ItemListStore.getName())
@observer
class ItemList extends React.Component {
  render() {
    const { itemList } = this.props.itemListStore;
    console.log(itemList);
    return (
      <div className="list-item">
        { itemList.map(item => <Item {...item} />) }
      </div>
    );
  }
}
export default ItemList;