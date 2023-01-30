import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { ScreenLayout } from '../../../components/common';
import { CommonScreenProps } from '../../../types/navigation';

const OpenSourceLibrary: FC<CommonScreenProps<"OpenSourceLibrary">> = ({ navigation }) => {
    return (
        <ScreenLayout header='Open source libraries'>
            <View className='mt-[22px]'>
                <Text className="text-[18px] font-[700] leading-[22px] text-white">Open source libraries screen</Text>
            </View>
        </ScreenLayout>
    )
}

export default OpenSourceLibrary