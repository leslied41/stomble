import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import ArrowRight from '../../components/svg/ArrowRight'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProps } from '../../types/navigation'

type SupportViewProps = {

}

const SupportView: FC<SupportViewProps> = ({ }) => {
    const navigation = useNavigation<HomeScreenNavigationProps<"Settings">>()
    return (
        <>
            <Text className="font-[400] text-[18px]  mb-[27px] mt-[21px] leading-[22px] text-[#ADADAD]">Support and about</Text>
            <View className="gap-[21px]">
                <Pressable onPress={() => navigation.navigate("ContactUs")} >
                    <View className="flex-row items-center justify-between">
                        <Text className="font-[400] text-[18px] leading-[22px] text-white">Contact us</Text>
                        <ArrowRight />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("About")} >
                    <View className="flex-row items-center justify-between">
                        <Text className="font-[400] text-[18px] leading-[22px] text-white">About</Text>
                        <ArrowRight />
                    </View>
                </Pressable>
            </View>
        </>

    )
}

export default SupportView