import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
// import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './components/redux/configureStore';

const store = configureStore();

// ReactDOM.render
render(
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  // </React.StrictMode>
  document.getElementById('app')
  // 'root' originally
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
