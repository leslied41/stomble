import { View, Text, Pressable } from 'react-native'
import React, { FC, useCallback } from 'react'

import { useNavigation } from '@react-navigation/native'
import { EmailIcon } from '../../../components/svg'
import { HomeScreenNavigationProps } from "../../../types/navigation";
type ChangeEmailPopUpProps = {
    dismiss: () => void,
}

const ChangeEmailPopUp: FC<ChangeEmailPopUpProps> = ({ dismiss }) => {
    const navigation = useNavigation<HomeScreenNavigationProps<"Settings">>()

    const changeEmailPress = useCallback(() => {
        navigation.navigate("ChangeEmail", { title: "Change email address" });
    }, []);

    const unLinkEmailPress = useCallback(() => {

    }, [])


    return (
        <>
            <View className="justify-center  items-center gap-y-[10px]">
                <View className="mt-[37.19%]">{<EmailIcon />}</View>
                <View className="justify-center items-center">
                    <Text className="text-[18px] font-normal text-white leading-[21.6px]">Your email address:</Text>
                    <Text className="text-[18px] font-normal text-white leading-[21.6px]">J***n@gmail.com</Text>
                </View>
                <Text className="text-[13px] font-extralight text-white leading-[15.6px] w-[210px] text-center">This email is linked to your account and is only visible to you. To change or unlink it, we may need to verify the email for your security.</Text>
            </View>
            <View className="h-[1px] bg-[#5C5C5C] w-[100%] mt-2 my-4" />
            <Pressable onPress={() => { navigation.navigate("VerifyScreen", { header: 'Jss***n@gmail.com', title: "Email", onPress: changeEmailPress }), dismiss() }}>
                <Text className=" flex text-center text-[13px] font-normal text-white leading-[16px]">Change email</Text>
            </Pressable>
            <View className="h-[1px] bg-[#5C5C5C] w-[100%] mt-2 my-4" />
            <Pressable onPress={() => { navigation.navigate("VerifyScreen", { header: 'J***n@gmail.com', title: "Email", onPress: unLinkEmailPress }), dismiss() }}>
                <Text className=" flex text-center text-[13px] font-normal text-white leading-[16px]">Unlink email</Text>
            </Pressable>
        </>
    )
}

export default ChangeEmailPopUp