import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./features/test/testSlice";
import authSlice from "./features/auth/authSlice";
import searchSlice from "./features/search/searchSlice";

const store = configureStore({
  reducer: {
    test: testSlice,
    auth: authSlice,
    search: searchSlice,
  },
});

export default store;
