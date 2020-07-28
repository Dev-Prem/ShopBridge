import { combineReducers } from 'redux';
import itemListReducer from './item-list-reducer';
import itemAddReducer from './item-add-reducer';
import itemTrashReducer from './item-trash-reducer';

const rootReducer = combineReducers({
    itemList: itemListReducer,
    itemAdd: itemAddReducer,
    itemTrash: itemTrashReducer
});

export default rootReducer;