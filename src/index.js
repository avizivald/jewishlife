import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MyRouter from './MyRouter';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
const initState = {
  listOfDaysZmanim:[]
};
const reduser = (state = initState,action)=>{
  switch (action.type) {
    case "ADD_LIST" :
      state = {...state, listOfDaysZmanim : action.payload};

      break;
  
    default:
      break;
  }
  return state;

}
const store = createStore(reduser);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <MyRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
