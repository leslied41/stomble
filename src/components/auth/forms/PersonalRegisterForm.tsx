import { View, Text } from "react-native";
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
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  getGender,
  getBirthday,
  openBirthdayBottomSheet,
} from "../../../redux/features/auth/authSlice";
import { personalValidate } from "../../../services/utils";
import { useNavigation } from "@react-navigation/native";
import { RootScreenNavigationType } from "../../../types/navigation";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
};

const PersonalRegisterForm = () => {
  //redux
  const dispatch = useAppDispatch();
  const gender = useAppSelector(getGender);
  const birthday = useAppSelector(getBirthday);

  const navigation =
    useNavigation<RootScreenNavigationType<"PersonalRegister">>();

  const submitForm = useCallback(
    (values: FormValues) => {
      //cause gender and birthday can not be put inside formik, so integrate gender and birthday here.
      const data = { ...values, gender: gender, birthday: birthday };
      console.log(data);
      //naviagete to the verify codes screen
      navigation.navigate("PersonalRegisterVerifyCodes");
    },
    [gender, birthday, navigation]
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
              error={errors.fullName as string}
            />
          </View>

          {/* Email address */}
          <View className="mt-5">
            <EmailInput
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="Email address"
              error={errors.email as string}
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
              ps_length_check={(errors?.password as any)?.ps_length !== "bad"}
              special_char_check={(errors?.password as any)?.special !== "bad"}
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
