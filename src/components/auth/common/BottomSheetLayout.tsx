import React, { FC, useCallback, useMemo, useRef } from "react";
import { View, Dimensions } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useEffectSkipInitial } from "../../../hooks";

type BottomSheetLayoutProps = {
  children: React.ReactNode;
  snapPoint?: string;
  isBottomSheetOpen: boolean;
  closeBottomSheet: () => void;
};

const BottomSheetLayout: FC<BottomSheetLayoutProps> = ({
  children,
  snapPoint = "30%",
  isBottomSheetOpen,
  closeBottomSheet,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

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
          borderRadius: 10,
        }}
      >
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default BottomSheetLayout;
