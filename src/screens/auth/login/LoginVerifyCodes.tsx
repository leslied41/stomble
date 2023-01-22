import React, { useCallback } from "react";
import { VerifyCodes, LoginBottomSheet } from "../../../components/auth";
import { BottomSheetLayout, ScreenLayout } from "../../../components/common";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  getIsLoginBottomSheetOpen,
  closeLoginBottomSheet,
  openLoginBottomSheet,
} from "../../../redux/features/auth/authSlice";
import { RootScreenProps } from "../../../types/navigation";

const LoginVerifyCodes = ({ route }: RootScreenProps<"LoginVerifyCodes">) => {
  const { title } = route.params;

  //redux
  const isLoginBottomSheetOpen = useAppSelector(getIsLoginBottomSheetOpen);
  const dispatch = useAppDispatch();

  const verifyCodes = useCallback(() => {
    console.log("verify codes logic goes here");
    //if codes verified, the login will proceed. and  the choose account
    //bottom sheet will pop up, where all the accounts associated with this phone will show up.
    dispatch(openLoginBottomSheet());
  }, [dispatch]);

  return (
    <>
      <BottomSheetLayout
        snapPoint="95%"
        isBottomSheetOpen={isLoginBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeLoginBottomSheet())}
        variant="auth"
      >
        <LoginBottomSheet />
      </BottomSheetLayout>
      <ScreenLayout header={title}>
        <VerifyCodes onPress={verifyCodes} />
      </ScreenLayout>
    </>
  );
};

export default LoginVerifyCodes;
