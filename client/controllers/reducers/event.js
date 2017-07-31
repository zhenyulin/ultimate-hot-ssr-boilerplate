import { combineReducers } from 'redux-immutable';
import { immutableAsyncReducers } from 'utils/action-manager/src';

import { MESSAGE } from 'controllers/actions/event';

export default combineReducers({
  message: immutableAsyncReducers(MESSAGE),
});
