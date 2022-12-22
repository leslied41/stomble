import React from "react";
import { AuthLayout } from "../../../components/auth";
import { VerifyCodes } from "../../../components/auth/common";

const PersonalRegisterVerifyCodes = () => {
  return (
    <AuthLayout header="Personal register">
      <VerifyCodes />
    </AuthLayout>
  );
};

export default PersonalRegisterVerifyCodes;
