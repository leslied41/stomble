import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { ScreenLayout, BottomSheetLayout } from "../../components/common";
import { BusinessProfile, FollowingButton } from "../../components/user/common";
import { BusinessBottomSheetView } from "../../components/search";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  getIsRecommendedAccountBusinessBottomOpen,
  openRecommendedAccountBusinessBottomSheet,
  closeRecommendedAccountBusinessBottomSheet,
} from "../../redux/features/user/userSlice";

type SingleItem = { id: string; image: string };

const DATA: SingleItem[] = [
  {
    id: "1",
    image: "",
  },
  {
    id: "2",
    image: "",
  },
  {
    id: "3",
    image: "",
  },
  {
    id: "4",
    image: "",
  },
  {
    id: "5",
    image: "",
  },
  {
    id: "6",
    image: "",
  },
  {
    id: "7",
    image: "",
  },
  {
    id: "8",
    image: "",
  },
];

const Item = ({
  item,
  onPress,
  index,
}: {
  item: SingleItem;
  index: number;
  onPress: () => void;
}) => (
  <View
    className="flex-row justify-between items-center"
    style={{ marginTop: index === 0 ? 0 : 15 }}
  >
    <TouchableOpacity onPress={onPress} className="flex-row items-center">
      <BusinessProfile image={item.image} />
      <View className="ml-[11.53px]">
        <Text className="text-[10.91px] leading-[13px] text-white font-medium">
          McDonald's
        </Text>
        <Text className="text-[#ABABAB] text-[10.91px] leading-[13px] font-medium mt-1">
          I'm loving it
        </Text>
      </View>
    </TouchableOpacity>

    <FollowingButton followed onPress={() => console.log("following")} />
  </View>
);

const RecommendedAccounts = () => {
  //redux
  const dispatch = useAppDispatch();
  const isBusinessBottomSheetOpen = useAppSelector(
    getIsRecommendedAccountBusinessBottomOpen
  );

  const renderItem = ({ item, index }: { item: SingleItem; index: number }) => {
    return (
      <Item
        item={item}
        index={index}
        onPress={() => dispatch(openRecommendedAccountBusinessBottomSheet())}
      />
    );
  };
  return (
    <View className="flex-1">
      <ScreenLayout header="Recommended accounts">
        <View className="flex-1 mt-[13px]">
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScreenLayout>
      <BottomSheetLayout
        isBottomSheetOpen={isBusinessBottomSheetOpen}
        closeBottomSheet={() =>
          dispatch(closeRecommendedAccountBusinessBottomSheet())
        }
      >
        <BusinessBottomSheetView />
      </BottomSheetLayout>
    </View>
  );
};

export default RecommendedAccounts;
