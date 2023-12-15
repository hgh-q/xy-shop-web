import * as ActionTypes from '../actions/type'


const initState = {
	shopList: [] ,
}

const reducer = (state = initState, action) => {
	// 有数据进行更新时，返回一个新的state
	switch (action.type) {
		case ActionTypes.ADD_SHOP:
			const isData = state.shopList.find(item=>item.id===action.payload.id)
			if (!isData){
				state.shopList.push({...action.payload,count:1})
			}else{
				isData.count++
			}
			return state
		case ActionTypes.GET_SHOP_SUM:
			return { cardInfo: [] }
		default:
			return state
	}
}

export default reducer
