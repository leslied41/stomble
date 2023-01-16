import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "../../icons";
import { BusinessProfile } from "../common";
import { useAppDispatch } from "../../../redux/store";
import { openUserBottomSheet } from "../../../redux/features/user/userSlice";

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
  index,
  onPress,
}: {
  item: SingleItem;
  index: number;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={{ marginLeft: index === 0 ? 0 : 9 }}
    onPress={onPress}
  >
    <BusinessProfile image={item.image} />
  </TouchableOpacity>
);

const RecommendAccounts = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //redux
  const dispatch = useAppDispatch();

  const renderItem = ({ item, index }: { item: SingleItem; index: number }) => {
    return (
      <Item
        item={item}
        index={index}
        onPress={() => dispatch(openUserBottomSheet())}
      />
    );
  };

  return (
    <View className="pb-[11px] border-b border-[#5C5C5C]">
      <View className="ml-[27px] mr-3 flex-row justify-between items-center">
        <Text className="text-[10.91px] leading-[13.91px] font-medium text-white">
          Recommended business accounts
        </Text>
        <Pressable onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
          {isDropdownOpen ? (
            <ChevronUp size={24} color="white" />
          ) : (
            <ChevronDown size={24} color="white" />
          )}
        </Pressable>
      </View>

      <View
        style={{
          maxHeight: isDropdownOpen ? 250 : 0,
          overflow: "hidden",
          marginLeft: 24.55,
        }}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default RecommendAccounts;
