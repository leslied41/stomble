import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { NewAccount } from "../../svg";

type CreateAccounOptionProps = {
  onPress: () => void;
};
const CreateAccounOption: FC<CreateAccounOptionProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="w-[163px] h-[163px] justify-center items-center"
      onPress={onPress}
    >
      <NewAccount />
      <Text className="mt-3 text-[14px] leading-[16.8] font-bold text-white text-center">
        Create a new account
      </Text>
    </TouchableOpacity>
  );
};

export default CreateAccounOption;
