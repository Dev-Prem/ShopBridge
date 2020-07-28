import { put, call } from 'redux-saga/effects';
import { itemTrashService } from '../service/service';
import { ITEMTRASH_FAILURE, ITEMTRASH_SUCCESS } from '../action/action-types';

export function* itemTrashSaga(action) {
    try {
        const resp = yield call(itemTrashService, action.itemId);
        if (resp.status == 'success') {
            const itemId = action.itemId;
            yield put({ type: ITEMTRASH_SUCCESS, itemId });
        } else {
            yield put({ type: ITEMTRASH_FAILURE });
        }
    } catch (error) {
        yield put({ type: ITEMTRASH_FAILURE, error });
    }
}