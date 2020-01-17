import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
//import { reducer as formReducer } from "redux-form";
import rootReducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//const reducers = { form: formReducer };
//const reducer = combineReducers(reducers);
//let store = createStore(reducer);
const store = createStore(rootReducer);
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




