import { createStore,applyMiddleware } from 'redux'
// import reduxThunk from 'redux-thunk'
import reducers from './reducers'

// 创建 store 的时候，使用中间件
// const store = createStore(reducers,applyMiddleware(reduxThunk));
const store = createStore(reducers);
export default store;