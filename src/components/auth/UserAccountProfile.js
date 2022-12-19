import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const UserAccountProfile = ({ user, img, showRemoveBtn }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log("login this account")}>
        <Image
          source={{
            uri: "https://static.wikia.nocookie.net/southpark/images/c/c2/Butters_%28Facebook%29.jpg/revision/latest/scale-to-width-down/720?cb=20101010032409",
          }}
          className="w-[124px] h-[124px] rounded-[62px]"
        />
        <Text className="text-center text-[20px] leading-6 font-bold text-[#E0E0E0] mt-[14px]">
          @John
        </Text>
      </TouchableOpacity>
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
};
export default UserAccountProfile;
