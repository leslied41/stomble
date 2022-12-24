import { View, Text, TouchableOpacity } from "react-native";
import React, { useMemo, useCallback, useState } from "react";
import AccountOption from "./AccountOption";
import CreateAccounOption from "./CreateAccounOption";
import { CustomButton } from "../common";
import { converArrayInPair } from "../../../services/utils";

const accounts = ["John", "Job", "Leslie"];
//fake accounts
const LoginBottomSheet = () => {
  const [accountChosen, setAccountChosen] = useState("");
  const accounts_pair = useMemo(() => converArrayInPair(accounts), []);

  const addNewAccount = useCallback(() => {
    console.log("create a new account");
  }, []);

  const chooseAccount = (value) => () => {
    setAccountChosen(value);
    console.log(value);
  };

  const login = useCallback(() => {}, [accountChosen]);

  return (
    <View>
      <View className="pb-[10px] border-b border-[#5C5C5C]">
        <Text className="text-center text-[14px] leading-[16.8px] font-bold text-white">
          Account
        </Text>
      </View>

      <View className="mx-[17px] mt-3">
        <View className="gap-y-[15px]">
          {accounts_pair.map((pair, i) => (
            <View key={i} className="flex-row gap-x-[15px]">
              {pair.map((user) => (
                <TouchableOpacity
                  className="flex-1"
                  key={user}
                  onPress={chooseAccount(user)}
                >
                  <AccountOption chosen={accountChosen === user} />
                </TouchableOpacity>
              ))}
              {pair.length !== 2 && (
                <View className="flex-1">
                  <CreateAccounOption onPress={addNewAccount} />
                </View>
              )}
            </View>
          ))}
        </View>
      </View>

      <View className="mt-[113px] mx-[34px]">
        <CustomButton
          text="Log in"
          borderRadius={100}
          onPress={login}
          disabled={!accountChosen}
        />
      </View>
    </View>
  );
};

export default LoginBottomSheet;
