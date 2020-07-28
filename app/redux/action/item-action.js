import {
    ITEMLIST_REQUEST,
    ITEMADD_REQUEST,
    ITEMTRASH_REQUEST
} from './action-types';

export default {
    itemListAction: () => ({ type: ITEMLIST_REQUEST }),
    itemAddAction: (item) => ({ type: ITEMADD_REQUEST, item }),
    itemTrashAction: (itemId) => ({ type: ITEMTRASH_REQUEST, itemId })
};