import axios from "axios"

export const READ_EVENTS = "READ_EVENTS"
export const CREATE_EVENTS = "CREATE_EVENTS"

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

//非同期処理を行いたいが
//ピュアなオブジェクトを返す必要がある
//redux-thunkを利用する
//actionの代わりに関数を返すことができる

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  // console.log(response)
  dispatch({ type: READ_EVENTS, response })
}


export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`,values)
  dispatch({ type: CREATE_EVENTS, response })
}

