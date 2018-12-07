import React from 'react';

// これは間違い
// const Item = ({ id, title, src, description }: { id: string, title: string, src: string, description: string }): JSX.Element => 

// 正しくはInterfaceで引数に使う型を定義して
interface Props {
  id: string,
  title: string,
  src: string,
  description: string
};

// React.SFC<T>のジェネリクスとして定義する
const Item: React.SFC<Props> = ({ id, title, src, description }): JSX.Element => 
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