import { View, ScrollView } from "react-native";
import React, { FC, useState } from "react";
import { UserAccountProfile } from "../common";

type SavedAccountsProps = {
  users?: any[];
};

const users = ["lily", "p", "q"];
//now the users are fake which should be grabbed from localstorage.
const SavedAccounts: FC<SavedAccountsProps> = ({}) => {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const [centerItemIndex, setCenterItemIndex] = useState(0);

  const inCneter = (dis: number) => {
    return Math.round(dis / (124 + 56));
  };

  return (
    <>
      {users.length === 1 ? (
        <View className="flex-1 flex-row">
          <View className="justify-center flex-1  flex-row">
            <View>
              <UserAccountProfile showRemoveBtn />
            </View>
          </View>
        </View>
      ) : (
        <ScrollView
          className="flex-1 flex-row"
          horizontal
          onLayout={(e) => {
            const { width } = e.nativeEvent.layout;
            setScrollViewWidth(width);
          }}
          onScroll={(e) => {
            const { contentOffset } = e.nativeEvent;
            setCenterItemIndex(inCneter(contentOffset.x));
          }}
          scrollEventThrottle={200}
        >
          <View className="justify-start flex-1 flex-row">
            <View
              className="h-[124px] rounded-[62px]"
              style={{ width: (scrollViewWidth - 124) / 2 }}
            />
            {users.map((user, i) => (
              <View key={user} style={i !== 0 ? { marginLeft: 56 } : {}}>
                <UserAccountProfile showRemoveBtn={centerItemIndex === i} />
              </View>
            ))}
            <View
              className="h-[124px] rounded-[62px]"
              style={{ width: (scrollViewWidth - 124) / 2 }}
            />
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default SavedAccounts;
