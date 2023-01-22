import { View } from "react-native";
import React from "react";
import { ScreenLayout } from "../../components/common";
import { NotificationNoContent, NotificationList } from "../../components/user";

let noNotification = false;

const Notification = () => {
  return (
    <ScreenLayout header="Notification">
      {noNotification ? (
        <View className="mt-[33px]">
          <NotificationNoContent />
        </View>
      ) : (
        <View className="flex-1 mt-5">
          <NotificationList />
        </View>
      )}
    </ScreenLayout>
  );
};

export default Notification;
