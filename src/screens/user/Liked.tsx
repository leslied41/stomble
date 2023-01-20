import { View, FlatList, Pressable } from "react-native";
import React, { useMemo, useState } from "react";
import { DeleteBar, NoContent, VideoThumbnails } from "../../components/user";
import { LikedNoContent } from "../../components/svg";
import { UserScreenNavigationProps } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { converArrayInTriple } from "../../services/utils";
import { BinIcon } from "../../components/icons";

let hasLikedVideo = true;

const DATA = [
  { id: 1, src: "" },
  { id: 2, src: "" },
  { id: 3, src: "" },
  { id: 4, src: "" },
  { id: 5, src: "" },
  { id: 6, src: "" },
  { id: 7, src: "" },
  { id: 8, src: "" },
  { id: 9, src: "" },
];

const LikedScreen = () => {
  const [deleteOn, setDeleteOn] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Array<number | string>>(
    []
  );
  const navigation = useNavigation<UserScreenNavigationProps<"Following">>();
  const processed_data = useMemo(() => converArrayInTriple(DATA), []);

  const turnOnDelete = () => {
    setDeleteOn(true);
  };

  return (
    <View className="flex-1 bg-[#222222]">
      {hasLikedVideo ? (
        <View className="flex-1 relative">
          <View className="h-[33.5px] items-end justify-center mx-4">
            <Pressable onPress={turnOnDelete}>
              <BinIcon />
            </Pressable>
          </View>
          <FlatList
            data={processed_data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <VideoThumbnails
                videos={item}
                deleteOn={deleteOn}
                setSelectedItems={setSelectedItems}
                selectedItems={selectedItems}
              />
            )}
          />
          {deleteOn && (
            <DeleteBar
              setDeleteOn={setDeleteOn}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          )}
        </View>
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
