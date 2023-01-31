import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { ScreenLayout } from '../common'
import { VerifyCodes } from '../auth'
import { CommonScreenProps } from '../../types/navigation'


const VerifyScreen: FC<CommonScreenProps<"VerifyScreen">> = ({ route }) => {
    const { header, title, onPress } = route.params
    return (
        <ScreenLayout header={title}>
            <VerifyCodes buttonTitle="Confirm" header={header} onPress={onPress} buttonRadius={100} />
        </ScreenLayout>
    )
}

export default VerifyScreen