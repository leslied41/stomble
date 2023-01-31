import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { ScreenLayout } from '../../../components/common'
import { CustomButton } from '../../../components/auth'

type DeleteAccountScreenProps = {
    navigation: any
}

const DeleteAccountScreen: FC<DeleteAccountScreenProps> = ({ navigation }) => {
    return (
        <ScreenLayout header='Delete account'>
            <Text className="mt-[22px] text-[16px] text-white leading-[19.2px] font-[700] mb-[17px]">John Sarkis Delete Account</Text>
            <Text className="text-[13px] text-[#ababab] leading-[16px] font-[400] mb-[17px]">Your account will be desactived for 30 days and won’t be visible</Text>

            <Text className="text-[13px] text-[#ababab] leading-[16px] font-[400] mb-[17px]">If you delecte your account:</Text>
            <View className="flex-row items-center relative mb-[17px]">
                <View className="w-[6px] h-[6px] bg-[#ababab] rounded-full  absolute top-1.5" />
                <Text className="text-[13px] text-[#ababab] leading-[16px] font-[400] ml-4">{`You won’t be able to log in and use any Stomble services with that account`}</Text>
            </View>

            <View className="flex-row items-center relative mb-[17px]">
                <View className="w-[6px] h-[6px] bg-[#ababab] rounded-full  absolute top-1.25" />
                <Text className="text-[13px] text-[#ababab] leading-[16px] font-[400] ml-4">You will lose access to all your saved videos</Text>
            </View>

            <View className="flex-row items-center relative mb-[67px]">
                <View className="w-[6px] h-[6px] bg-[#ababab] rounded-full  absolute top-1.5" />
                <Text className="text-[13px] text-[#ababab] leading-[16px] font-[400] ml-4">The accounts that you are following will be unfollowed</Text>
            </View>

            <CustomButton text="Continue" onPress={() => navigation.navigate("VerifyScreen", { header: '+61*****234', title: "Delete account", navigateTo: "AcknowledgeDelete" })} borderRadius={100} />

        </ScreenLayout>
    )
}

export default DeleteAccountScreen