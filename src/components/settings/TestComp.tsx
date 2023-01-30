import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootScreenNavigationType } from '../../types/navigation'

const TestComp = () => {
    const navigation = useNavigation<RootScreenNavigationType<"ContactUs">>()
    return (
        <View>
            <Text>TestComp</Text>
        </View>
    )
}

export default TestComp

