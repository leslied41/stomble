import { View, Text, Button } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import {
  HomeScreenTabProps,
  HomeScreenNavigationProps,
} from "../../types/navigation";

const TestNavigation = () => {
  const navigation = useNavigation<HomeScreenNavigationProps<"Settings">>();
  return (
    <Button
      onPress={() => navigation.navigate("PersonalInfo")}
      title="to personal info"
    />
  );
};

const Settings = ({ navigation }: HomeScreenTabProps<"Settings">) => {
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
      <TestNavigation />
    </View>
  );
};

export default Settings;
