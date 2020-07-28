import { ITEMTRASH_REQUEST, ITEMTRASH_SUCCESS, ITEMTRASH_FAILURE } from "../action/action-types";

const initialState = {
    isFetching: false,
    itemId: "",
    error: false
}

export default itemAddReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMTRASH_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ITEMTRASH_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                itemId: action.itemId,
                error: false
            });
        case ITEMTRASH_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            })
        default:
            return state;
    }
}