import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { View, Dimensions } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsBottomSheetOpen,
  closeBottomSheet,
} from "../../../redux/features/auth/authSlice";
import { useEffectSkipInitial } from "../../../hooks";

const BottomSheetLayout = ({ children }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  //redux
  const isBottomSheetOpen = useSelector(getIsBottomSheetOpen);
  const dispatch = useDispatch();
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["30%"], []);

  const toggleBottomSheet = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  useEffectSkipInitial(() => {
    if (isBottomSheetOpen) toggleBottomSheet(-1);
    toggleBottomSheet(0);
  }, [isBottomSheetOpen]);

  return (
    <View
      className="absolute left-0 right-0 bottom-0  z-50"
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
        onClose={() => dispatch(closeBottomSheet())}
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
};
export default BottomSheetLayout;
