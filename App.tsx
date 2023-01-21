import React from "react";
import { MainRoutes } from "./src/navigation";
//redux
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { GlobalProvider } from "./src/components/common";

export default function App() {
  return (
    <Provider store={store}>
      <GlobalProvider>
        <MainRoutes />
      </GlobalProvider>
    </Provider>
  );
}
