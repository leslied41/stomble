import { View, Text } from "react-native";
import React, { FC, useState } from "react";
import { ScreenLayout } from "../../../components/common";
import SettingInputBox from "../../../components/settings/SettingInputBox";
import AlertIcon from "../../../components/svg/AlertIcon";
import { CommonScreenProps } from "../../../types/navigation";
import Toast from "react-native-toast-message";


const FullName: FC<CommonScreenProps<"FullName">> = ({ navigation }) => {
  const [name, setName] = useState({ firstName: 'John', lastName: 'Sarkis', })

  const firstNameError = name.firstName.length <= 0
  const lastNameError = name.lastName.length <= 0


  const onPress = () => {
    console.log("name saved")
    navigation.goBack()
    Toast.show({
      position: 'bottom',
      bottomOffset: -10,
      type: 'settingToast',
      visibilityTime: 3000,
      text1: "Great! Your full name has been successfully changed"
    });
  }

  return (
    <ScreenLayout header="Full name" done={onPress}>
      <View className="py-6 gap-6  justify-start">
        <View className="flex-row items-center justify-between">
          <Text className="text-[14px] font-medium text-white mr-4">First name</Text>
          <View className="flex-1">
            <SettingInputBox placeholder={"Your first name"} onPress={() => setName({ ...name, firstName: "" })} value={name.firstName} onChange={(value) => setName({ ...name, firstName: value })} error={firstNameError} />
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-[14px] font-medium text-white mr-4">Last name</Text>
          <View className="flex-1">
            <SettingInputBox placeholder={"Your last name"} onPress={() => setName({ ...name, lastName: "" })} value={name.lastName} onChange={(value) => setName({ ...name, lastName: value })} error={lastNameError} />
          </View>
        </View>
      </View>
      <View className="">
        {firstNameError && lastNameError ?
          <View className="flex-row items-center">
            <AlertIcon />
            <Text className="ml-2 text-[13px] font-normal mr-4 text-[#FB4E4E] leading-[16px]">{`Please enter your first name and last name`}</Text>
          </View> : firstNameError ?
            <View className="flex-row items-center">
              <AlertIcon />
              <Text className="ml-2 text-[13px] font-normal mr-4 text-[#FB4E4E] leading-[16px]">{`Please enter your first name`}</Text>
            </View> : lastNameError &&
            <View className="flex-row items-center">
              <AlertIcon />
              <Text className="ml-2 text-[13px] font-normal mr-4 text-[#FB4E4E] leading-[16px]">{`Please enter your last name`}</Text>
            </View>
        }
      </View>
    </ScreenLayout>
  );
};

export default FullName;
