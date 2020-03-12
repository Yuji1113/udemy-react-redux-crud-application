import { combineReducers} from "redux"
import count from "./count"

export default combineReducers({ count })
//アプリ内の全reducerを統括
// export default combineReducers({ foo,bar,baz })//複数の状態の管理方法