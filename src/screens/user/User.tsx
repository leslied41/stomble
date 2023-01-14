import { View, Text } from "react-native";
import React from "react";
import { UserLayout } from "../../components/user";

const User = () => {
  return (
    <UserLayout>
      <View className="flex-1 mt-[90px]">
        <Text>User</Text>
      </View>
    </UserLayout>
  );
};

export default User;
