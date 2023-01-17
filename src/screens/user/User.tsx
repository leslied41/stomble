import { View } from "react-native";
import React from "react";
import UserRoutes from "./UserRoutes";
import { Top } from "../../components/user/common";
import { BottomSheetLayout } from "../../components/common";
import { BusinessBottomSheetView } from "../../components/search";
import { LoginBottomSheet } from "../../components/auth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  getIsUserBusinessBottomOpen,
  closeUserBusinessBottomSheet,
  getIsSwitchAccountBottomSheetOpen,
  closeSwitchAccountBottomSheetOpen,
} from "../../redux/features/user/userSlice";

const User = () => {
  //redux
  const dispatch = useAppDispatch();
  const isBusinessBottomSheetOpen = useAppSelector(getIsUserBusinessBottomOpen);
  const isSwitchAccountBottomSheetOpen = useAppSelector(
    getIsSwitchAccountBottomSheetOpen
  );
  return (
    <View className="flex-1">
      <Top />
      <View className="flex-1">
        <UserRoutes />
      </View>

      <BottomSheetLayout
        isBottomSheetOpen={isBusinessBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeUserBusinessBottomSheet())}
      >
        <BusinessBottomSheetView />
      </BottomSheetLayout>

      <BottomSheetLayout
        snapPoint="90%"
        isBottomSheetOpen={isSwitchAccountBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeSwitchAccountBottomSheetOpen())}
      >
        <LoginBottomSheet />
      </BottomSheetLayout>
    </View>
  );
};

export default User;
