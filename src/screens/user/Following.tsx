import { View } from "react-native";
import React from "react";
import {
  NoContent,
  RecommendAccounts,
  FollowingList,
} from "../../components/user";
import { FollowedNoContent } from "../../components/svg";
import { UserScreenNavigationProps } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";

let hasFollowing = true;

const FollowingScreen = () => {
  const navigation = useNavigation<UserScreenNavigationProps<"Following">>();
  return (
    <View className="flex-1 bg-[#222222]">
      <View className="mt-[11px]">
        <RecommendAccounts />
      </View>
      {hasFollowing ? (
        <View className="mx-[14px] mt-[25px] flex-1">
          <FollowingList />
        </View>
      ) : (
        <View className="mt-[70px]">
          <NoContent
            text="Sorry, you haven’t followed any users yet"
            Icon={<FollowedNoContent />}
            onPress={() => navigation.navigate("Feed")}
          />
        </View>
      )}
    </View>
  );
};

export default FollowingScreen;
