import { combineReducers} from "redux"
import { reducer as form } from "redux-form"
import events from "./events"

export default combineReducers({ events,form })
//アプリ内の全reducerを統括
// export default combineReducers({ foo,bar,baz })//複数の状態の管理方法