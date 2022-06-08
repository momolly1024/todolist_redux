import { createStore } from 'redux' //建立 store
import rootReducer from './reducers' // 引入 reducer

export default createStore(rootReducer) //將 redux 綁進 store
