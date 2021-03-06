import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import ScrollToTop from "./components/ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

