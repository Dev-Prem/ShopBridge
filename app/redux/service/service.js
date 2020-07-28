import Api from './api';
import { URL } from './urls';

export const itemListService = () => Api.get(URL.ITEM_LIST);
export const itemAddService = (item) => Api.post(URL.ITEM_ADD, item);
export const itemTrashService = (itemId) => Api.delete(`${URL.ITEM_TRASH}/${itemId}`);

export default service = {
    itemListService,
    itemAddService,
    itemTrashService
};