import { MainRoutes } from "./src/navigation";

//redux
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

export default function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}
