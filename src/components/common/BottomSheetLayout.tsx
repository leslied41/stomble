/**
 * for feed screen bottom sheet layout, it is not in here.
 */

import React, { FC, useCallback, useMemo, useRef } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useEffectSkipInitial } from "../../hooks";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { Dimensions, View } from "react-native";

type BottomSheetProps = {
  children: React.ReactNode;
  snapPoint?: string;
  isBottomSheetOpen: Boolean;
  closeBottomSheet: () => void;
  variant?: "auth" | "common";
};

const BottomSheetLayout: FC<BottomSheetProps> = ({
  children,
  snapPoint = "55%",
  isBottomSheetOpen,
  closeBottomSheet,
  variant = "common",
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const snapPoints = useMemo(() => [snapPoint], [snapPoint]);

  const toggleBottomSheet = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  useEffectSkipInitial(() => {
    if (isBottomSheetOpen) toggleBottomSheet(0);
    else toggleBottomSheet(-1);
  }, [isBottomSheetOpen]);

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
    <>
      {variant === "common" && (
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose
          backdropComponent={renderBackdrop}
          onClose={closeBottomSheet}
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
      )}

      {variant === "auth" && (
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
            backdropComponent={renderBackdrop}
            onClose={closeBottomSheet}
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
        </View>
      )}
    </>
  );
};

export default BottomSheetLayout;
