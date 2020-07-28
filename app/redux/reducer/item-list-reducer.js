import { ITEMLIST_REQUEST, ITEMLIST_SUCCESS, ITEMLIST_FAILURE, ITEMADD_SUCCESS, ITEMTRASH_SUCCESS } from "../action/action-types";

const initialState = {
    isFetching: false,
    itemList: [],
    error: ''
}

export default itemListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMLIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ITEMLIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                itemList: action.payload,
                error: false
            });
        case ITEMADD_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                itemList: [action.payload, ...state.itemList],
                error: false
            });
        case ITEMTRASH_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                itemList: state.itemList.filter(item => item.id !== action.itemId),
                error: false
            })
        case ITEMLIST_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            })
        default:
            return state;
    }
}