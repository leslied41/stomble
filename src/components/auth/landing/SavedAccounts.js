import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { UserAccountProfile } from "../common";
import PropTypes from "prop-types";

const users = ["lily", "p", "q"];
//now the users are fake which should be grabbed from localstorage.
const SavedAccounts = () => {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const [centerItemIndex, setCenterItemIndex] = useState(0);

  const inCneter = (dis) => {
    return Math.round(dis / (124 + 56));
  };

  return (
    <>
      {users.length === 1 ? (
        <View className="flex-1 flex-row" horizontal>
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
            ></View>
            {users.map((user, i) => (
              <View key={user} style={i !== 0 ? { marginLeft: 56 } : {}}>
                <UserAccountProfile showRemoveBtn={centerItemIndex === i} />
              </View>
            ))}
            <View
              className="h-[124px] rounded-[62px]"
              style={{ width: (scrollViewWidth - 124) / 2 }}
            ></View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

SavedAccounts.propTypes = {
  users: PropTypes.array,
};
export default SavedAccounts;
