import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Item from 'shared/Item';
import ItemListStore from '../store/ItemListStore';
import * as Types from 'shared/types';

@inject(ItemListStore.name)
@observer
class ItemList extends React.Component<{itemListStore?: ItemListStore}> {
  render() {
    // TODO: itemListStoreがundefinedの場合の処理がない
    const { pickedItems }: { pickedItems: Array<Types.Item> } = this.props.itemListStore;
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