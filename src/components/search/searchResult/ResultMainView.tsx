import { View, SectionList, Text } from "react-native";
import React from "react";
import BusinessList from "./BusinessList";
import { VideoCard } from "../common";

const fakeData = [
  {
    title: "Videos",
    data: [
      { id: 1, brand: "Nike" },
      { id: 2, brand: "Adidas" },
      { id: 3, brand: "Puma" },
      { id: 4, brand: "HM" },
      { id: 5, brand: "Zara" },
    ],
  },
];

const ListFooterComponent = () => {
  return <View className="h-6" />;
};

const ResultMainView = () => {
  return (
    <View className="flex-1">
      <SectionList
        sections={fakeData}
        keyExtractor={(item, index) => item.brand + index}
        renderItem={({ item, index }) => (
          <VideoCard
            item={item}
            index={index}
            customMargin
            embedIn="SearchResult"
          />
        )}
        ListHeaderComponent={BusinessList}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-[16px] leading-5 font-bold text-white mb-3 mt-[18px] ml-[25px] mr-[17px]">
            {title}:
          </Text>
        )}
        ListFooterComponent={<ListFooterComponent />}
      />
    </View>
  );
};

export default ResultMainView;
