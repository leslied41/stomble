import React from "react";
import { VerifyCodes } from "../../../components/auth";
import { ScreenLayout } from "../../../components/common";

const PersonalRegisterVerifyCodes = () => {
  return (
    <ScreenLayout header="Personal register">
      <VerifyCodes />
    </ScreenLayout>
  );
};

export default PersonalRegisterVerifyCodes;
