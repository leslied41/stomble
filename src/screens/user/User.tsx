import { View } from "react-native";
import React from "react";
import UserRoutes from "./UserRoutes";
import { Top } from "../../components/user/common";

const User = () => {
  return (
    <>
      <Top />
      <View className="flex-1">
        <UserRoutes />
      </View>
    </>
  );
};

export default User;
