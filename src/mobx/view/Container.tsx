import * as React from 'react';
import ItemList from './ItemList';
import { ApplicationStores } from '../types';

const Container: React.SFC<Partial<ApplicationStores>> = () => 
  <section>
    <ItemList />
  </section>;

export default Container;