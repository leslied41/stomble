import React, { FC, useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useEffectSkipInitial } from "../../../hooks";

type SearchBottomSheetProps = {
  children: React.ReactNode;
  snapPoint?: string;
  isBottomSheetOpen: Boolean;
  closeBottomSheet: () => void;
};

const SearchBottomSheetLayout: FC<SearchBottomSheetProps> = ({
  children,
  snapPoint = "60%",
  isBottomSheetOpen,
  closeBottomSheet,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => [snapPoint], [snapPoint]);

  const toggleBottomSheet = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  useEffectSkipInitial(() => {
    if (isBottomSheetOpen) toggleBottomSheet(0);
    else toggleBottomSheet(-1);
  }, [isBottomSheetOpen]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={closeBottomSheet}
      backgroundStyle={{
        backgroundColor: "#222222",
        // borderRadius: "10px 10px 0 0 ",
      }}
    >
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheet>
  );
};

export default SearchBottomSheetLayout;
