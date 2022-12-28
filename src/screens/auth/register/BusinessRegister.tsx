import { View, Text } from "react-native";
import React from "react";
import {
  AuthLayout,
  BusinessRegisterForm,
  BottomSheetLayout,
  BusinessBirthdayBottomSheet,
} from "../../../components/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsBusinessBirthdayBottomSheetOpen,
  closeBusinessBirthdayBottomSheet,
} from "../../../redux/features/auth/authSlice";

const BusinessRegister = () => {
  //redux
  const isBusinessBirthdayBottomSheetOpen = useSelector(
    getIsBusinessBirthdayBottomSheetOpen
  );
  const dispatch = useDispatch();
  return (
    <>
      {/*business birthday bottom sheet */}
      <BottomSheetLayout
        snapPoint="40%"
        isBottomSheetOpen={isBusinessBirthdayBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeBusinessBirthdayBottomSheet())}
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
