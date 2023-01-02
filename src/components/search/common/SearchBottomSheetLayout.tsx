import React, { FC, useCallback, useMemo, useRef } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useEffectSkipInitial } from "../../../hooks";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";

type SearchBottomSheetProps = {
  children: React.ReactNode;
  snapPoint?: string;
  isBottomSheetOpen: Boolean;
  closeBottomSheet: () => void;
};

const SearchBottomSheetLayout: FC<SearchBottomSheetProps> = ({
  children,
  snapPoint = "55%",
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
  );
};

export default SearchBottomSheetLayout;
