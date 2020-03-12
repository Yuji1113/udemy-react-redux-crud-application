import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from "./reducers";
//コンポーネント用
import App from "./components/App";

// import App from './App';
import * as serviceWorker from './serviceWorker';

//アプリ内でユニーク
//全てのstateはstoreに集約されている
const store = createStore(reducer);
//storeがどのcomponentからも参照できるようにProviderを使う
//どの階層からでもstore（provider）を利用してアクセスできる

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
