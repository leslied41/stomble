import { View, Text } from "react-native";
import React from "react";
import { UserAccountProfile } from "../common";
import { CheckedCircle, UncheckedCircle, Bell } from "../../svg";
import PropTypes from "prop-types";

const AccountOption = ({ chosen }) => {
  return (
    <View className="relative justify-center items-center w-[163px] h-[163px] rounded-[10px] border-2 border-[#00A25B]">
      <View className="absolute left-3 top-[11px]">
        {chosen ? <CheckedCircle /> : <UncheckedCircle />}
      </View>
      <View className="absolute top-[11px] right-3">
        <Bell />
      </View>
      <UserAccountProfile
        height={92}
        width={92}
        rounded={46}
        gap={12}
        fontSize={14}
        lineHeight={16.8}
        color="#fff"
        isTouchableOpacity={false}
      />
    </View>
  );
};

AccountOption.propTypes = {
  chosen: PropTypes.bool,
};
export default AccountOption;
