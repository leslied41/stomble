import { View, TextInput, Text, Button } from "react-native";
import React, { useCallback } from "react";
import { Formik } from "formik";
import BirthdayInput from "./BirthdayInput";
import GenderInput from "./GenderInput";
import PasswordInput from "./PasswordInput";
import PhoneNumberInput from "./PhoneNumberInput";
import { CustomButton } from "../common";
import { useSelector } from "react-redux";
import { getGender, getBirthday } from "../../../redux/features/auth/authSlice";
import { validate } from "../../../services/utils/registerFormValidate";

const PersonalRegisterForm = () => {
  //redux
  const gender = useSelector(getGender);
  const birthday = useSelector(getBirthday);

  const handleSubmit = useCallback(
    (values) => {
      //cause gender can not be put inside formik, so integrate gender here.
      const data = { ...values, gender: gender, birthday: birthday };
      console.log(data);
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
      onSubmit={(values) => handleSubmit(values)}
      validate={validate}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View className="flex-1">
          {/* Full name */}
          <View>
            <TextInput
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              value={values.fullName}
              placeholder="Full name"
              textContentType="name"
              placeholderTextColor={errors.fullName ? "#fff" : "#ABABAB"}
              textAlign="center"
              selectionColor="white"
              className=" py-2 h-8 rounded-[5px]  text-white  text-[16px] leading-[19.2px]"
              style={
                errors.fullName
                  ? { backgroundColor: "#FB4E4E" }
                  : { backgroundColor: "#5C5C5C" }
              }
            />
            {errors.fullName && (
              <Text className="mt-4 text-[13px] leading-4 font-normal text-[#FB4E4E]">
                Please enter your full name
              </Text>
            )}
          </View>

          {/* Email address */}
          <View className=" mt-5">
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email address"
              textContentType="emailAddress"
              placeholderTextColor={errors.email ? "#fff" : "#ABABAB"}
              textAlign="center"
              selectionColor="white"
              className="py-2 h-8 rounded-[5px]  text-white text-[16px] leading-[19.2px]"
              style={
                errors.email
                  ? { backgroundColor: "#FB4E4E" }
                  : { backgroundColor: "#5C5C5C" }
              }
            />
            {errors.email && (
              <Text className="mt-4 text-[13px] leading-4 font-normal text-[#FB4E4E]">
                Please enter a valid email address
              </Text>
            )}
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
            <BirthdayInput />
          </View>
          {/* policy */}
          <View className="mt-7">
            <Text className="text-[13px] leading-[16.38px] font-medium text-white">
              By creating an account to Stomble, you agree to the
              <Text className="text-[13px] leading-[16.38px] font-medium text-[#326FCB]">
                {" "}
                Terms of Service{" "}
              </Text>
              and
              <Text className="text-[13px] leading-[16.38px] font-medium text-[#326FCB]">
                {" "}
                Privacy Policies
              </Text>
            </Text>
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
