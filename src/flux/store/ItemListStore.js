import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher';
import ActionTypes from '../ActionTypes';

class ItemListStore extends ReduceStore {
  getInitialState() {
    return {
      ItemList: [],
      pickedItems: []
    }
  }
  reduce(state, { type, payload }) {
    switch (type) {
      case ActionTypes.INITIALIZE:
        const nextState = { ...state, ...payload };
        return nextState;
      default:
        return state;
    }
  }
}

const instance = new ItemListStore(Dispatcher);
export default instance;