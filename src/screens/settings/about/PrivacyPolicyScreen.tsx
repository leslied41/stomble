import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { ScreenLayout } from '../../../components/common';
import { CommonScreenProps } from '../../../types/navigation';


const PrivacyPolicyScreen: FC<CommonScreenProps<"PrivacyPolicy">> = ({ navigation }) => {
    return (
        <ScreenLayout header='Privacy policy'>
            <View className='mt-[22px]'>
                <Text className="text-[18px] font-[700] leading-[22px] text-white">Privacy policy screen</Text>
            </View>
        </ScreenLayout>
    )
}

export default PrivacyPolicyScreen