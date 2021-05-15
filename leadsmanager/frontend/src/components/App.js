import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../store";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./layout/Alerts";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Fragment>
          <Header />
          <Alerts />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </AlertProvider>
    </Provider>
  );
};

render(<App />, document.getElementById("app"));
