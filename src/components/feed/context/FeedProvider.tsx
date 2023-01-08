import React, {
  FC,
  createContext,
  ReactNode,
  useState,
  useContext,
} from "react";
import { type FeedBottomSheetView } from "../../../redux/features/feed/feedSlice";

type Props = {
  children: ReactNode;
};

type FeedContextType = {
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
const FeedContext = createContext<FeedContextType>(defaultContextValue);

const FeedProvider: FC<Props> = ({ children }) => {
  const [toggleBottomSheet, setToggleBottomSheet] =
    useState<FeedContextType["toggleBottomSheet"]>(undefined);
  return (
    <FeedContext.Provider value={{ toggleBottomSheet, setToggleBottomSheet }}>
      {children}
    </FeedContext.Provider>
  );
};
export const useFeedContext = () => {
  const context = useContext<FeedContextType>(FeedContext);
  return context;
};
export default FeedProvider;
