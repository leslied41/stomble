import { View, SectionList } from "react-native";
import React from "react";
import { NoContent, VideoThumbnails } from "../../components/user/common";
import { LikedNoContent } from "../../components/svg";
import { UserScreenNavigationProps } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";

let hasLikedVideo = false;

const DATA = [
  {
    date: "2015-03-25",
    data: [
      {
        id: 1,
        videos: [
          { id: 1, src: "" },
          { id: 2, src: "" },
          { id: 3, src: "" },
          { id: 4, src: "" },
        ],
      },
    ],
  },
  {
    date: "2015-03-26",
    data: [
      {
        id: 2,
        videos: [
          { id: 1, src: "" },
          { id: 2, src: "" },
          { id: 3, src: "" },
          { id: 4, src: "" },
          { id: 5, src: "" },
        ],
      },
    ],
  },
  {
    date: "2015-03-27",
    data: [
      {
        id: 3,
        videos: [
          { id: 1, src: "" },
          { id: 2, src: "" },
          { id: 3, src: "" },
        ],
      },
    ],
  },
];

const LikedScreen = () => {
  const navigation = useNavigation<UserScreenNavigationProps<"Following">>();

  return (
    <View className="flex-1 bg-[#222222]">
      {hasLikedVideo ? (
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({ section }) => (
            <VideoThumbnails
              videos={section.data[0].videos}
              date={section.date}
            />
          )}
        />
      ) : (
        <View className="mt-[70px]">
          <NoContent
            text="Sorry, you haven’t liked any video yet"
            Icon={<LikedNoContent />}
            onPress={() => navigation.navigate("Feed")}
          />
        </View>
      )}
    </View>
  );
};

export default LikedScreen;
