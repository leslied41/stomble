import { View, Text, Pressable } from 'react-native'
import React, { FC, useState } from 'react'
import { ScreenLayout } from '../../../components/common'
import { AcknowledgeDeleteIcon, CircleCloseIcon, EmptyCheckCircleIcon, GreenCheckCircleIcon } from '../../../components/svg'
import { CircleCheckIcon } from '../../../components/icons'
import { CustomButton } from '../../../components/auth'

type AcknowledgeDeleteScreenProps = {
    navigation: any
}

const AcknowledgeDeleteScreen: FC<AcknowledgeDeleteScreenProps> = ({ navigation }) => {
    const [acknowledge, setAcknowledge] = useState<string>()

    return (
        <ScreenLayout header='Delete account'>

            <Text className="mt-[22px] text-[16px] text-white leading-[19.2px] font-[700] mb-[15px]">John Sarkis Delete Account</Text>
            <Text className="text-[13px] text-[#ababab] leading-[16px] font-[400]">You have 30 days to recover your account before they are permanently deleted.</Text>

            <Pressable onPress={() => setAcknowledge("checked")} className="mt-[16px] mb-[212px] relative">
                <View className='flex-row items-center absolute'>
                    {acknowledge === "checked" ? <GreenCheckCircleIcon /> : <EmptyCheckCircleIcon />}
                    <Text className="text-[14px] text-[#ababab] leading-[17px] font-[400] ml-[6px]">I acknowledge</Text>
                </View>
                <View className="absolute mt-[25px]">
                    {acknowledge === "unchecked" ? <AcknowledgeDeleteIcon /> : null}
                </View>
            </Pressable>

            <CustomButton text='Delete account' borderRadius={100} onPress={() => {
                acknowledge === "checked" ? navigation.navigate("DeleteSuccess") : setAcknowledge("unchecked")
            }} />

        </ScreenLayout>
    )
}

export default AcknowledgeDeleteScreen