import { ITEMADD_REQUEST, ITEMADD_SUCCESS, ITEMADD_FAILURE } from "../action/action-types";

const initialState = {
    isFetching: false,
    addResponse: "",
    error: false
}

export default itemAddReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMADD_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ITEMADD_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                addResponse: action.payload,
                error: false
            });
        case ITEMADD_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            })
        default:
            return state;
    }
}