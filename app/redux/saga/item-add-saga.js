import { put, call } from 'redux-saga/effects';
import { itemAddService } from '../service/service';
import { ITEMADD_SUCCESS, ITEMADD_FAILURE } from '../action/action-types';

export function* itemAddSaga(action) {
    try {
        const resp = yield call(itemAddService, action.item);
        if (resp.status == 'success') {
            const payload = resp.data;
            yield put({ type: ITEMADD_SUCCESS, payload });
        } else {
            yield put({ type: ITEMADD_FAILURE });
        }
    } catch (error) {
        yield put({ type: ITEMADD_FAILURE, error });
    }
}