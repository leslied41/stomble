import { View } from "react-native";
import React, { useState } from "react";
import {
  SearchHeaderBar,
  SearchHintView,
  SearchBottomSheetLayout,
  SearchBottomSheetView,
  MainView,
} from "../../components/search";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  getIsSearchBottomOpen,
  closeSearchBottomSheet,
} from "../../redux/features/search/searchSlice";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearchList, setShowSearchList] = useState(false);

  //redux
  const dispatch = useAppDispatch();
  const isBottomSheetOpen = useAppSelector(getIsSearchBottomOpen);

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
          <View className="mt-7 mx-[17px] flex-1">
            <MainView />
          </View>
        )}
      </View>

      {/*  bottom sheet */}
      <SearchBottomSheetLayout
        isBottomSheetOpen={isBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeSearchBottomSheet())}
      >
        <SearchBottomSheetView />
      </SearchBottomSheetLayout>
    </View>
  );
};

export default Search;
