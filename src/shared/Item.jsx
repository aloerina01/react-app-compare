import React from 'react';

const Item = ({ id, title, imageSrc, description }) => 
  <div key={ id } class="item">
    <div class="item-image">
      <img src={ imageSrc } alt={ title } />
    </div>
    <div class="item-data">
      <p class="item-data-title">{ title }</p>
      <p class="item-data-description">{ description }</p>
    </div>
  </div>

export default Item;