import { View, Image } from "react-native";
import React from "react";

const NumberGenerator = ({ num }: { num: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "baseline",
      }}
    >
      {num.split("").map((n, index) => {
        if (n === "1")
          return (
            <View className="h-[13px] w-[8px] items-center justify-start ">
              <Image
                source={require("../../../../assets/images/feed/1.png")}
                key={`number-image-${index}`}
                style={{ width: 7, height: 13 }}
              />
            </View>
          );
        if (n === "2")
          return (
            <View className="h-[13px] w-[8px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/2.png")}
                key={`number-image-${index}`}
                style={{ width: 7, height: 13 }}
              />
            </View>
          );
        if (n === "3")
          return (
            <View className="h-[13px] w-[8px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/3.png")}
                key={`number-image-${index}`}
                style={{ width: 7, height: 13 }}
              />
            </View>
          );
        if (n === "4")
          return (
            <View className="h-[13px] w-[8px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/4.png")}
                key={`number-image-${index}`}
                style={{ width: 7, height: 13 }}
              />
            </View>
          );
        if (n === "5")
          return (
            <View className="h-[13px] w-[8px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/5.png")}
                key={`number-image-${index}`}
                style={{ width: 7, height: 13 }}
              />
            </View>
          );
        if (n === "6")
          return (
            <View className="h-[13px] w-[8px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/6.png")}
                key={`number-image-${index}`}
                style={{ width: 7, height: 13 }}
              />
            </View>
          );
        if (n === "7")
          return (
            <View className="h-[13px] w-[8px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/7.png")}
                key={`number-image-${index}`}
                style={{ width: 7, height: 13 }}
              />
            </View>
          );
        if (n === "8")
          return (
            <View className="h-[13px] w-[8px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/8.png")}
                key={`number-image-${index}`}
                style={{ width: 7, height: 13 }}
              />
            </View>
          );
        if (n === "9")
          return (
            <View className="h-[13px] w-[8px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/9.png")}
                key={`number-image-${index}`}
                style={{ width: 7, height: 13 }}
              />
            </View>
          );
        if (n === ".")
          return (
            <View className="h-[13px] w-[3px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/dot.png")}
                key={`number-image-${index}`}
                style={{ width: 3, height: 5 }}
              />
            </View>
          );
        if (n === "K")
          return (
            <View className="h-[13px] w-[11px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/K.png")}
                key={`number-image-${index}`}
                style={{ width: 8, height: 13 }}
              />
            </View>
          );
        if (n === "M")
          return (
            <View className="h-[13px] w-[14px] items-center justify-start">
              <Image
                source={require("../../../../assets/images/feed/M.png")}
                key={`number-image-${index}`}
                style={{ width: 11, height: 13 }}
              />
            </View>
          );
      })}
    </View>
  );
};

export default NumberGenerator;
