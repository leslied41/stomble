import { View, Text, Button } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";

const Settings = ({ navigation }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 dark:bg-slate-700">
      <Text>settings</Text>
      <Button onPress={toggleColorScheme} title="Dark/Ligh" />
      <Button
        onPress={() => navigation.navigate("PersonalInfo")}
        title="to personal info"
      />
      <Button
        onPress={() => navigation.navigate("FullName")}
        title="to full name"
      />
    </View>
  );
};

export default Settings;
