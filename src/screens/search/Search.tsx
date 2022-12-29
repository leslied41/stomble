import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  SearchHeaderBar,
  SearchHintView,
  VideoCardList,
  SearchBottomSheetLayout,
} from "../../components/search";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsSearchBottomOpen,
  closeSearchBottomSheet,
} from "../../redux/features/search/searchSlice";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearchList, setShowSearchList] = useState(false);

  //redux
  const dispatch = useDispatch();
  const isBottomSheetOpen = useSelector(getIsSearchBottomOpen);

  // const seachBySearchText = useCallback(() => {
  //   //when get result
  //   //use rtk lazyquery, trigger() to trigger new query.
  // }, [searchText]);

  return (
    <View className="bg-[#222222] flex-1 ">
      <SearchHeaderBar
        searchText={searchText}
        setSearchText={setSearchText}
        setShowSearchList={setShowSearchList}
      />
      <View className="flex-1 mx-[17px]">
        {showSearchList ? (
          <SearchHintView />
        ) : (
          <View className="mt-7 flex-1">
            <VideoCardList title="Recommendations" />
          </View>
        )}
      </View>
      {/*  bottom sheet */}
      <SearchBottomSheetLayout
        isBottomSheetOpen={isBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeSearchBottomSheet())}
      >
        <Text>test</Text>
      </SearchBottomSheetLayout>
    </View>
  );
};

export default Search;
