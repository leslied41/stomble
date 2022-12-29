import { View, Pressable, TextInput } from "react-native";
import React, { FC, useRef } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SearchBackIcon, SearchIcon } from "../../svg";

type SearchHeaderBarProps = {
  searchText: string;
  setSearchText: (v: string) => void;
  setShowSearchList: (v: boolean) => void;
};

const SearchHeaderBar: FC<SearchHeaderBarProps> = ({
  searchText,
  setSearchText,
  setShowSearchList,
}) => {
  const navigation = useNavigation();
  const inputRef = useRef<TextInput>(null);
  //plan to use rtk query. const {data,isFetching} = useQueryByText(searchText)
  //so every time searchText updates, useQueryByText will be called and
  //generate new data.

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        inputRef.current?.blur();
        setShowSearchList(false);
      };
    }, [setShowSearchList])
  );

  return (
    <View className="h-[119px] mx-[18px]">
      <View className="mt-[72px] flex-1 flex-row items-center justify-between gap-x-[19.25px]">
        <Pressable onPress={navigation.goBack}>
          <SearchBackIcon />
        </Pressable>
        <View className="flex-1 flex-row relative">
          <TextInput
            ref={inputRef}
            placeholder="Search"
            className="h-[34px] bg-[#5C5C5C] rounded-[5px] flex-1 pl-[13px] pr-[40px] text-[14px] leading-[16.8px] font-normal text-white"
            placeholderTextColor="#fff"
            value={searchText}
            onFocus={() => setShowSearchList(true)}
            onChangeText={setSearchText}
          />
          <View className="absolute right-[11.95px] h-[34px] justify-center">
            <SearchIcon />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchHeaderBar;
