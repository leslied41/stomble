import { View, FlatList, ViewToken, Dimensions } from "react-native";
import React, { useRef } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { SinglePost } from "../../components/feed";
import { useAsyncStorageScrolled } from "../../hooks";
import {
  FeedBottomSheetLayout,
  MoreOptionsBottomSheetView,
  ReadMoreBottomView,
  ShareBottomView,
  ThanksReportBottomView,
} from "../../components/feed";
import FeedProvider from "../../components/feed/context/FeedProvider";
import { SearchBottomSheetView as BrandInfoView } from "../../components/search";
//redux
import { getFeedBottomSheetView } from "../../redux/features/feed/feedSlice";
import { useAppSelector } from "../../redux/store";
import { ReportVideoBottomView } from "../../components/feed/bottomSheet";

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
  const [hasScrolled, writeItemToStorage] =
    useAsyncStorageScrolled("has_scrolled");
  //redux
  const feedBottomSheetView = useAppSelector(getFeedBottomSheetView);

  const onViewableItemsChanged = useRef(
    ({ changed }: { changed: ViewToken[]; viewableItems: ViewToken[] }) => {
      changed.forEach((element: ViewToken) => {
        const cell = mediaRefs.current[element.item.id];
        if (cell) {
          if (element.isViewable) {
            if (element.item.id === "2") {
              !hasScrolled && writeItemToStorage("true");
              //if has not scrolled then check if user has scroll to another item.
            }

            cell.play();
          } else {
            cell.stop();
          }
        }
      });
    }
  );

  const renderItem = ({ item, index }: { item: Item; index: number }) => (
    <View
      style={{
        flex: 1,
        height: Dimensions.get("window").height - tabBarHeight,
      }}
    >
      <SinglePost
        isFirstItemOfList={index === 0}
        ref={(SinglePostRef) => (mediaRefs.current[item.id] = SinglePostRef)}
      />
    </View>
  );

  return (
    <FeedProvider>
      <View className="flex-1">
        <FlatList
          data={fakeData}
          renderItem={renderItem}
          windowSize={3}
          initialNumToRender={0}
          maxToRenderPerBatch={2}
          removeClippedSubviews
          //usePoster
          //posterSource={{uri:''}}
          viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
          keyExtractor={(item) => item.id}
          pagingEnabled
          decelerationRate={"normal"}
          onViewableItemsChanged={onViewableItemsChanged.current}
        />
        <FeedBottomSheetLayout>
          {feedBottomSheetView === "FeedReadMore" && <ReadMoreBottomView />}
          {feedBottomSheetView === "BrandInfo" && <BrandInfoView />}
          {feedBottomSheetView === "FeedMoreOptions" && (
            <MoreOptionsBottomSheetView />
          )}
          {feedBottomSheetView === "FeedShare" && <ShareBottomView />}
          {feedBottomSheetView === "FeedReportVideo" && (
            <ReportVideoBottomView />
          )}
          {feedBottomSheetView === "FeedThanksReport" && (
            <ThanksReportBottomView />
          )}
        </FeedBottomSheetLayout>
      </View>
    </FeedProvider>
  );
};

export default Feed;
