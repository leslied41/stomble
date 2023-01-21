import React from "react";
import { MainRoutes } from "./src/navigation";
//redux
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { GlobalProvider } from "./src/components/common";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <Provider store={store}>
      <GlobalProvider>
        <GestureHandlerRootView className="flex-1">
          <MainRoutes />
        </GestureHandlerRootView>
      </GlobalProvider>
    </Provider>
  );
}
