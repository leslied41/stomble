import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";

type UserAccountProfileProps = {
  user?: string;
  img?: string;
  showRemoveBtn?: boolean;
  width?: number;
  height?: number;
  rounded?: number;
  gap?: number;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  onPress?: () => void;
  isTouchableOpacity?: boolean;
};

const UserAccountProfile: FC<UserAccountProfileProps> = ({
  user,
  showRemoveBtn,
  width = 124,
  height = 124,
  rounded = 62,
  fontSize = 20,
  lineHeight = 24,
  color = "#E0E0E0",
  gap = 14,
  onPress,
  isTouchableOpacity = true,
}) => {
  return (
    <View>
      {isTouchableOpacity ? (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={{
              uri: "https://static.wikia.nocookie.net/southpark/images/c/c2/Butters_%28Facebook%29.jpg/revision/latest/scale-to-width-down/720?cb=20101010032409",
            }}
            style={{ width: width, height: height, borderRadius: rounded }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: fontSize,
              lineHeight: lineHeight,
              fontWeight: "700",
              color: color,
              marginTop: gap,
            }}
          >
            @John{user}
          </Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Image
            source={{
              uri: "https://static.wikia.nocookie.net/southpark/images/c/c2/Butters_%28Facebook%29.jpg/revision/latest/scale-to-width-down/720?cb=20101010032409",
            }}
            style={{ width: width, height: height, borderRadius: rounded }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: fontSize,
              lineHeight: lineHeight,
              fontWeight: "700",
              color: color,
              marginTop: gap,
            }}
          >
            @John
          </Text>
        </View>
      )}

      {showRemoveBtn && (
        <TouchableOpacity
          className="mt-[9px]"
          onPress={() => console.log("remove this account")}
        >
          <Text className="text-[#326FCB] text-[16px] leading-[19px] font-medium">
            Remove account
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserAccountProfile;
