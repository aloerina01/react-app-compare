import Dispatcher from '../dispatcher';
import ActionTypes from '../ActionTypes';

export default function() {
  Dispatcher.dispatch({
    type: ActionTypes.Initialize
  });
}