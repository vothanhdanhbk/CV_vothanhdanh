import { combineReducers } from 'redux';

import accounts from './accounts';
 import comments from './comments'
import ratings from './rating'
const appReducers = combineReducers({
    accounts,
    comments,
    ratings
});

export default appReducers;