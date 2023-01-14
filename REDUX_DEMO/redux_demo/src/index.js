import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 1. import tạo store từ redux
import { createStore } from 'redux';
// 2.1 import reducer tổng từ file
import { reducer } from './reducers';
// 3.1 import Provider từ react-redux
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 2.2 Tạo Store từ reducer
const store = createStore(reducer);

root.render(
  // 3.2 Cung cấp store cho cả ứng dụng
  <Provider store={store}>   {/* Thuộc tính store bằng store vừa tạo ra */}
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
