import React, { useCallback, useMemo, useRef } from "react";
import { View, Dimensions } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import PropTypes from "prop-types";
import { useEffectSkipInitial } from "../../../hooks";

const BottomSheetLayout = ({
  children,
  snapPoint = "30%",
  isBottomSheetOpen,
  closeBottomSheet,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => [snapPoint], []);

  const toggleBottomSheet = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  useEffectSkipInitial(() => {
    if (isBottomSheetOpen) toggleBottomSheet(-1);
    toggleBottomSheet(0);
  }, [isBottomSheetOpen]);

  return (
    <View
      className="absolute left-0 right-0 bottom-0 z-50"
      style={{
        width: isBottomSheetOpen ? windowWidth : 0,
        height: isBottomSheetOpen ? windowHeight : 0,
      }}
    >
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
    </View>
  );
};

BottomSheetLayout.propTypes = {
  children: PropTypes.node,
  snapPoint: PropTypes.string,
  isBottomSheetOpen: PropTypes.bool,
  closeBottomSheet: PropTypes.func,
};
export default BottomSheetLayout;
