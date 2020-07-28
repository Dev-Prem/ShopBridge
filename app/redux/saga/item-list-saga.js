import { put, call } from 'redux-saga/effects';
import { itemListService } from '../service/service';
import { ITEMLIST_SUCCESS, ITEMLIST_FAILURE } from '../action/action-types';

export function* itemListSaga(action) {
    try {
        const resp = yield call(itemListService);
        let payload = [];
        if (resp.status == 'success')
            payload = resp.data;
        yield put({ type: ITEMLIST_SUCCESS, payload });
    } catch (error) {
        yield put({ type: ITEMLIST_FAILURE, error });
    }
}