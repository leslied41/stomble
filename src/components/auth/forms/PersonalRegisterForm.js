import { View, TextInput, Text } from "react-native";
import React, { useCallback } from "react";
import { Formik } from "formik";
import BirthdayInput from "./BirthdayInput";
import GenderInput from "./GenderInput";
import PasswordInput from "./PasswordInput";
import PhoneNumberInput from "./PhoneNumberInput";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import Policy from "./Policy";
import { CustomButton } from "../common";
import { useSelector, useDispatch } from "react-redux";
import {
  getGender,
  getBirthday,
  openBirthdayBottomSheet,
} from "../../../redux/features/auth/authSlice";
import { personalValidate } from "../../../services/utils";
import { useNavigation } from "@react-navigation/native";

const PersonalRegisterForm = () => {
  //redux
  const dispatch = useDispatch();
  const gender = useSelector(getGender);
  const birthday = useSelector(getBirthday);

  const navigation = useNavigation();

  const submitForm = useCallback(
    (values) => {
      //cause gender and birthday can not be put inside formik, so integrate gender and birthday here.
      const data = { ...values, gender: gender, birthday: birthday };
      console.log(data);
      //naviagete to the verify codes screen
      navigation.navigate("PersonalRegisterVerifyCodes");
    },
    [gender, birthday]
  );

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        password: "",
      }}
      onSubmit={(values) => submitForm(values)}
      validate={personalValidate}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View className="flex-1">
          {/* Full name */}
          <View>
            <NameInput
              onBlur={handleBlur("fullName")}
              onChangeText={handleChange("fullName")}
              value={values.fullName}
              placeholder="Full name"
              error={errors.fullName}
            />
          </View>

          {/* Email address */}
          <View className="mt-5">
            <EmailInput
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="Email address"
              error={errors.email}
            />
          </View>

          {/* phone number */}
          <View className="mt-5">
            <PhoneNumberInput
              onChangeFormattedText={handleChange("phone")}
              defaultValue={values.phone}
            />
            <Text className="text-[13px] leading-[15px] font-normal text-[#FB4E4E] mt-5">
              We will send code to your phone number
            </Text>
          </View>

          {/* password */}
          <View className="mt-5">
            <PasswordInput
              onBlur={handleChange("password")}
              onChange={handleChange("password")}
              value={values.password}
              ps_length_check={errors?.password?.ps_length !== "bad"}
              special_char_check={errors?.password?.special !== "bad"}
            />
          </View>

          {/* gender */}
          <View className="mt-[14px]">
            <GenderInput />
          </View>

          {/* birthday */}
          <View className="mt-[15px]">
            <BirthdayInput
              currentDate={birthday}
              openBottomSheet={() => dispatch(openBirthdayBottomSheet())}
            />
          </View>
          {/* policy */}
          <View className="mt-7">
            <Policy />
          </View>
          {/* Button */}
          <View className="mt-4">
            <CustomButton
              text="Send code"
              onPress={handleSubmit}
              disabled={Object.keys(errors).length !== 0}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default PersonalRegisterForm;
