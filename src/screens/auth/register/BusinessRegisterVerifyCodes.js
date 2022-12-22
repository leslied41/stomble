import React from "react";
import { AuthLayout } from "../../../components/auth";
import { VerifyCodes } from "../../../components/auth/common";

const BusinessRegisterVerifyCodes = () => {
  return (
    <AuthLayout header="Business register">
      <VerifyCodes />
    </AuthLayout>
  );
};

export default BusinessRegisterVerifyCodes;
