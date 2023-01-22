import { View, Text } from "react-native";
import React, { Fragment } from "react";
import SingleHistoryRecord from "./SingleHistoryRecord";

const fakeHistory = ["Soup", `McDonald's`, "Chinese food", "Coke", "Hot pot"];

const History = () => {
  return (
    <View className="mx-[17px] mt-5">
      <Text className="text-[16px] leading-[19.2px] font-bold text-white">
        Search History
      </Text>
      <View className=" flex-row flex-wrap">
        {fakeHistory.map((item) => {
          return (
            <Fragment key={item}>
              <SingleHistoryRecord item={item} />
            </Fragment>
          );
        })}
      </View>
    </View>
  );
};

export default History;
