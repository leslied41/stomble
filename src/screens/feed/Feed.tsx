import { View, FlatList, ViewToken } from "react-native";
import React, { useRef } from "react";
import { Dimensions } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { SinglePost } from "../../components/feed";

const fakeData = [
  { id: "1", data: "1" },
  { id: "2", data: "2" },
  { id: "3", data: "3" },
  { id: "4", data: "4" },
  { id: "5", data: "5" },
  { id: "6", data: "6" },
];
type Item = Record<string, string>;

const Feed = () => {
  const mediaRefs = useRef<any>([]);
  const tabBarHeight = useBottomTabBarHeight();

  const onViewableItemsChanged = useRef(
    ({ changed }: { changed: ViewToken[]; viewableItems: ViewToken[] }) => {
      changed.forEach((element: ViewToken) => {
        const cell = mediaRefs.current[element.item.id];
        //cell.getStatus();
        if (cell) {
          if (element.isViewable) {
            cell.play();
          } else {
            cell.stop();
          }
        }
      });
    }
  );

  const renderItem = ({ item }: { item: Item }) => (
    <View
      style={{
        flex: 1,
        height: Dimensions.get("window").height - tabBarHeight,
      }}
    >
      <SinglePost
        ref={(SinglePostRef) => (mediaRefs.current[item.id] = SinglePostRef)}
      />
    </View>
  );

  return (
    <View className="flex-1">
      <FlatList
        data={fakeData}
        renderItem={renderItem}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        //removeClippedSubviews
        viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
        keyExtractor={(item) => item.id}
        pagingEnabled
        decelerationRate={"normal"}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

export default Feed;
