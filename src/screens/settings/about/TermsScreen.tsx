import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { ScreenLayout } from '../../../components/common';
import { CommonScreenProps } from '../../../types/navigation';


const TermsScreen: FC<CommonScreenProps<"Terms">> = ({ navigation }) => {
    return (
        <ScreenLayout header='Terms of use'>
             <View className='mt-[22px]'>
                <Text className="text-[18px] font-[700] leading-[22px] text-white">Terms of use screen</Text>
            </View>
        </ScreenLayout>
    )
}

export default TermsScreen