import React from "react";
import { Animated, View, TouchableOpacity } from "react-native";
import { EmptyHeartIcon, UserIcon } from "../../icons";

function TabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 74,
        backgroundColor: "#222222",
        justifyContent: "space-between",
        borderBottomColor: "#5C5C5C",
        borderBottomWidth: 1,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              borderColor: isFocused ? "white" : "transparent",
              borderBottomWidth: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {route.name === "Liked" && (
              <EmptyHeartIcon color={isFocused ? "#fff" : "#5C5C5C"} />
            )}
            {route.name === "Following" && (
              <UserIcon color={isFocused ? "#fff" : "#5C5C5C"} />
            )}

            <Animated.Text
              style={{
                opacity: 1,
                color: isFocused ? "#fff" : "#5C5C5C",
                marginTop: 8.5,
                fontSize: 11,
                lineHeight: 13.2,
                fontWeight: "400",
              }}
            >
              {label} (0)
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
