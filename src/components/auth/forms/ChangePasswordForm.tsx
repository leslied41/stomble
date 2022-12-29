import { View } from "react-native";
import React, { useCallback } from "react";
import { Formik } from "formik";
import PasswordInput from "./PasswordInput";
import { CustomButton } from "../common";
import { changePasswordFormValidate } from "../../../services/utils";

const ChangePasswordForm = () => {
  const submitForm = useCallback((values: { password: string }) => {
    console.log(values);
    //send post with this ps to backend to update ps.
    //after successfully updated ps, navigate to a certain page, not sure now.
    //either logged in or back to login page.
  }, []);
  return (
    <Formik
      initialValues={{
        password: "",
      }}
      onSubmit={(values) => submitForm(values)}
      validate={changePasswordFormValidate}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View>
          <View>
            <PasswordInput
              onBlur={handleChange("password")}
              onChange={handleChange("password")}
              value={values.password}
              ps_length_check={(errors?.password as any).ps_length !== "bad"}
              special_char_check={(errors?.password as any).special !== "bad"}
            />
          </View>
          <View className="mt-6">
            <CustomButton
              text="Submit"
              borderRadius={100}
              onPress={handleSubmit}
              disabled={Object.keys(errors).length !== 0}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
