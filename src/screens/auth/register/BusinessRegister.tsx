import { View } from "react-native";
import React from "react";
import {
  BusinessRegisterForm,
  BusinessBirthdayBottomSheet,
} from "../../../components/auth";
import { BottomSheetLayout, ScreenLayout } from "../../../components/common";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  getIsBusinessBirthdayBottomSheetOpen,
  closeBusinessBirthdayBottomSheet,
} from "../../../redux/features/auth/authSlice";

const BusinessRegister = () => {
  //redux
  const isBusinessBirthdayBottomSheetOpen = useAppSelector(
    getIsBusinessBirthdayBottomSheetOpen
  );
  const dispatch = useAppDispatch();
  return (
    <>
      {/*business birthday bottom sheet */}
      <BottomSheetLayout
        snapPoint="40%"
        isBottomSheetOpen={isBusinessBirthdayBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeBusinessBirthdayBottomSheet())}
        variant="auth"
      >
        <BusinessBirthdayBottomSheet />
      </BottomSheetLayout>

      <ScreenLayout header="Business register">
        <View className="flex-1 mt-[35px]">
          <BusinessRegisterForm />
        </View>
      </ScreenLayout>
    </>
  );
};

export default BusinessRegister;
