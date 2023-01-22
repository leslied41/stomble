import React from "react";
import SearchScreen from "./Search";
import SearchResultScreen from "./SearchResult";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<ReactNavigation.SearchParamList>();

const SearchRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResultScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SearchRoutes;
