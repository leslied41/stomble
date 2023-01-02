import { View } from "react-native";
import React, { useState } from "react";
import {
  SearchHeaderBar,
  SearchHintView,
  SearchBottomSheetLayout,
  SearchBottomSheetView,
  ResultMainView,
} from "../../components/search";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  getIsSearchResultBottomOpen,
  closeSearchResultBottomSheet,
} from "../../redux/features/search/searchSlice";

const SearchResult = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearchList, setShowSearchList] = useState(false);

  //redux
  const dispatch = useAppDispatch();
  const isBottomSheetOpen = useAppSelector(getIsSearchResultBottomOpen);
  // const seachBySearchText = useCallback(() => {
  //   //when get result
  //   //use rtk lazyquery, trigger() to trigger new query.
  // }, [searchText]);

  return (
    <View className="bg-[#222222] flex-1 ">
      <SearchHeaderBar
        searchText={searchText}
        setSearchText={setSearchText}
        showSearchList={showSearchList}
        setShowSearchList={setShowSearchList}
      />

      <View className="flex-1 ">
        {showSearchList ? (
          <SearchHintView searchText={searchText} />
        ) : (
          <View className="mt-7 flex-1">
            <ResultMainView />
          </View>
        )}
      </View>

      {/*  bottom sheet */}
      <SearchBottomSheetLayout
        isBottomSheetOpen={isBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeSearchResultBottomSheet())}
      >
        <SearchBottomSheetView />
      </SearchBottomSheetLayout>
    </View>
  );
};

export default SearchResult;
