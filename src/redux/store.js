import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./features/test/testSlice";
import authSlice from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    test: testSlice,
    auth: authSlice,
  },
});

export default store;
