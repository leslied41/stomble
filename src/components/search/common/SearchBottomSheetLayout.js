import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useEffectSkipInitial } from "../../../hooks";
import PropTypes from "prop-types";

const SearchBottomSheetLayout = ({
  children,
  snapPoint = "60%",
  isBottomSheetOpen,
  closeBottomSheet,
}) => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => [snapPoint], []);

  const toggleBottomSheet = useCallback((index) => {
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
        borderRadius: "10px 10px 0 0 ",
      }}
    >
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheet>
  );
};

SearchBottomSheetLayout.propTypes = {
  children: PropTypes.node,
  snapPoint: PropTypes.string,
  isBottomSheetOpen: PropTypes.bool,
  closeBottomSheet: PropTypes.func,
};
export default SearchBottomSheetLayout;
