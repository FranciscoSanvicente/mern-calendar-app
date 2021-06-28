import React from "react";
import { Provider } from "react-redux";
import { Routers } from "../router/Router";
import { store } from "../store/store";

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routers />
      </Provider>
    </div>
  );
};
