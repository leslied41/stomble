import { View } from "react-native";
import React from "react";
import {
  AuthLayout,
  BusinessRegisterForm,
  BusinessBirthdayBottomSheet,
} from "../../../components/auth";
import { BottomSheetLayout } from "../../../components/common";
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

      <AuthLayout header="Business register">
        <View className="flex-1 mt-[35px]">
          <BusinessRegisterForm />
        </View>
      </AuthLayout>
    </>
  );
};

export default BusinessRegister;
