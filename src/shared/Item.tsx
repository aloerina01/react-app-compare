import * as React from 'react';
import * as Types from 'shared/types';

// これは間違い
// const Item = ({ id, title, src, description }: { id: string, title: string, src: string, description: string }): JSX.Element => 

// 正しくはInterface/typeで引数に使う型を定義して
// React的にはどっちが正しいのか？？ 個人的にはtypeでいいのかなと思った。
type ItemProps = Types.Item;

// React.SFC<T>のジェネリクスとして定義する
const Item: React.SFC<ItemProps> = ({ id, title, src, description }): JSX.Element => 
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