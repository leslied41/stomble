import {
  View,
  Modal,
  FlatList,
  Dimensions,
  ViewToken,
  useWindowDimensions,
} from "react-native";
import React, { FC, useEffect, useRef } from "react";
import {
  FeedBottomSheetLayout,
  MoreOptionsBottomSheetView,
  ReadMoreBottomView,
  ShareBottomView,
  SinglePost,
  ReportVideoBottomView,
  ThanksReportBottomView,
} from "../../feed";
import { BusinessBottomSheetView as BrandInfoView } from "../../../components/search";
//redux
import { getFeedBottomSheetView } from "../../../redux/features/feed/feedSlice";
import { useAppSelector } from "../../../redux/store";
//animate
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type VideoModalProps = {
  modalVisible: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const fakeData = [
  { id: "1", data: "1" },
  { id: "2", data: "2" },
  { id: "3", data: "3" },
];
type Item = Record<string, string>;

const VideoModal: FC<VideoModalProps> = ({ modalVisible, setIsModalOpen }) => {
  const mediaRefs = useRef<any>([]);
  const windowWidth = useWindowDimensions().width;

  //redux
  const feedBottomSheetView = useAppSelector(getFeedBottomSheetView);

  //animate
  const X = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(X.value, {
          duration: 100,
          easing: Easing.linear,
        }),
      },
    ],
  }));

  const closeModalHandler = useAnimatedGestureHandler({
    onStart: () => {},
    onActive: (e) => {
      X.value = e.translationX;
    },
    onEnd: (e) => {
      if (X.value > windowWidth / 2 || e.velocityX > 500) {
        runOnJS(setIsModalOpen)(false);
        X.value = 0;
      } else {
        X.value = 0;
      }
    },
  });

  const onViewableItemsChanged = useRef(
    ({ changed }: { changed: ViewToken[]; viewableItems: ViewToken[] }) => {
      changed.forEach((element: ViewToken) => {
        const cell = mediaRefs.current[element.item.id];
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
      style={[
        {
          flex: 1,
          height: Dimensions.get("window").height,
        },
      ]}
    >
      <SinglePost
        hidenOverlay={false}
        isFirstItemOfList={false}
        ref={(SinglePostRef) => (mediaRefs.current[item.id] = SinglePostRef)}
      />
    </View>
  );
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <PanGestureHandler onGestureEvent={closeModalHandler}>
        <Animated.View style={[{ flex: 1 }, animatedStyle]}>
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
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
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
        </Animated.View>
      </PanGestureHandler>
    </Modal>
  );
};

export default VideoModal;
