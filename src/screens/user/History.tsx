import { SectionList, View } from "react-native";
import React from "react";
import { NoContent, VideoThumbnails } from "../../components/user/common";
import { HistoryNoContent } from "../../components/svg";

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
];

let hasHistoryRecord = true;

const HistoryScreen = () => {
  return (
    <View className="flex-1 bg-[#222222]">
      {hasHistoryRecord ? (
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
            text="Sorry, you haven’t any histories yet"
            Icon={<HistoryNoContent />}
          />
        </View>
      )}
    </View>
  );
};

export default HistoryScreen;
