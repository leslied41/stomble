/**
 * for feed screen bottom sheet layout, it is not in here.
 * the reason why feed use its own bottomsheet is because it has multipe bottomsheets in
 * one screen, so I set different snappoints standing for different bottomsheets, by manipulating
 * different snappoints, and set different current view can achieve the same outcome like open
 * different bottom sheets. so it will make code dry. the proper scenario is that if the multiple bottoms sheets
 * are in the same screen, this strategy is proper,and put the under a usecontext to store the function
 * that snapto different index. I tried to make this strategy globally, and set a global usecontext, and import
 * this bottomsheet whrerever it is needed, but somehow the result is not desirable. so better to make this bottomsheet
 * in this module global, and applied in where each screen has only one or two bottom sheet, if there are multiple, what I did
 * in feed is the recommended solution.
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
