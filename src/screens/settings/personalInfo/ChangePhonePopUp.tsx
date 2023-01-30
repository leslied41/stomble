import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'

import { useNavigation } from '@react-navigation/native'
import { PhoneIcon } from '../../../components/svg'

type ChangePhonePopUpProps = {
    dismiss: () => void,
    type?: string,
}

const ChangePhonePopUp: FC<ChangePhonePopUpProps> = ({ dismiss, type }) => {
    const navigation = useNavigation()

    const verifyCodes = () => {
        navigation.navigate("ChangePhone")
    }

    return (
        <>
            <View className="justify-center  items-center gap-y-[10px]">
                <View className="mt-[37.19%]">{<PhoneIcon />}</View>
                <View className="justify-center items-center">
                    <Text className="text-[18px] font-normal text-white leading-[21.6px]">Your phone numner:</Text>
                    <Text className="text-[18px] font-normal text-white leading-[21.6px]">+61******234</Text>
                </View>
                <Text className="text-[13px] font-extralight text-white leading-[15.6px] w-[210px] text-center">This phone number is linked to your account and is only visible to you. To change or unlink, we may need to verify the number for your security</Text>
            </View>
            <View className="h-[1px] bg-[#5C5C5C] w-[100%] mt-2 mb-4" />
            <Pressable onPress={() => { navigation.navigate("VerifyScreen", { header: '+61*****234', title: "Phone number", onPress: verifyCodes }), dismiss() }}>
                <Text className=" flex text-center text-[13px] font-normal text-white leading-[16px]">Change phone number</Text>
            </Pressable>
        </>
    )
}

export default ChangePhonePopUp