/**
 * this is to provide toggleBottomSheet function for
 * bottomsheet in feed and video modal of user page.
 */
import React, {
  FC,
  createContext,
  ReactNode,
  useState,
  useContext,
} from "react";
import { type FeedBottomSheetView } from "../../redux/features/feed/feedSlice";

type Props = {
  children: ReactNode;
};

type GlobalContextType = {
  toggleBottomSheet?: (index: number, source: FeedBottomSheetView) => void;
  setToggleBottomSheet?: React.Dispatch<
    React.SetStateAction<
      ((index: number, source: FeedBottomSheetView) => void) | undefined
    >
  >;
};
const defaultContextValue = {
  toggleBottomSheet: undefined,
  setToggleBottomSheet: undefined,
};
const GlobalContext = createContext<GlobalContextType>(defaultContextValue);

const GlobalProvider: FC<Props> = ({ children }) => {
  const [toggleBottomSheet, setToggleBottomSheet] =
    useState<GlobalContextType["toggleBottomSheet"]>(undefined);
  return (
    <GlobalContext.Provider value={{ toggleBottomSheet, setToggleBottomSheet }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  const context = useContext<GlobalContextType>(GlobalContext);
  return context;
};
export default GlobalProvider;
