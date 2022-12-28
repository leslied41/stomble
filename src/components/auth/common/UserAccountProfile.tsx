import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const UserAccountProfile = ({
  user,
  img,
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
            @John
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
UserAccountProfile.propTypes = {
  user: PropTypes.string,
  img: PropTypes.string,
  showRemoveBtn: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  rounded: PropTypes.number,
  gap: PropTypes.number,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func,
  isTouchableOpacity: PropTypes.bool,
};
export default UserAccountProfile;
