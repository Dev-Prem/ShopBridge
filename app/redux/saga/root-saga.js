import { takeLatest } from 'redux-saga/effects';
import { ITEMADD_REQUEST, ITEMTRASH_REQUEST, ITEMLIST_REQUEST } from '../action/action-types';
import { itemListSaga } from './item-list-saga';
import { itemAddSaga } from './item-add-saga';
import { itemTrashSaga } from './item-trash-saga';

export default function* rootSaga() {
    yield takeLatest(ITEMLIST_REQUEST, itemListSaga);
    yield takeLatest(ITEMADD_REQUEST, itemAddSaga);
    yield takeLatest(ITEMTRASH_REQUEST, itemTrashSaga);
};