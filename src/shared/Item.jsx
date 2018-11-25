import React from 'react';

const Item = ({ id, title, src, description }) => 
  <div key={ id } className="item">
    <div className="item-image">
      <img src={ src } alt={ title } />
    </div>
    <div className="item-data">
      <p className="item-data-title">{ title }</p>
      <p className="item-data-description">{ description }</p>
    </div>
    <div className="item-reaction">
      <i className="far fa-thumbs-up"></i>
      <i className="far fa-thumbs-down"></i>
    </div>
  </div>

export default Item;