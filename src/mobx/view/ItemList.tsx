import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Item from 'shared/Item';
import ItemListStore from '../store/ItemListStore';
import * as Types from 'shared/types';

@inject(ItemListStore.name)
@observer
class ItemList extends React.Component<{ItemListStore?: ItemListStore}> {
  render() {
    // Q. undefinedが入り得るって、どうやって表現するのが適切？そもそも入り得るのがだめ？
    const pickedItems: Array<Types.Item> | undefined = this.props.ItemListStore && this.props.ItemListStore.pickedItems;
    if (!pickedItems || pickedItems.length < 1) {
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