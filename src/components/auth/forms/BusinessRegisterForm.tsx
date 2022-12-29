import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { Formik } from "formik";
import BirthdayInput from "./BirthdayInput";
import PasswordInput from "./PasswordInput";
import PhoneNumberInput from "./PhoneNumberInput";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import Policy from "./Policy";
import { CustomButton } from "../common";
import { useSelector, useDispatch } from "react-redux";
import {
  getBusinessBirthday,
  openBusinessBirthdayBottomSheet,
} from "../../../redux/features/auth/authSlice";
import { businessValidate } from "../../../services/utils";
import { useNavigation } from "@react-navigation/native";
import { RootScreenNavigationType } from "../../../types/navigation";

type Values = {
  companyName: string;
  email: string;
  phone: string;
  password: string;
};

const BusinessRegisterForm = () => {
  //redux
  const dispatch = useDispatch();
  const birthday = useSelector(getBusinessBirthday);

  const navigation =
    useNavigation<RootScreenNavigationType<"BusinessRegister">>();

  const submitForm = useCallback(
    (values: Values) => {
      //cause birthday can not be put inside formik, so integrate birthday here.
      const data = { ...values, birthday: birthday };
      console.log(data);
      //navigate to BusinessRegisterVerifyCodes screen
      navigation.navigate("BusinessRegisterVerifyCodes");
    },
    [birthday, navigation]
  );

  return (
    <Formik
      initialValues={{
        companyName: "",
        email: "",
        phone: "",
        password: "",
      }}
      onSubmit={(values) => submitForm(values)}
      validate={businessValidate}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View className="flex-1">
          {/* Company name */}
          <View>
            <NameInput
              onBlur={handleBlur("companyName")}
              onChangeText={handleChange("companyName")}
              value={values.companyName}
              placeholder="Company name"
              error={errors.companyName as string}
            />
          </View>

          {/* Email address */}
          <View className=" mt-5">
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

          {/* birthday */}
          <View className="mt-[15px]">
            <BirthdayInput
              currentDate={birthday}
              openBottomSheet={() =>
                dispatch(openBusinessBirthdayBottomSheet())
              }
            />
          </View>

          {/* policy */}
          <View className="mt-20">
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

export default BusinessRegisterForm;
