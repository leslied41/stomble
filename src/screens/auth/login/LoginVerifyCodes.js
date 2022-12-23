import React, { useCallback } from "react";
import { AuthLayout, VerifyCodes } from "../../../components/auth";

const LoginVerifyCodes = ({ route }) => {
  const { title } = route.params;

  const verifyCodes = useCallback(() => {
    console.log("verify codes logic goes here");
  }, []);

  return (
    <AuthLayout header={title}>
      <VerifyCodes onPress={verifyCodes} />
    </AuthLayout>
  );
};

export default LoginVerifyCodes;
