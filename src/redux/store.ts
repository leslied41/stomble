import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./features/test/testSlice";
import authSlice from "./features/auth/authSlice";
import searchSlice from "./features/search/searchSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    test: testSlice,
    auth: authSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
/**
 * useAppDispatch and useAppSelector will be used in project instead of
 * useDispatch and useSelector.
 */
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
