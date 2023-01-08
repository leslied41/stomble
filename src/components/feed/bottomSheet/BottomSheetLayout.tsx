import React, { FC, useCallback, useRef, useEffect } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { useFeedContext } from "../context/FeedProvider";
import { type FeedBottomSheetView } from "../../../redux/features/feed/feedSlice";
import { useAppDispatch } from "../../../redux/store";
import { setFeedBottomSheetView } from "../../../redux/features/feed/feedSlice";

enum SNAPPOINTS {
  THANKSREPORT = "10%",
  FEEDMOREOPTIONS = "25%",
  FEEDREADMORE = "30%",
  FEEDSHARE = "35%",
  BRANDINFO = "55%",
  REPORT = "55%",
}

type BottomSheetProps = {
  children: React.ReactNode;
};

const BottomSheetLayout: FC<BottomSheetProps> = ({ children }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  //redux
  const dispatch = useAppDispatch();

  const { setToggleBottomSheet } = useFeedContext();

  const operateBottomSheet = useCallback(
    () => (index: number, source: FeedBottomSheetView) => {
      bottomSheetRef.current?.snapToIndex(index);
      dispatch(setFeedBottomSheetView(source));
    },
    [dispatch]
  );
  /**
   * set operateBottomSheet to usecontext and
   * make it available throughtout feedscreen.
   */
  useEffect(() => {
    if (!setToggleBottomSheet) return;
    setToggleBottomSheet(operateBottomSheet);
  }, [operateBottomSheet, setToggleBottomSheet]);

  const renderBackdrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={[
        SNAPPOINTS.THANKSREPORT,
        SNAPPOINTS.FEEDMOREOPTIONS,
        SNAPPOINTS.FEEDREADMORE,
        SNAPPOINTS.FEEDSHARE,
        SNAPPOINTS.BRANDINFO,
        SNAPPOINTS.REPORT,
      ]}
      enablePanDownToClose
      enableContentPanningGesture={false}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: "#222222",
        borderRadius: 10,
      }}
      style={{
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 0,
          height: -10,
        },
        shadowRadius: 30,
      }}
    >
      <BottomSheetView style={{ flex: 1 }}>{children}</BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheetLayout;
