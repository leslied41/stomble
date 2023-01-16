import { View } from "react-native";
import React from "react";
import UserRoutes from "./UserRoutes";
import { Top } from "../../components/user/common";
import { BottomSheetLayout } from "../../components/common";
import { BusinessBottomSheetView } from "../../components/search";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  getIsUserBottomOpen,
  closeUserBottomSheet,
} from "../../redux/features/user/userSlice";

const User = () => {
  //redux
  const dispatch = useAppDispatch();
  const isBottomSheetOpen = useAppSelector(getIsUserBottomOpen);

  return (
    <View className="flex-1">
      <Top />
      <View className="flex-1">
        <UserRoutes />
      </View>

      <BottomSheetLayout
        isBottomSheetOpen={isBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeUserBottomSheet())}
      >
        <BusinessBottomSheetView />
      </BottomSheetLayout>
    </View>
  );
};

export default User;
