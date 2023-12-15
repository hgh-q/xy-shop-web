import * as ActionTypes from './type'


// 以下是当我们在组件dispatch时，需要使用对应type
export function ADD_SHOP(payload) {
	return {
        type: ActionTypes.ADD_SHOP,
        payload,
	}
}
export function GET_SHOP_SUM() {
	return {
        type: ActionTypes.GET_SHOP_SUM,
        payload: {},
	}
}
