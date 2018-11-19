import React from 'react';
import { inject, observer } from 'mobx';
import Item from 'shared/Item';
import ItemListStore from '../store/ItemListStore';

@inject(ItemListStore.getName())
@observer
const ItemList = ({ pickupedItems }) => 
  <div>
    {
      pickupedItems.map(item => 
        <div class="list-item">
          <Item {...item} />
          <i class="far fa-thumbs-up"></i>
          <i class="far fa-thumbs-down"></i>
        </div>
      )
    }
  </div>

export default ItemList;