import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { ArrowDown } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import {
  openBottomSheet,
  getGender,
  clearGender,
} from "../../../redux/features/auth/authSlice";

const GenderInput = () => {
  //redux
  const dispatch = useDispatch();
  const gender = useSelector(getGender);

  useEffect(() => {
    return () => {
      dispatch(clearGender());
    };
  }, []);

  return (
    <Pressable
      className="flex-row items-center"
      onPress={() => dispatch(openBottomSheet())}
    >
      <View className="flex-1 h-8 bg-[#5C5C5C] rounded-[5px] justify-center mr-3">
        <Text
          className="text-[16px] leading-[19.2px] font-normal  text-center"
          style={gender ? { color: "#fff" } : { color: "#ABABAB" }}
        >
          {gender ? gender : "Gender"}
        </Text>
      </View>
      <ArrowDown />
    </Pressable>
  );
};

export default GenderInput;
