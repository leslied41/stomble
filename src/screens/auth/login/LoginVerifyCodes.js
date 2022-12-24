import React, { useCallback } from "react";
import {
  AuthLayout,
  VerifyCodes,
  BottomSheetLayout,
  LoginBottomSheet,
} from "../../../components/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsLoginBottomSheetOpen,
  closeLoginBottomSheet,
  openLoginBottomSheet,
} from "../../../redux/features/auth/authSlice";

const LoginVerifyCodes = ({ route }) => {
  const { title } = route.params;

  //redux
  const isLoginBottomSheetOpen = useSelector(getIsLoginBottomSheetOpen);
  const dispatch = useDispatch();

  const verifyCodes = useCallback(() => {
    console.log("verify codes logic goes here");
    //if codes verified, the login will proceed. and  the choose account
    //bottom sheet will pop up, where all the accounts associated with this phone will show up.
    dispatch(openLoginBottomSheet());
  }, []);

  return (
    <>
      <BottomSheetLayout
        snapPoint="95%"
        isBottomSheetOpen={isLoginBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeLoginBottomSheet())}
      >
        <LoginBottomSheet />
      </BottomSheetLayout>
      <AuthLayout header={title}>
        <VerifyCodes onPress={verifyCodes} />
      </AuthLayout>
    </>
  );
};

export default LoginVerifyCodes;
