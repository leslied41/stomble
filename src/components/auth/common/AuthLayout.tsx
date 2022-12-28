import { View, StatusBar } from "react-native";
import React, { useState } from "react";
import { HeaderBar } from "../../common";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";

const AuthLayout = ({ children, header }) => {
  const [height, setHeight] = useState(0);
  const navigation = useNavigation();

  return (
    <View className="bg-[#232637] flex-1">
      <StatusBar barStyle="light-content" />
      <HeaderBar text={header} manual onPress={navigation.goBack} />
      <View
        className="bg-black flex-1 relative"
        onLayout={(e) => {
          const { height: h } = e.nativeEvent.layout;
          setHeight(h);
        }}
      >
        <View className="h-[200px] w-full bg-[#232637] rounded-b-[12px]" />
        <View
          className="absolute left-[17px] right-[17px] bg-[#222222] px-[22px]"
          style={{ height: height }}
        >
          {/* children goes here */}
          {children}
        </View>
      </View>
    </View>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};
export default AuthLayout;
