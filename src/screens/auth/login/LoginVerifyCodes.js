import React, { useCallback } from "react";
import { AuthLayout, VerifyCodes } from "../../../components/auth";

const LoginVerifyCodes = ({ route, navigation }) => {
  const { title } = route.params;

  const verifyCodes = useCallback(() => {
    console.log("verify codes logic goes here");
    //if codes verified, the login will proceed. and navigate to the choose account
    //screen, where all the accounts associated with this phone will show up.
    navigation.navigate("AvailableAccounts");
  }, []);

  return (
    <AuthLayout header={title}>
      <VerifyCodes onPress={verifyCodes} />
    </AuthLayout>
  );
};

export default LoginVerifyCodes;
