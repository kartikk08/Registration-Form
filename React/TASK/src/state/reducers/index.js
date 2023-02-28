import { combineReducers} from 'redux';

import amountReducer from './amountReducer';
import numberReducer from './numberReducer';
import  userReducer  from './userReducer';

const reducers = combineReducers({
    amount: amountReducer,
    number: numberReducer,
    user:userReducer
})

export default reducers