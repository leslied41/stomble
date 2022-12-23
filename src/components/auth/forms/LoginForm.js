import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { Formik } from "formik";
import { loginFormValidate } from "../../../services/utils";
import PasswordInput from "./PasswordInput";
import PhoneNumberInput from "./PhoneNumberInput";
import Policy from "./Policy";
import { CustomButton } from "../common";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();
  const submitForm = useCallback((values) => {
    console.log(values);
    //the phone and password will be verified in backend, if
    //verified, navigate to anther screen to verify code sent to
    //phone.
    navigation.navigate("LoginVerifyCodes", { title: "Sign in" });
  }, []);

  const forgetPassword = () => {
    console.log("forget password");
  };

  return (
    <Formik
      initialValues={{
        phone: "",
        password: "",
      }}
      onSubmit={(values) => submitForm(values)}
      validate={loginFormValidate}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View className="flex-1">
          {/* phone */}
          <View>
            <PhoneNumberInput
              onChangeFormattedText={handleChange("phone")}
              defaultValue={values.phone}
            />
          </View>
          {/* password */}
          <View className="mt-5">
            <PasswordInput
              patternCheck={false}
              onBlur={handleChange("password")}
              onChange={handleChange("password")}
              value={values.password}
            />
            <TouchableOpacity className="mt-5" onPress={forgetPassword}>
              <Text className="text-[13px] leading-[15.6px] font-normal text-white">
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
          {/* button */}
          <View className="mt-[86px]">
            <CustomButton
              text="Send code"
              disabled={Object.keys(errors).length !== 0}
              onPress={handleSubmit}
            />
          </View>
          {/* policy */}
          <View className="mt-[13px]">
            <Policy />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
