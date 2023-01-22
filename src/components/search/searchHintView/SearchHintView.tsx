import { View } from "react-native";
import React, { FC } from "react";
import History from "./History";
import Hint from "./Hint";

type Props = {
  searchText: string;
};

const SearchHintView: FC<Props> = ({ searchText }) => {
  return (
    <View className="flex-1 bg-[#222222]">
      {searchText ? <Hint /> : <History />}
    </View>
  );
};

export default SearchHintView;
